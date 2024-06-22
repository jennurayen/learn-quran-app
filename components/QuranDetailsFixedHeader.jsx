import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackSVG from '../assets/svg/BackSVG'
import MenuDotSvg from '../assets/svg/MenuDotSvg'
import QuranListModal from './QuranListModal'
const QuranDetailsFixedHeader = ({suraName, navigation}) => {

    const [isModalShow, setIsModalShow] = useState(false)
    function openMenuModal() {
        setIsModalShow(!isModalShow)
    }


  return (
    <View style={styles.headerArea}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <BackSVG fill='white'/> 
            <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{suraName}</Text>
        <TouchableOpacity style={styles.backBtn} onPress={openMenuModal}>
            <MenuDotSvg fill='white'/> 
        </TouchableOpacity>


         {/* Modal */}
    <QuranListModal isModalShow={isModalShow} openMenuModal={openMenuModal} />

  </View>
  )
}

export default QuranDetailsFixedHeader

const styles = StyleSheet.create({
    headerArea: {
        flexDirection: 'row',
        justifyContent:'space-between',        
        backgroundColor: 'tomato',
        height: 50,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',  
    },
    backBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18, 
    },

      headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
})