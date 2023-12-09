import { Linking, Pressable, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Text from '../components/text/text'

import PlanetHeader from '../components/planet-header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, VenusSvg } from '../svg'
import { spacing } from '../theme/spacing'

const PlanetSection= ({title, value}) =>{
  return (
    <View style = {styles.planets}>
    <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
    <Text preset='h4'>{value}</Text>
    </View>
  )
}
export default function Details({navigation,route}) {
  const planet = route.params.planet
 // console.log('my planet',planet)
  const myNavigation = useNavigation();

  const openWebLink = () => {
    const url = `${planet.wikiLink}`; // Replace with your desired URL
    Linking.openURL(url)
      .then((supported) => {
        if (!supported) {
          console.error("Can't handle url: " + url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  const renderImage = (name) =>{
    switch (name) {
      case 'mercury':
        return <MercurySvg />
      case 'venus':
        return <VenusSvg />
      case 'earth':
        return <EarthSvg />  
      case 'mars':
        return <MarsSvg /> 
      case 'jupiter':
        return <JupiterSvg /> 
      case 'saturn':
        return <SaturnSvg /> 
      case 'uranus':
        return <SaturnSvg /> 
      case 'neptune':
        return <NeptuneSvg/> 
    }
  }
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
       <PlanetHeader />
        <View style={styles.item}>
        <Pressable onPress={()=>{myNavigation.goBack()}}>
        <AntDesign style={{marginRight:5, marginLeft: 5}} name="left" size={20} color={colors.white} />
        </Pressable>
        <Text >Details</Text>
        </View>
        <View style={styles.imageView}>
          {renderImage(planet.name)}
        </View>
        <View style={styles.namePosition}>
          <Text preset='h1' style={styles.name}>{planet.name}</Text>
        </View>
         <View style={styles.namePosition}>
          <Text preset='small' style={styles.descriptionText}>{planet.description}</Text>
        </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View style={styles.source}>
     <Text style={{marginRight: 10}}>Source</Text>
      <TouchableOpacity onPress={openWebLink} style={{  }}>
        <Text style={styles.wikipedia}>Wikipedea</Text>
      </TouchableOpacity>
     </View>
    </View>
    <PlanetSection title='rotation' value={planet.rotationTime} />
    <PlanetSection title='revolution' value={planet.revolutionTime} />
    <PlanetSection title='radius' value={planet.radius} />
    <PlanetSection title='rotatavg' value={planet.avgTemp} />
       </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
      },
      item:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      imageView:{
        marginTop: spacing[4],
        alignItems: 'center',
        justifyContent: 'center',
      },
      name:{
        textTransform: 'uppercase',
      },
      namePosition:{
        alignItems: 'center',
        justifyContent:'center',
        marginTop:20
      },
      descriptionText:{
        alignItems: 'center',
        justifyContent:'center',
        paddingLeft:15,
        paddingRight:15,
        lineHeight: 15
      },
      source:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        marginTop:10
      },
      wikipedia:{
        textDecorationLine: 'underline',
        fontWeight: 'bold'
      },
      planets:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5],
        paddingVertical: [4],
        borderWidth: 1,
        borderColor: colors.lightGreen,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
        marginTop: spacing[2]

      }
  });
  