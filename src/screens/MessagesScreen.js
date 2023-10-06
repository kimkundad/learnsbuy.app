import React, {useState, useEffect, useCallback, Component} from 'react';
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
// import { socket } from "../utils/socket";
import { io } from "socket.io-client";
import InChatFileTransfer from '../components/InChatFileTranfer';
import InChatViewFile from '../components/InChatViewFile';
import * as DocumentPicker from 'react-native-document-picker';

class ChatScreen extends Component {

    state = {
        // Other component-specific state if needed
      };

    render() {
    return (
      <ChatComponent />
    );
  }

}


function ChatComponent() {

    const navigation = useNavigation();
    const { user, isLoading, error, isLogin, message } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [name, setName] = useState(user?.profile?.name);
    const [token, settoken] = useState(user?.token);
    const [socketx, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    const [photo, setPhoto] = useState(null);
    const [isAttachImage, setIsAttachImage] = useState(false);
    const [isAttachFile, setIsAttachFile] = useState(false);
    const [fileVisible, setFileVisible] = useState(false);
    const [imagePath, setImagePath] = useState('');
    const [filePath, setFilePath] = useState('');
    const [inputText, setInputText] = useState('');
    const [nextPage, setNextPage] = useState(2);
    const [refreshing, setRefreshing] = useState(true);
    const [toUser, setToUser] = useState('');

    const getDataUser = async () => {

        try {
              const response = await axios.get(`https://www.learnsbuy.com/api/get_userby_id/1`)
              const touserData = response?.data?.data
              console.log('dataParams', touserData)
              setToUser(touserData)

        } catch (error) {
            console.error('Error getDataUser:', error);
          }

      }
    
    useEffect(() => {
        getDataUser();
        const socket = io.connect("https://api.learnsabuy.com/");
    
        // Set up event listener for incoming messages
        socket.on('new_message', handleIncomingMessage)
    
        // Store the socket instance in state
        setSocket(socket);
        
        return () => {
          // Clean up the socket connection when unmounting
          socket.disconnect();
        };
      }, []);


      const handleIncomingMessage = (message) => {

        console.log('recive socket io', message)

        if(message.chat_user_id == user?.profile?.id || message.agent_id == user?.profile?.id){

            if(message.message_type == 'DataText'){
                const sockerData = {
                    _id: message.id,
                    text: message.message_in,
                    createdAt: new Date(message.timer),
                    user: {
                      _id: message.chat_user_id, // Adjust based on your API response
                      name: message.name,
                      avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.avatar, // Adjust based on your API response
                    },
                  };
                  // Handle incoming messages from the server
            // setMessages((previousMessages) => GiftedChat.append(previousMessages, sockerData));
            setMessages((previousMessages) => [sockerData, ...previousMessages]);
            }

            if(message.message_type == 'DataImage'){
                const sockerData = {
                    _id: message.id,
                    text: message.message_in,
                    createdAt: new Date(message.timer),
                    user: {
                        _id: message.chat_user_id, // Adjust based on your API response
                        name: message.name,
                        avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.avatar, // Adjust based on your API response
                    },
                    image: message.image,
                    file: {
                      url: ''
                    }
                  };
                  // Handle incoming messages from the server
             setMessages((previousMessages) => [sockerData, ...previousMessages]);
            }

            if(message.message_type == 'DataFile'){
                const sockerData = {
                    _id: message.id,
                    text: message.message_in,
                    createdAt: new Date(message.timer),
                    user: {
                        _id: message.chat_user_id, // Adjust based on your API response
                        name: message.name,
                        avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.avatar, // Adjust based on your API response
                    },
                    image: '',
                    file: {
                        url: message.image,
                          }
                  };
                  // Handle incoming messages from the server
                  setMessages((previousMessages) => [sockerData, ...previousMessages]);
            }
    
        }
      };

    useEffect(() => {

        const fetchChatMessages = async () => {
            try {
    
              //  const response = await axios.post('http://10.0.2.2:3002/',{token})
              //  const response = await axios.get(`https://api.learnsabuy.com/?page=1`)
              const response = await axios.get(`https://api.learnsabuy.com/?page=1&userID=${user?.profile?.id}`)
                const apiMessages = response?.data?.data
                const formattedMessages = apiMessages.map((message) => 
                (
                    message?.message_type == 'DataFile'
                    ? ({
                            _id: message.id,
                            text: message.message,
                            createdAt: new Date(message.created_at),
                            user: {
                              _id: message.user_id, // Adjust based on your API response
                              name: message.user_name,
                              avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                            },
                            image: '',
                            file: {
                              url: message.image,
                            },
                          })
                    : message?.message_type == 'DataImage' 
                    ? ({
                        _id: message.id,
                        text: message.message,
                        createdAt: new Date(message.created_at),
                        user: {
                          _id: message.user_id, // Adjust based on your API response
                          name: message.user_name,
                          avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                        },
                            image: message.image,
                            file: {
                              url: ''
                            },
                      })
                    : ({
                        _id: message.id,
                        text: message.message,
                        createdAt: new Date(message.created_at),
                        user: {
                          _id: message.user_id, // Adjust based on your API response
                          name: message.user_name,
                          avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                        }
                      })
                  
                  ));
        
                  setMessages((previousMessages) => GiftedChat.append(previousMessages, formattedMessages));
            } catch (error) {
                console.error('Error fetching messages:', error);
              }
        };
        
        fetchChatMessages();
    }, []);


    

    const fetchChatMessages5 = async (nextPage) => {

        try {
    
            //  const response = await axios.post('http://10.0.2.2:3002/',{token})
              const response = await axios.get(`https://api.learnsabuy.com/?page=${nextPage}`)
              const apiMessages = response?.data?.data
              console.log('get data page ', nextPage)
              const formattedMessages = apiMessages.map((message) => 
              (
                  message?.message_type == 'DataFile'
                  ? ({
                          _id: message.id,
                          text: message.message,
                          createdAt: new Date(message.created_at),
                          user: {
                            _id: message.user_id, // Adjust based on your API response
                            name: message.user_name,
                            avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                          },
                          image: '',
                          file: {
                            url: message.image,
                          },
                        })
                  : message?.message_type == 'DataImage' 
                  ? ({
                      _id: message.id,
                      text: message.message,
                      createdAt: new Date(message.created_at),
                      user: {
                        _id: message.user_id, // Adjust based on your API response
                        name: message.user_name,
                        avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                      },
                          image: message.image,
                          file: {
                            url: ''
                          },
                    })
                  : ({
                      _id: message.id,
                      text: message.message,
                      createdAt: new Date(message.created_at),
                      user: {
                        _id: message.user_id, // Adjust based on your API response
                        name: message.user_name,
                        avatar: 'https://www.learnsbuy.com/assets/images/avatar/'+message.user_avatar, // Adjust based on your API response
                      }
                    })
               
                ));

                if (formattedMessages.length > 0) {
                    // หลังจากโหลดเสร็จแล้ว เราจะต้องกำหนดข้อความเหล่านี้ให้กับ messages state
                    setMessages((previousMessages) => {
                      return GiftedChat.append(previousMessages, formattedMessages);
                    });
                  }
                
                setRefreshing(false)
          } catch (error) {
              console.error('Error fetching messages:', error);
            }
    }

    const loadMoreMessage = async () => {

        setNextPage(nextPage + 1)
        fetchChatMessages5(nextPage);
        console.log('loading more messages -->', nextPage)
    }


    const onSend = useCallback((messages = []) => {
        
        const [messageToSend] = messages;
        if (isAttachImage) {
            console.log('imagePath', imagePath)
          const newMessage = {
            _id: messages[0]._id + 1,
            text: messageToSend.text,
            createdAt: new Date(),
            user: {
              _id: 584,
              avatar: '',
            },
            image: imagePath,
            file: {
              url: ''
            }
          };
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessage),
          );
          setImagePath('');
          setIsAttachImage(false);
        } else if (isAttachFile) {
          const newMessage = {
            _id: messages[0]._id + 1,
            text: messageToSend.text,
            createdAt: new Date(),
            user: {
              _id: 584,
              avatar: '',
            },
            image: '',
            file: {
              url: filePath
            }
          };
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessage),
          );
          setFilePath('');
          setIsAttachFile(false);
        } else {
            console.log('newMessage+++++', messages)
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
          );
        }
      },
      [filePath, imagePath, isAttachFile, isAttachImage],
      );





    const renderSend = (props) => {
        
        return (
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={_pickDocument}>
            <Icon
            name="attach-outline"
            style={{
                marginBottom: 10,
                marginRight: 10,
                transform: [{rotateY: '180deg'}],
            }}
            size={32}
            color='#2e64e5'
            tvParallaxProperties={undefined}
            />
            </TouchableOpacity>
            <Send {...props}>
              <Icon
                name="paper-plane-outline"
                style={{marginBottom: 5, marginRight: 5}}
                size={32}
                color="#2e64e5"
              />
          </Send>
          </View>
        );
      };

      const renderBubble = (props) => {
        
        const {currentMessage} = props;
        if (currentMessage.file && currentMessage.file.url) {
          return (
            <TouchableOpacity
            style={{
              ...styles.fileContainer,
              backgroundColor: props.currentMessage.user._id === 2 ? '#2e64e5' : '#efefef',
              borderBottomLeftRadius: props.currentMessage.user._id === 2 ? 15 : 5,
              borderBottomRightRadius: props.currentMessage.user._id === 2 ? 5 : 15,
            }}
            onPress={() => setFileVisible(true)}
            >
              <InChatFileTransfer
                style={{marginTop: -10}}
                filePath={currentMessage.file.url}
              />
              <InChatViewFile
                  props={props}
                  visible={fileVisible}
                  onClose={() => setFileVisible(false)}
                />
              <View style={{flexDirection: 'column'}}>
                <Text style={{
                      ...styles.fileText,
                      color: currentMessage.user._id === 2 ? 'white' : 'black',
                    }} >
                  {currentMessage.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#2e64e5',
              },
            }}
            textStyle={{
              right: {
                color: '#ffffff',
              },
            }}
          />
        );
      };

      const _pickDocument = async () => {
        try {
          const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            copyTo: 'documentDirectory',
            mode: 'import',
            allowMultiSelection: true,
          });
          const fileUri = result[0].fileCopyUri;
          console.log('result img-->',result);
          if (!fileUri) {
            console.log('File URI is undefined or null');
            return;
          }
          if (fileUri.indexOf('.png') !== -1 || fileUri.indexOf('.jpg') !== -1 || fileUri.indexOf('.jpeg') !== -1) {
            setPhoto(result)
            setImagePath(fileUri);
            setIsAttachImage(true);

          } else {
            setPhoto(result)
            setFilePath(fileUri);
            setIsAttachFile(true);
          }
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('User cancelled file picker');
          } else {
            console.log('DocumentPicker err => ', err);
            throw err;
          }
        }
      };

      const renderChatFooter = useCallback(() => {
        if (imagePath) {
          return (
            <View style={styles.chatFooter}>
              <Image source={{uri: imagePath}} style={{height: 75, width: 75}} />
              <TouchableOpacity
                onPress={() => setImagePath('')}
                style={styles.buttonFooterChatImg}
              >
                <Text style={styles.textFooterChat}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }
        if (filePath) {
          return (
            <View style={styles.chatFooter}>
              <InChatFileTransfer
                filePath={filePath}
              />
              <TouchableOpacity
                onPress={() => setFilePath('')}
                style={styles.buttonFooterChat}
              >
                <Text style={styles.textFooterChat}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }
        return null;
      }, [filePath, imagePath]);

      const scrollToBottomComponent = () => {
        return(
          <Icon name='arrow-down-circle-outline' size={22} color='#33333' />
        );
      }

      const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToTop = 80;
        return contentSize.height - layoutMeasurement.height - paddingToTop <= contentOffset.y;
      }

     

      const renderInputToolbar = (props) => {
        return (
            <View style={styles.containerx}>
            <View style={styles.innerContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.inputAndMicrophone}>
                <TextInput
                    multiline
                    placeholder={"Type something..."}
                    style={styles.input}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <TouchableOpacity onPress={_pickDocument} style={styles.rightIconButtonStyle}>
                    <Icon
                        name="attach-outline"
                        size={23}
                        color="#04a606"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.sendButton}
                onPress={ async () => {

                    if (isAttachImage) {

                        const formData = new FormData();
                        formData.append('img', {
                        uri: photo[0].uri,
                        type: photo[0].type, // Adjust the MIME type according to your use case
                        name: photo[0].name,
                        });
                        formData.append('message_type', 'DataImage');

                        formData.append('message_in', inputText);
                        formData.append('name', user?.profile?.name);
                        formData.append('user_id', user?.profile?.id);
                        formData.append('provider', user?.profile?.provider);
                        formData.append('avatar', user?.profile?.avatar);
                        formData.append('playerid', user?.profile?.playerid);
                        formData.append('agent_id', 1);
                        formData.append('noti_status', toUser?.noti_status);
                        formData.append('fcmToken', toUser?.fcmToken);

                        console.log('img->>', formData)

                        try {
                            // Make an API request to send a message
                            const responsex = await axios.post('https://api.learnsabuy.com/index_2', 
                                  formData,{
                                headers: { 'Content-Type': 'multipart/form-data' },
                            })
                            setInputText('')
                            // Handle the response from the server
                            console.log('response-->', responsex?.data)
                            
                          } catch (error) {
                            console.error('Error sending message:', error);
                          }
                     
                        // const newMessage = {
                        //     _id: messages[0]._id + 1,
                        //     text: inputText,
                        //     createdAt: new Date(),
                        //     user: {
                        //       _id: user?.profile?.id,
                        //       avatar: '',
                        //     },
                        //     image: imagePath,
                        //     file: {
                        //       url: ''
                        //     }
                        //   };
                        //   setMessages(previousMessages =>
                        //     GiftedChat.append(previousMessages, newMessage),
                        //   );
                          setImagePath('');
                          setIsAttachImage(false);

                    } else if (isAttachFile) {


                        const formData = new FormData();
                        formData.append('img', {
                        uri: photo[0].uri,
                        type: photo[0].type, // Adjust the MIME type according to your use case
                        name: photo[0].name,
                        });
                        formData.append('message_type', 'DataFile');

                        formData.append('message_in', inputText);
                        formData.append('name', user?.profile?.name);
                        formData.append('user_id', user?.profile?.id);
                        formData.append('provider', user?.profile?.provider);
                        formData.append('avatar', user?.profile?.avatar);
                        formData.append('playerid', user?.profile?.playerid);
                        formData.append('agent_id', 1);
                        formData.append('noti_status', toUser?.noti_status);
                        formData.append('fcmToken', toUser?.fcmToken);

                        console.log('img->>', formData)

                        try {
                            // Make an API request to send a message
                            const responsex = await axios.post('https://api.learnsabuy.com/index_2', 
                                  formData,{
                                headers: { 'Content-Type': 'multipart/form-data' },
                            })
                            setInputText('')
                            // Handle the response from the server
                            console.log('response-->', responsex?.data)
                            
                          } catch (error) {
                            console.error('Error sending message:', error);
                          }

                        // const newMessage = {
                        //     _id: messages[0]._id + 1,
                        //     text: inputText,
                        //     createdAt: new Date(),
                        //     user: {
                        //       _id: user?.profile?.id,
                        //       avatar: '',
                        //     },
                        //     image: '',
                        //     file: {
                        //       url: filePath
                        //     }
                        //   };
                        //   setMessages(previousMessages =>
                        //     GiftedChat.append(previousMessages, newMessage),
                        //   );

                    
                          setFilePath('');
                          setIsAttachFile(false);

                    } else {

                        if (inputText.trim().length > 0) {
                            console.log('response-->', toUser?.noti_status)
                            try {
                                // Make an API request to send a message
                                const responsex = await axios.post('https://api.learnsabuy.com/index_2', {
                                  message_in: inputText, 
                                  name: user?.profile?.name,
                                  user_id: user?.profile?.id,
                                  provider: user?.profile?.provider,
                                  avatar: user?.profile?.avatar,
                                  playerid: user?.profile?.playerid,
                                  agent_id: 1,
                                  noti_status: toUser?.noti_status,
                                  fcmToken: toUser?.fcmToken,
                                  message_type: 'DataText'
                                });
                                setInputText('')
                                // Handle the response from the server
                                console.log('response-->', responsex?.data?.data)
                                
                              } catch (error) {
                                console.error('Error sending message:', error);
                              }

                        }
                    }

                    

                }}
            >
                <Icon
                    name="paper-plane-outline"
                    size={23}
                    color="#ffffff"
                />
            </TouchableOpacity>
        </View>
        </View>
        </View>
        );
      };


    return (
        <>
            <StatusBar backgroundColor="#32d191" />
            <View style={{ backgroundColor: "#ffffff", flex: 1, paddingBottom: 20 }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    borderBottomColor: "#dadde1",
                                borderBottomWidth: 1,
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon
                        name="arrow-back-outline"
                        size={28}
                        color="#666666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#666666",
                    }}
                >
                    ตอบ - ถาม
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                  
                </TouchableOpacity>
            </View>
        <GiftedChat
                style={styles.container}
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{
                    _id: user?.profile?.id,
                }}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollToBottomComponent}
                renderChatFooter={renderChatFooter}
                renderInputToolbar={(props) => renderInputToolbar(props)}
                //loadEarlier={refreshing}
                // inverted
                // listViewProps={{
                //     scrollEventThrottle: 400,
                //     onScroll: ({ nativeEvent }) => {
                //       if (isCloseToTop(nativeEvent)) {
                //         setRefreshing(true)
                //         loadMoreMessage();
                //       }
                //     }
                //   }}
                />
                </View>
                </>
    )

}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerx : {
        paddingBottom: 5,
    },
    paperClip: {
      marginTop: 8,
      marginHorizontal: 5,
      transform: [{rotateY: '180deg'}],
    },
    sendButton: {marginBottom: 10, marginRight: 10},
    sendContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    innerContainer: {
		paddingHorizontal: 10,
		marginHorizontal: 5,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 1,
	},
    chatFooter: {
      shadowColor: '#1F2687',
      shadowOpacity: 0.37,
      shadowRadius: 8,
      shadowOffset: {width: 0, height: 8},
      elevation: 8,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.18)',
      flexDirection: 'row',
      padding: 5,
      backgroundColor: '#32d191'
    },
    fileContainer: {
      flex: 1,
      maxWidth: 300,
      marginVertical: 2,
      borderRadius: 15,
    },
    fileText: {
      marginVertical: 5,
      fontSize: 16,
      lineHeight: 20,
      marginLeft: 10,
      marginRight: 5,
    },
    textTime: {
      fontSize: 10,
      color: 'gray',
      marginLeft: 2,
    },
    buttonFooterChat: {
      width: 35,
      height: 35,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderColor: 'black',
      right: 3,
      top: -2,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    buttonFooterChatImg: {
      width: 35,
      height: 35,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderColor: 'black',
      left: 66,
      top: -4,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    textFooterChat: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'gray',
    },
    inputAndMicrophone: {
		flexDirection: "row",
		backgroundColor: '#f0f0f0',
		flex: 3,
		marginRight: 10,
		paddingVertical: Platform.OS === "ios" ? 10 : 0,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
	},
	input: {
		backgroundColor: "transparent",
		paddingLeft: 20,
		color: '#000000',
		flex: 3,
		fontSize: 14,
		height: 50,
		alignSelf: "center",
	},
    rightIconButtonStyle: {
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 15,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: "#ffffff",
	},
    sendButton: {
		backgroundColor: '#04a606',
		borderRadius: 50,
		height: 40,
		width: 40,
		alignItems: "center",
		justifyContent: "center",
	},
  });
  