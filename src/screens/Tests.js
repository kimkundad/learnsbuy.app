import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, StatusBar, Dimensions, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { categories, products, slideimage } from "../data/index";
import Header from '../components/header'
import useCourse from '../../services/course';

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const Tests = ({ navigation: { navigate } }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };

    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [sortData, setSortData] = useState(0)
    const { data: course, isLoading: fetchLoading2 } = useCourse(sortData)

    return (
        <SafeAreaView>
            <View>
                <StatusBar backgroundColor="#32d191" />
                <Header/>
                <ScrollView
                    style={{
                        marginBottom: 10,
                        paddingHorizontal: 10,
                        marginTop: 10,
                        marginBottom: 120
                    }}
                >
               <View>
                            <Text
                                style={{
                                    fontFamily: "IBMPlexSansThai-Bold",
                                    fontSize: 16,
                                    paddingTop: 5,
                                    marginTop:0,
                                    color: "#666666"
                                }}
                            >
                                Coming Soon !
                            </Text>
                           
                            <View
                                style={{
                                    marginBottom: 80
                                }}
                            >
                            
                              
                            </View>
                        </View>
                        
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )

}

export default Tests