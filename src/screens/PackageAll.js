import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import usePackage from '../../services/package';
import CardPackage from '../components/cardPackage'
import { useNavigation } from '@react-navigation/native';

const PackagesAll = () => {

    const { data: pacKage, isLoading: fetchLoading3 } = usePackage()
    const navigation = useNavigation();
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
                    แพ็กเกจสุดคุ้ม
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
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%', paddingBottom:50}} >
                

            {fetchLoading3 ?
                            <View></View>
                            :
                            <View>
                                {pacKage?.data?.get_package.map((pack) => (
                                <CardPackage
                                    title={pack.c_pack_name}
                                    img={{ uri: 'https://learnsbuy.com/assets/uploads/' + pack.c_pack_image }}
                                    price={pack.c_pack_price}
                                    discount={pack.c_pack_price_2}
                                    pack={pack}
                                    onPress={()=> navigation.navigate('PackageDetail', { pack: pack })}
                                />
                                ))}
                                </View>
                        }
                
            </View>
            </View>



        </ScrollView>
    )

}

export default PackagesAll

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