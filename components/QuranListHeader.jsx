import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MenuDotSvg from '../assets/svg/MenuDotSvg';
import QuranListModal from './QuranListModal';

const QuranListHeader = () => {
   
    const [isModalShow, setIsModalShow] = useState(false)
    function openMenuModal() {
        setIsModalShow(!isModalShow)
    }


  return (
    <View style={styles.header}>
    <Text style={styles.headerText}>Al-Quran Bengali</Text>
    <TouchableOpacity onPress={openMenuModal} style={styles.menuIcon}><MenuDotSvg/></TouchableOpacity>
   
    {/* Modal */}
    <QuranListModal isModalShow={isModalShow} openMenuModal={openMenuModal} />

  </View>
  )
}

export default QuranListHeader

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        backgroundColor: 'tomato',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 20,
      },
      headerText: {
        color: 'white',
        fontSize: 20,    
        marginLeft: 10,
      },
      menuIcon: {
      },
      
     
})