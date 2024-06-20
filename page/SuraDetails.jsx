import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import holyQuran from '../data/fullQuran'




const SuraDetails = (props) => {

    let suraNumber = +props.route.name

  return (
    <View>
      <Text >gg {suraNumber} </Text>
    </View>
  )
}

export default SuraDetails

const styles = StyleSheet.create({})