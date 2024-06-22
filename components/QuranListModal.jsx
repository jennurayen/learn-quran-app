import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QuranListModal = ({isModalShow, openMenuModal}) => {
   
  return (
    <Modal transparent={true} visible={isModalShow} animationType='fade' >
      <View style={styles.modalView}>
      <View style={styles.modalBox}>
        <View>
          <Text style={styles.Text}>Modal</Text>
        </View>

        <TouchableOpacity onPress={openMenuModal} ><Text style={styles.modalCancelBtn}>Cancel</Text></TouchableOpacity>
      </View>
      </View>
    </Modal>
  )
}

export default QuranListModal

const styles = StyleSheet.create({
    modalView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalBox: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: 'gray',
      },
      modalCancelBtn: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: 'white',
      }
})