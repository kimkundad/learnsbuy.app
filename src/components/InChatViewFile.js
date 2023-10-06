import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import Pdf from 'react-native-pdf';

function InChatViewFile({props, visible, onClose}) {
  const {currentMessage} = props;
  console.log('currentMessage.file.url-->',currentMessage.file.url)
  const source = {uri: currentMessage.file.url, cache: true};
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      style={{height: 600}}
    >
      <View style={{padding: 20}}>
        <Pdf
        trustAllCerts={false} 
        source={source} onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }} style={{height: '100%', width: '100%'}} />
        <TouchableOpacity onPress={onClose} style={styles.buttonCancel}>
          <Text style={styles.textBtn}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default InChatViewFile;

const styles = StyleSheet.create({
  buttonCancel: {
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor: 'black',
    left: 13,
    top: 20,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
}
});