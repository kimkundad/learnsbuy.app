import React, {useState, useEffect, useCallback, Component} from 'react';
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';

class MessagesScreenx extends Component {

    state = {
        messages: [
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                _id: 15,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Hello world',
                createdAt: new Date(),
                user: {
                _id: 9,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
                },
            },
            ],
        isLoadingEarlier: false, // Initially, set it to false
      };
      
    
      componentDidMount() {
        // Fetch initial chat messages from your API
        this.fetchChatMessages();
      }

      fetchChatMessages = async () => {
        try {
          const response = await axios.get('YOUR_API_ENDPOINT');
          const messages = response.data.messages;
          this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
          }));
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }

  onSend = async (messages = []) => {
    console.log('onSend',)
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, messages),
        );
  }


  renderSend = (props) => {
        
    return (
        <Send {...props}>
        <View>
          <Icon
            name="paper-plane-outline"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  renderBubble = (props) => {
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

  scrollToBottomComponent = () => {
    return(
      <Icon name='arrow-down-circle-outline' size={22} color='#33333' />
    );
  }

  render() {
    return (
        <GiftedChat
        style={styles.container}
        messages={this.messages}
        onSend={(messages) => onSend(messages)}
        user={{
            _id: 15,
        }}
        renderBubble={this.renderBubble}
        alwaysShowSend
        renderSend={this.renderSend}
        scrollToBottom
        scrollToBottomComponent={this.scrollToBottomComponent}
        />
    );
  }
}

export default MessagesScreenx;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ffffff',
    },
  });