import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'

const ProfilePassword = ({ navigation }) => {

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar backgroundColor="#32d191" />
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
                        color="#666"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#666",
                    }}
                >
                    เปลี่ยนรหัสผ่าน
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                    <Icon name="notifications-outline" size={28} color="#666" />
                </TouchableOpacity>
            </View>
            <View style={{
                    paddingHorizontal: 10,
                }}>
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', marginTop: 20}} >
                 <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:16,color: '#000'}} >ทำการรีเซ็ตรหัสผ่าน ป้อนรหัสผ่านใหม่ ด้านล่างเพื่อเปลี่ยนรหัสผ่านของคุณ </Text>
                </View> 
               
                <View style={{flexDirection:'column',paddingTop:10}} >

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ededed',
                        width: '95%',
                        borderRadius: 10,
                        height: 60,
                        paddingLeft: 20,
                        marginTop: 0
                    }} >
                        <Icon name="lock-closed-outline" size={22} color="#818181" />
                        <TextInput style={styles.input} placeholder="New Password" secureTextEntry={true} placeholderTextColor="#818181" />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Icon name="eye-off-outline" size={24} color="000" />
                                ) : (
                                    <Icon name="eye-outline" size={24} color="000" />
                                )
                            }

                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ededed',
                        width: '95%',
                        borderRadius: 10,
                        height: 60,
                        paddingLeft: 20,
                        marginTop: 10
                    }} >
                        <Icon name="lock-closed-outline" size={22} color="#818181" />
                        <TextInput style={styles.input} placeholder="Confirm New Password" secureTextEntry={true} placeholderTextColor="#818181" />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Icon name="eye-off-outline" size={24} color="000" />
                                ) : (
                                    <Icon name="eye-outline" size={24} color="000" />
                                )
                            }

                        </TouchableOpacity>
                    </View>

                    <Buttons  btn_text={"รีเซ็ตรหัสผ่าน"} />
                </View>
                
            </View>
            </View>



        </ScrollView>
    )

}

export default ProfilePassword

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})