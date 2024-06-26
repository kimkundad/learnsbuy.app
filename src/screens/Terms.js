import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/ButtonsLogin'
import LinearGradient from 'react-native-linear-gradient';
import { List } from 'react-native-paper';

const win = Dimensions.get('window');

const ratio = win.width / 541; //541 is actual image width

const IMAGE_WITH = 180;
const IMAGE_HEIGHT = 118;

const Terms = ({ navigation }) => {

    return (
        <LinearGradient
            colors={['#32d191', '#26a16f', '#32d191']}
            style={styles.gradient}
        >
            <StatusBar backgroundColor="#32d191" />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 8,
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
                        color="#fff"
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontFamily: "IBMPlexSansThai-Bold",
                        fontSize: 16,
                        color: "#ffffff",
                    }}
                >
                    ข้อกำหนดและเงื่อนไขการใช้บริการ
                </Text>
                <TouchableOpacity
                    style={{
                        padding: 5,
                    }}
                >
                   
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{
                    paddingHorizontal: 10,
                    marginTop: 30
                }}>
                    <View style={styles.ops}>

                        
                        <View style={{
                            flexDirection: "column",
                            marginTop: 20,
                            paddingHorizontal: 20,
                        }}>
                            <View style={{
                                maxWidth: '100%',
                            }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize:12
                                }}>
                                www.learnsbuy.com
                                </Text>
                                <Text style={{
                                    fontSize:12,
                                    maxWidth: '100%',
                                    fontFamily: "IBMPlexSansThai-Regular",
                                }}>
                                เรากำลังปลูกอนาคต สร้างแรงบันดาลใจทางการเรียนรู้ให้เด็กไทยก้าวทันโลก และเป็นกำลังสำคัญในการพัฒนาประเทศ เว็บไซต์ learnsbuy.com แหล่งค้นคว้าข้อมูลข่าวสารเกี่ยวกับโรงเรียนต่างๆ ทั่วประเทศ รายละเอียดกิจกรรมส่งเสริมการเรียนรู้ และกิจกรรมเพื่อสังคมต่างๆ มากมาย ตลอดจนเป็นสื่อกลางในการส่งเสริมและสนับสนุนการเรียนการสอนให้กับครู อาจารย์ และบุคลากรทางการศึกษาทั้งในพื้นที่ใกล้เคียงและพื้นที่ห่างไกลให้ได้มีโอกาสเรียนรู้และเข้าถึงแหล่งข้อมูลข่าวสาร สาระความรู้ในด้านต่างๆ ได้อย่างทัดเทียมและเกิดประสิทธิภาพสูงสุด ด้วยบริการระบบฐานข้อมูลทางการศึกษา ตารางกิจกรรมสื่อเสริมการเรียนการสอน และบริการการแสดงความคิดเห็นในกระทู้ และบริการอื่นๆ อีกมากมาย เพื่อรองรับการให้บริการแก่สมาชิก (ต่อไปนี้จะรวมเรียกว่า “บริการ” ) หากท่านประสงค์จะใช้บริการใดๆ ของ learnsbuy.com โปรดกดปุ่ม "ตกลง" สมัครเป็นสมาชิก โดยบริษัทฯ จะถือว่าท่านตกลงปฏิบัติตามข้อกำหนดและเงื่อนไขการใช้บริการในเว็บไซต์ ดังนี้
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12, marginTop: 10 ,fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            1.การสมัครสมาชิก หากท่านประสงค์จะใช้บริการใดๆ ใน learnsbuy ท่านจะต้องสมัครเป็นสมาชิกโดยกดปุ่ม "สมัครสมาชิก | Register" และกรอกข้อมูลต่างๆ ของท่านลงในแบบฟอร์มสมัครสมาชิก โดยท่านไม่ต้องเสียค่าธรรมเนียมหรือค่าบริการแต่อย่างใดทั้งสิ้น หลังจากบริษัทได้รับข้อมูลการสมัครสมาชิกครบถ้วนแล้ว บริษัทจะจัดส่ง e-mail ไปยังท่าน เพื่อแจ้งรหัสประจำตัว(ID) พร้อมรหัสผ่าน (Password) ซึ่งท่านสามารถนำมาใช้บริการต่างๆ ในเว็บไซต์ learnsbuy.com ได้ในทันที ซึ่งต่อไปในข้อกำหนดและเงื่อนไขนี้จะเรียกท่านว่า "สมาชิก"                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            2.ระยะเวลาการเป็นสมาชิก สมาชิกมีสิทธิใช้บริการใดๆ ใน learnsbuy นับแต่วันที่ท่านเป็นสมาชิกตามข้อ 1. และสถานะการเป็นสมาชิกมีผลอยู่ตลอดไปจนกว่าท่านจะบอกเลิกเป็นลายลักษณ์อักษรมาทางอีเมล (learnsbuy@gmail.com) หรือบริษัทยกเลิกการเป็นสมาชิกอันเนื่องจากสมาชิกไม่ปฏิบัติหรือปฏิบัติผิดข้อกำหนดหรือเงื่อนไขข้อใดข้อหนึ่งที่กำหนด ไว้ใน "ข้อกำหนดและเงื่อนไขการใช้บริการทั่วไป"                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3. คำรับรองของสมาชิก                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.1 สมาชิกให้คำรับรองการสมัครเป็นสมาชิก ดังนี้                            
                            </Text>
                            <Text style={{ fontSize: 12 , fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> สมาชิกรับรองว่าการให้ข้อมูลตามที่ระบุไว้ในการสมัครสมาชิกเป็นข้อมูลที่สามารถระบุตัวสมาชิกและเป็นจริงทุกประการ 
                            เพื่อประโยชน์ที่จะได้รับสิทธิพิเศษต่างๆ ตามที่บริษัทจะแจ้งให้ทราบเป็นคราวๆ ไป 
                            สมาชิกยินยอมให้บริษัทตรวจสอบความเป็นจริงและถูกต้องของข้อมูลได้ 
                            และหากการตรวจสอบพบว่าข้อมูลที่ให้ไม่ตรงกับความจริงบริษัทมีสิทธิยกเลิกใบสมัครและ/หรือการให้บริการ TruePlookpanya ได้  
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> สมาชิกจะใช้บริการ learnsbuy ด้วยตนเองและจะรักษารหัสประจำตัว (ID) และรหัสผ่าน (password) ที่ได้รับจากบริษัท เพื่อการใช้บริการใน learnsbuy ไว้เป็นความลับ สมาชิกจะไม่เปิดเผยหรือให้บุคคลหนึ่งบุคคลใดใช้รหัสประจำตัว (ID) และรหัสผ่าน (password) ของสมาชิก เพื่อใช้บริการ learnsbuy (ID) และรหัสผ่าน (password) ของสมาชิก เพื่อใช้บริการ learnsbuy 
                            ไม่ว่าสมาชิกจะให้หรือไม่ให้ความยินยอมก็ตาม
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.2 เนื้อหาที่สมาชิกจะส่ง แสดง หรือเปิดเผยผ่านการใช้บริการใด ๆ ใน TruePlookpanya ต้องไม่มีลักษณะดังนี้
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> ข้อความหยาบ เสียดสี ไม่สุภาพ หรือไม่เหมาะสมด้วยประการใดๆ
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> การให้ข้อมูลอันเป็นเท็จ หรือส่อนัยทางเพศ หรือการให้ข้อมูล หรือข้อความที่อาจก่อให้เกิดความขัดแย้ง สร้างความเสื่อมเสีย หรือเสียหายต่อบริษัท หรือสมาชิกอื่น และ/หรือบุคคลอื่นๆ ละเมิดลิขสิทธิ์ ทรัพย์สินทางปัญญาอื่นๆ และ/หรือสิทธิของบริษัท และ/หรือบุคคลใด
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> จะไม่กระทำการใดๆ อันเป็นการละเมิดสิทธิส่วนบุคคลของสมาชิกรายอื่นหรือบุคคลอื่น
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> ขัดต่อความมั่นคงหรือความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชน
                            </Text>
                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> ขัดต่อพระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 พระราชบัญญัติลิขสิทธิ์ (ฉบับที่ 2) พ.ศ. 2558 หรือกฎหมายอื่น
                            </Text>





                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.3 สมาชิกรับรองว่าข้อมูลที่ส่งไปยังเว็บไซต์ learnsbuy เป็นข้อมูลที่ถูกต้อง และสมาชิกจะทำการปรับปรุงข้อมูล และจะรับผิดชอบต่อบริษัท หากนำเอาข้อมูลที่ไม่ถูกต้องหรือไม่เป็นจริงมา upload ในเว็บไซต์ TruePlookpanya โดยบริษัทสงวนสิทธิที่จะไม่รับข้อมูลหรือข่าวสารหรือจดทะเบียนเพื่อให้เข้ามายังเว็บไซต์ learnsbuy 
                            ได้ตามที่บริษัทเห็นสมควร                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.4 สมาชิกจะไม่นำเสนอข้อความหรือเนื้อหาอันเป็นการวิพากษ์วิจารณ์ หรือพาดพิงสถาบันพระมหากษัตริย์และราชวงศ์เป็นอันขาด                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.5 สมาชิกที่ปฏิบัติผิดเงื่อนไขในการ Upload จะต้องรับผิดชอบในความเสียหายที่เกิดขึ้นเองทั้งสิ้น และตกลงยินยอมชดใช้ค่าเสียหายให้แก่บริษัทหากการฝ่าฝืนดังกล่าวก่อให้เกิดความเสียหายแก่บริษัท                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3.6 สมาชิกต้องใช้นามจริงหรือนามแฝงที่เหมาะสม สุภาพ ไม่หยาบคายหรือส่อไปในทางลามกอนาจาร หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชน                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 20, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            4.เงื่อนไขทั่วไป                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />4.1 การนำเสนอข้อมูล ข่าวสาร บทความ หรือข้อความอื่นใดทั้งหมดในเว็บไซด์นี้เป็นเพียงการให้บริการ รวบรวมข้อมูล ความรู้ ฐานข้อมูลทางวิชาการ และความรู้ด้านต่าง ๆ รวมทั้งเป็นเวทีแสดงความคิดเห็น หรือแลกเปลี่ยนข้อมูลข่าวสารระหว่างผู้ใช้บริการด้วยกันเท่านั้น ดังนั้น บริษัทจึงไม่รับรองความถูกต้องของบรรดาข้อมูลข่าวสาร บทความ หรือข้อความอื่นใดที่เผยแพร่อยู่บน learnsbuy บริษัทไม่ใช่ตัวแทน ห้างหุ้นส่วน หรือบุคคลที่มีนิติสัมพันธ์ใด ๆ กับเจ้าของข้อมูลข่าวสาร บทความ หรือข้อความใด ๆ ซึ่งปรากฏอยู่บนเว็บไซด์ learnsbuy และเว็บไซต์ learnsbuy เป็นเพียงสื่อกลางที่ใช้ในการส่งผ่านข้อมูลระหว่างผู้ใช้บริการ และเจ้าของข้อมูล ข่าวสารเท่านั้น โดยบริษัทไม่สามารถตรวจสอบหรือทราบถึงแหล่งที่มาและ/หรือรายละเอียดของเนื้อหาต่าง ๆ ได้อย่างครบถ้วน 
                            บริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นแก่สมาชิกหรือบุคคลใดๆ ที่สมาชิกติดต่อโดยการสื่อสารข้อมูลหรือข่าวสารผ่านเว็บไซต์ TruePlookpanya</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />4.2 ผู้ใดแอบอ้างหรือกระทำการใดๆ อันเป็นการละเมิดสิทธิ์ส่วนบุคคล โดยใช้ข้อมูลของผู้อื่นมาแอบอ้างการสมัครสมาชิก ถือเป็นความผิดและต้องรับโทษตามที่กฎหมายกำหนด</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            /> 4.3 สมาชิกจะได้รับสิทธิพิเศษต่างๆ เช่น มีสัญลักษณ์พิเศษในการใช้งานเว็บบอร์ด 
                            สามารถใช้คำสั่งพิเศษของเว็บบอร์ด ตลอดจนมีสิทธิเข้าร่วมเล่นเกมชิงรางวัลและเข้าร่วมกิจกรรมต่าง ๆ 
                            ตามที่โครงการปลูกปัญญาจัดให้มีขึ้น </Text>

                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            5. สิทธิของบริษัท บริษัทมีสิทธิระงับการให้บริการชั่วคราวบางส่วนหรือทั้งหมดในเวลาใดๆ ก็ได้ หากสมาชิกปฏิบัติผิดเงื่อนไขข้อหนึ่งข้อใดของข้อกำหนดและเงื่อนไขทั่วไป หรือระบบการให้บริการของบริษัทขัดข้องชั่วคราวไม่ว่าด้วยเหตุใดๆ
                                                      </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            6. ข้อจำกัดความรับผิดของบริษัท บริษัทไม่ต้องรับผิดชอบและชดใช้ค่าเสียหายใดๆ อันเกิดขึ้นจากหรือเกี่ยวเนื่องกับการใช้บริการ learnsbuy แก่สมาชิกหรือบุคคลใดๆ ไม่ว่าในกรณีใดๆ หากบริษัทไม่สามารถให้บริการบางส่วนหรือทั้งหมด อันเนื่องจากระบบหรืออุปกรณ์ใดๆ ของสมาชิกชำรุดหรือขัดข้อง หรือระบบโทรศัพท์ หรือระบบสื่อสารโทรคมนาคมขัดข้องหรือเหตุใดๆ ที่อยู่นอกเหนือการควบคุมของบริษัท และบริษัทไม่ต้องรับผิดชอบในความเสียหายใดๆ
                                                   </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            7. การโอนสิทธิ สมาชิกจะโอนสิทธิและ/หรือหน้าที่ใด ๆ อันเกี่ยวเนื่องกับการให้บริการใด ๆ ในเว็บไซต์ learnsbuy ให้แก่บุคคลอื่นไม่ได้ เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรจากบริษัท โดยบริษัทมีสิทธิโอนสิทธิและ/หรือ หน้าที่ใด ๆ อันเกี่ยวเนื่องกับการให้บริการใด ๆ ในเว็บไซต์ learnsbuy ให้แก่บุคคลใดก็ได้
                                  </Text>
                                  <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                                  8. การสิ้นสุดการให้บริการ การให้บริการนี้อาจสิ้นสุดลงในเวลาใด ๆ ก็ได้ ดังนี้                                  
                                  </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />สมาชิกขอบอกเลิกการเป็นสมาชิกโดยแจ้งเป็นลายลักษณ์อักษรมายังบริษัท</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />สมาชิกไม่ปฏิบัติตามกฎหรือระเบียบใดๆที่บริษัทกำหนด หรือปฏิบัติผิดเงื่อนไขในข้อกำหนดและเงื่อนไขทั่วไปนี้ และหรือไม่ปฏิบัติตามกฎหมายใดๆ</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />หากการไม่ปฏิบัติหรือฝ่าฝืนหรือปฏิบัติผิดเงื่อนไขใดๆ สามารถแก้ไขได้ แต่สมาชิกไม่ทำการแก้ไขภายในระยะเวลาที่บริษัทได้แจ้งให้ทราบ</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />บริษัทมีสิทธิยกเลิกการให้บริการและยกเลิกสถานภาพการเป็นสมาชิกได้ทันทีโดยไม่ต้องบอกกล่าวก่อน</Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            <Icon
                                name="checkmark-outline"
                                size={16}
                                color="#32d191"
                            />หากมีการเปลี่ยนแปลงกรรมสิทธิ์หรือสิทธิใด ๆ ในเว็บไซต์ learnsbuy ซึ่งทำให้บริษัทไม่สามารถให้บริการแก่สมาชิกได้อีกต่อไป</Text>
                            

                        </View>

                    </View>
                </View>



            </ScrollView>
        </LinearGradient>
    )

}

export default Terms

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    social_btn: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    social_img: {
        width: 25,
        height: 25,
        marginLeft: 15
    },
    imageStyle: {
        width: win.width,
        height: 362 * ratio, //362 is actual height of image
        marginBottom: 20,
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    gradient: {
        height: '100%',
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        paddingHorizontal: 0,
        paddingTop: 5
    },
    ops: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#FFFFFF',
        marginHorizontal: -10,
        paddingBottom:50
    },
    col: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
})