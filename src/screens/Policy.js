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

const Policy = ({ navigation }) => {

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
                    นโยบายความเป็นส่วนตัว
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

                            <Text style={{ fontSize: 12, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            1. ข้อตกลงนี้มีขึ้นเพื่อใช้ในการกำกับดูแลการเข้าใช้เว็บไซต์ www.learnsbuy.com ตามราย ละเอียดข้อกำหนดและเงื่อนไขที่กำหนดไว้ในเว็บไซต์นี้ และโดยการที่ผู้ใช้บริการเข้าในเว็บไซต์นี้ ผู้ใช้บริการตกลงและยินยอมที่จะปฏิบัติตามข้อตกลงและข้อจำกัด ความรับผิดในการใช้เว็บไซต์ นี้ทุกประการ
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            2. บริษัท สงวนสิทธิที่จะแก้ไขเปลี่ยนแปลงหรือหยุดให้บริการเนื้อหาส่วนใดส่วนหนึ่งหรือทั้งหมดเมื่อใดก็ได้ รวมทั้งสงวนสิทธิจะแก้ไข เปลี่ยนแปลง เพิ่มเติม ข้อกำหนดและเงื่อนไขส่วนหนึ่งส่วนใดหรือทั้งหมดได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้าและให้ถือว่าการแก้ไข เปลี่ยนแปลง เพิ่มเติมนั้นมีผลบังคับใช้ทันที และการที่ผู้ใช้บริการเข้าใช้เว็บไซต์นี้ภายหลังจากการแก้ไข เปลี่ยนแปลง เพิ่มเติมดังกล่าวถือว่าผู้ใช้บริการได้ตกลงยินยอมตามข้อกำหนดและเงื่อนไขใหม่นั้นแล้ว
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            3. ผู้ใช้บริการเป็นผู้รับผิดชอบ จัดหา และบำรุงรักษาสายโทรศัพท์ อุปกรณ์เครื่องคอมพิวเตอร์ และ/หรืออุปกรณ์อื่นๆ ที่จำเป็นรวมทั้งค่าใช้จ่ายต่างๆ ที่เกี่ยวข้อง เพื่อการเข้าใช้เว็บไซต์นี้
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            4. ผู้ใช้บริการจะต้องใช้เว็บไซต์นี้อย่างถูกต้องตามกฎหมาย ห้ามผู้ใช้บริการปิดประกาศ (post) ใดๆ และ/หรือรับส่งข้อมูลผ่านเว็บไซต์นี้ในลักษณะที่ผิดกฎหมาย ผิดศีลธรรมอันดี ละเมิดสิทธิของบุคคลอื่น ข่มขู่ หรือลามกอนาจาร รวมทั้งห้ามปิดประกาศ (post) อัพโหลด (upload) หรือทำให้มีขึ้นซึ่งสิ่งที่ถูกคุ้มครองด้วยกฎหมายทรัพย์สินทางปัญญาบนเว็บไซต์ learnsbuy.com โดยไม่ได้รับความยินยอมจากเจ้าของงานทรัพย์สินทางปัญญานั้นๆ ก่อน ภาระหน้าที่ในการตัดสินใจว่าสิ่งใด เป็นสิ่งที่ถูกคุ้มครองภายใต้กฎหมายทรัพย์สินทางปัญญาอยู่ที่ผู้ใช้บริการ โดยผู้ใช้บริการจะต้องรับผิดชอบแต่เพียงผู้เดียวในความเสียหายใดๆ ที่เกิดขึ้นจากการละเมิดลิขสิทธิ์ทรัพย์สินทางปัญญา หรือความเสียหายอื่นๆ ที่เกิดขึ้น
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            5. ผู้ใช้บริการอนุญาตให้บริษัท หรือผู้ใดก็ตามที่บริษัท เห็นสมควรทำการลบ แก้ไข ทำซ้ำ เผยแพร่และแจกจ่ายสิ่งใดๆ ที่ผู้ใช้บริการได้ทำให้มีขึ้นบนเว็บไซต์
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            6. ห้ามผู้ใช้บริการประกาศ โฆษณา ประชาสัมพันธ์ สินค้าหรือบริการใดๆ บนเว็บไซต์นี้ รวมทั้งการโฆษณา ชวนเชื่อ ให้ผู้ใช้บริการเว็บไซต์นี้สมัครเป็นสมาชิก ของเว็บไซต์อื่นๆ เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรอย่างชัดแจ้งจากบริษัทก่อน
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            7. เว็บไซต์ learnsbuy.com มีสิ่งที่ถูกคุ้มครองด้วยกฎหมายทรัพย์สินทางปัญญา เช่น ข้อความ (text) ซอฟท์แวร์ รูปภาพ วิดีโอ กราฟฟิค (graphic) เพลงและเสียงห้ามมิให้ผู้ใช้บริการแก้ไข ดัดแปลง ส่ง ทำซ้ำ เผยแพร่ หรือมีส่วนร่วมในการกระทำดังกล่าวในทุกกรณี เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรอย่างชัดแจ้งและถูกต้องจากบริษัท หรือเจ้าของงานทรัพย์สินทางปัญญานั้นๆ ก่อนแล้วแต่กรณี และผู้ใช้บริการสามารถดาว์นโหลด (download) และใช้สิ่งที่ถูกคุ้มครองด้วย ทรัพย์สินทางปัญญาเพื่อใช้ประโยชน์ของตนเองเท่านั้น
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            8. ผู้ใช้บริการตกลง ยินยอม และเข้าใจโดยชัดแจ้งแล้วว่าผู้ใช้บริการเข้าใช้บริการเว็บไซต์ โดยความเสี่ยงของผู้ใช้บริการเองทั้งสิ้น บริษัท หรือพนักงานของบริษัท หรือตัวแทนของบริษัท ไม่รับประกันว่าเว็บไซต์ จะปราศจากข้อผิดพลาดหรือข้อขัดข้อง รวมทั้งไม่รับประกันถึงความถูกต้องและความน่าเชื่อถือของข้อมูลหรือ บริการใด ๆ บนเว็บไซต์
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            9. บริการของเว็บไซต์ นี้เป็นการให้บริการตามสภาพและตามสถานะที่เป็นอยู่โดยไม่มีการรับประกันใดๆ ทั้งสิ้นไม่ว่าทางตรงหรือทางอ้อม ข้อจำกัดความรับผิดนี้ใช้กับความเสียหายใดๆ ที่เกิดขึ้นจากการให้บริการ ข้อผิดพลาด การละเว้น การขัดข้อง ข้อบกพร่อง การล่าช้าในการให้บริการ ส่งข้อมูล และคอมพิวเตอร์ไวรัส รวมทั้งการเข้าถึงโดยไม่มีอำนาจเพื่อเข้าใช้หรือเปลี่ยนแปลงข้อมูล ผู้ใช้บริการรับทราบว่าบริษัท ไม่ต้องรับผิดชอบในกรณีหมิ่นประมาทหรือการกระทำอันเป็นการผิดกฎหมาย ของผู้ใช้บริการรายอื่น หรือของบุคคลอื่น และความเสี่ยงในการรับผิดในความเสียหายที่อาจเกิดใดๆ ทั้งหมดตกอยู่กับผู้ใช้บริการเท่านั้น
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            10. บริษัท หรือผู้ใด หรือหน่วยงานใดที่เกี่ยวข้องในการสร้าง การดำเนินการ การบำรุงรักษา การเผยแพร่เว็บไซต์ รวมทั้งผู้ร่วมให้บริการด้านข้อมูล (content partners) จะไม่ต้องรับผิดสำหรับความเสียหายไม่ว่ากรณีใดๆ ที่เกิดขึ้นจากการใช้หรือการไม่สามารถใช้บริการเว็บไซต์ ส่วนหนึ่งส่วนใดหรือทั้งหมด
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            11. บริษัทขอสงวนในการตรวจสอบและควบคุมเนื้อหาของข้อมูลบนเว็บไซต์ ซึ่งรวมถึงในห้องสนทนา(chat room) และกลุ่มสนทนา (forums) ต่างๆ เพื่อให้ การเข้าใช้บริการเป็นไปตามข้อตกลงนี้ และเป็นไปตามกฎหมายหรือคำสั่งของหน่วยงานรัฐที่มีอำนาจ บริษัท มีสิทธิเด็ดขาดในการตัดสินใจที่จะดำเนินการแก้ไข ปฏิเสธ ไม่ให้ประกาศข้อความ หรือลบข้อความใดๆ
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            12. ทั้งบริษัท และผู้ใช้บริการสามารถบอกเลิกสัญญานี้ได้ตลอดเวลา โดยบริษัท สามารถบอกเลิกสัญญาได้ทันทีหากบริษัท เห็นว่าผู้ใช้บริการมีการกระทำที่ ไม่เหมาะสมและไม่สามารถยอมรับได้หรือหากผู้ใช้บริการฝ่าฝืนหรือไม่ปฏิบัติตามข้อตกลงนี้ข้อหนึ่งข้อใด
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            13. บริษัท เป็นผู้เผยแพร่ข้อมูล (content) ที่ได้รับจากบุคคลที่สามและจากผู้ใช้บริการเว็บไซต์โดย บริษัท ไม่มีอำนาจควบคุมเหนือข้อมูลดังกล่าว เหมือนเช่น ห้องสมุดสาธารณะหรือร้านขายหนังสือ ทั้งนี้ ความเห็น คำแนะนำ ข้อความ คำกล่าว บริการ ข้อเสนอ หรือข้อมูลข่าวสารอื่นใดที่ได้แสดงหรือจัดให้มีบนเว็บไซต์ นี้โดย บุคคลที่สามรวมทั้งผู้ให้บริการข้อมูลอื่นหรือผู้ใช้บริการเป็นของผู้เขียนและผู้แจกจ่ายรายนั้นๆ ไม่ใช่ของบริษัท และบริษัท ไม่รับประกัน และ/หรือรับรองในความถูกต้อง แม่นยำ ความครบถ้วน และความมีประโยชน์ของข้อมูล โดยผู้ใช้บริการมีหน้าที่ในการตรวจสอบข้อมูลนั้นเอง
                            </Text>
                            <Text style={{ fontSize: 12, marginTop: 10, fontFamily: "IBMPlexSansThai-Regular", color: "#666666"}}>
                            14.หากมีข้อสงสัยหรือข้อสอบถามใดๆ โปรดติดต่อ ครูพี่โฮม
                            </Text>

                        </View>

                    </View>
                </View>



            </ScrollView>
        </LinearGradient>
    )

}

export default Policy

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