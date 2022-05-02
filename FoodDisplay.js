import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
export default function FoodDisplay({image, name,totalAmount,mass, setTotalAmount,price }) {
    let a= price;
    const [items, setItems] = useState(0);
    function Addition() {
        setItems(items + 1)
        a=a+price;
        setTotalAmount(totalAmount + price);
    }
    function Reduction() {
        setItems(items - 1)
        a = a - price;
        setTotalAmount(totalAmount - price);
    }
    return (
        <View style={styles.foodDisplay}>
        <Image style={styles.image} source={image} />
            <View style={styles.details}>
            <Text style={{ color:'#FFB300',fontWeight:'bold',fontSize:20,fontStyle:'italic'}}>{name}</Text>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20,paddingLeft:100,marginTop:10}}>M{price}</Text>
            <View style={styles.addPress}>
            <AntDesign name="up" size={24} color="#fff"  onPress={Addition} />
            </View>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 10, paddingLeft: 85,marginTop:1,marginBottom:2, }}>{mass}g({items}pcs)</Text>
            <View style={styles.minusPress}>
            <AntDesign name="down" size={24} color="#fff" onPress={Reduction} />
            </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foodDisplay: {
        margin: 15,
        padding: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        backgroundColor:'#212121',
        
    },
    image:{
    height:120,
    width:120,
    borderRadius:50,
    marginTop:10,
    marginBottom:10,
    },
    details:{
    paddingLeft:'15%',
    },
    addPress:{
    paddingLeft:100,
    marginTop:10,
    },
    minusPress:{
    paddingLeft:100,
    },
    
})