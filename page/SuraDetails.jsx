import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import fullQuran from '../data/fullQuran'
// import fullQuran from '../data/fullQuranC'
import QuranDetailsHeader from '../components/QuranDetailsHeader'
import QuranDetailsCard from '../components/QuranDetailsCard'
import QuranDetailsFixedHeader from '../components/QuranDetailsFixedHeader'

const SuraDetails = ({route, navigation}) => {
  let {noOfSura} = route.params

  const [suraNum, setSuraNum] = useState(0)
  const [fullSura, setFullSura] = useState({})

  useEffect(()=>{
    setSuraNum(noOfSura-1)
  },[])

  useEffect(()=>{
    setFullSura(fullQuran[suraNum])
  },[suraNum])

  function nextSuraBtn() {
    setSuraNum(suraNum + 1)
  }
  function prevSuraBtn() {
    setSuraNum(suraNum - 1)
  }

return (
    <SafeAreaView style={styles.container}>
     
    <QuranDetailsFixedHeader navigation={navigation} suraName={fullSura.translation}/>

      <View style={styles.listContainer}>
      <FlatList
        data={fullSura.verses}
        ListHeaderComponent={()=><QuranDetailsHeader prevBtn={prevSuraBtn} nextBtn={nextSuraBtn} suraHeading={fullSura}/>}
        renderItem={QuranDetailsCard}
      /> 
      </View>
    </SafeAreaView>
  )
}

export default SuraDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  listContainer: {
    flex: 1,
  },
})