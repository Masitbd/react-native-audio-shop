import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { StyleSheet, FlatList, View, Pressable, TextInput } from 'react-native'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'



const PlanetItem = ({item})=>{
    const {name, color} = item
    const navigation = useNavigation()
    return(
        <Pressable
         onPress={()=>{navigation.navigate("Details", {planet: item});
      
    }}
        
        style={styles.item}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.circle,{backgroundColor: item.color}]} /> 
        <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <AntDesign name="right" size={20} color={colors.white} />
     </Pressable>
    )
}

export default function Home({navigation}) {

    const [list, setList] = useState(PLANET_LIST)

    const handleSearch = (text)=>{
        
        
        const filteredList = PLANET_LIST.filter((item) => {
            const formatedInput = text.toLowerCase()
            const formatedItemName = item.name.toLowerCase()

            return formatedItemName.indexOf(formatedInput) > -1

        })
        setList(filteredList)
        }
  const renderItem= ({item})=> {
     return(
        <PlanetItem item= {item} />
        )
       }
  return (
   <SafeAreaView style={styles.container}>
    <PlanetHeader />
    <TextInput style={{color: 'whiter', padding: 10, marginLeft:10, marginRighthe:10, borderWidth:1, borderColor: 'gray', marginTop: 10}}
    placeholderTextColor={colors.white}
    placeholder='Type the planet name'
    autoCorrect= {false}
    onChangeText={(text)=>handleSearch(text)}
    />
    <FlatList 
    contentContainerStyle={styles.list}
    //data={PLANET_LIST}
    data={list}
    //keyExtractor= {(item, index) => item.name}
    keyExtractor= {(item) => item.name}
    renderItem={renderItem}
    ItemSeparatorComponent={()=><View style={styles.separator}/>}
     />
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        paddingLeft: 20,
        justifyContent: 'space-between'
        
    },
    list: {
        padding: spacing[4]
    },
    circle:{
        width: 20, height: 20, borderRadius: 10, marginRight:10
    },
    itemName: {
        textTransform: 'capitalize'
    },
    separator:{
      borderBottomColor: colors.white,
      borderWidth:0.2,
      marginTop:10
    }
})
    
    

