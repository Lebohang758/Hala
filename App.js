import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,ImageBackground,Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useState } from 'react'
import FoodDisplay from './FoodDisplay';

export default function App() {
    const [totalAmount, setTotalAmount]= useState(0);
    return ( 
        <>
        <View style = { styles.container } >
        <StatusBar style='auto'/>
        
        <View style = { styles.title } >
        <ImageBackground style={styles.pic} source={require("./assets/food.jpg")}>
        <Text style={styles.text1}>Welcome</Text> 
        <Text style={styles.text2}>Wings Cafe</Text>
        <TouchableOpacity style={styles.icon}>
        <Feather name="align-center" size={35} color="#fff" />
        </TouchableOpacity>
        </ImageBackground>
        </View > 
        <View style={styles.header}>
        <Text style={{fontSize:20,color:'#fff',paddingLeft:'5%',marginTop:5,fontStyle:'italic'}}>Special food for you!</Text>
        <View style={styles.searchBox}>
        <View style={{paddingLeft:'2%'}}>
        <Feather name="search" size={20}  color="#fff" />
        </View>
        <Text style={{ color:'#EFEBE9',position:'absolute',paddingLeft:'10%',}}>Search here</Text>
        </View>
        <View style={{marginTop:15}}>
        <Text style={{ color: '#fff', position: 'absolute', paddingLeft: '5%', fontSize: 20,fontWeight:'bold',fontStyle:'italic'}}>Single</Text>
        <Text style={{ color: '#fff', position: 'absolute', paddingLeft: '34%', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Special food</Text>
        <Text style={{ color: '#FFC107', position: 'absolute', paddingLeft: '78%', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Combo</Text>
        </View>
        </View>
        <View style={styles.combos}>
        <ScrollView>
        <FoodDisplay name="Turkey Sandwich" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={250} price={50} image={require("./assets/download1.jpg")} />
        <FoodDisplay name="Hot Wings" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={2500} price={120} image={require("./assets/download2.jpg")} />
        <FoodDisplay name="Simba Snack" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={125} price={15} image={require("./assets/download3.jpg")}/>
        <FoodDisplay name="Royal Milk Tea" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={150} price={20} image={require("./assets/images4.jpg")}/>
        <FoodDisplay name="Coca-Cola" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={2000} price={24} image={require("./assets/download5.jpg")}/>
        <FoodDisplay name="Kota" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={356} price={10} image={require("./assets/kota.jpg")} />
        <FoodDisplay name="Banana Dessert" totalAmount={totalAmount} setTotalAmount={setTotalAmount} mass={2000} price={65} image={require("./assets/Banana.jpg")} />
        </ScrollView>
        </View>
        <View style={{ backgroundColor:'#FFB300',width:'100%'}}>
        <View style={styles.total}>
        <Text style={{color:'#fff',fontSize:20,marginTop:10,paddingLeft:'5%',marginTop:10}}> Total Amount:                          M{totalAmount}</Text>
        <View style={styles.bar}>
        <TouchableOpacity>
        <View style={{ marginTop:5,paddingLeft:'3%' }}><Ionicons name="home" size={24} color="black" />
        </View>
        </TouchableOpacity>
        <Image style={styles.logoPic} source={require('./assets/logo.jpg')}/>
        
        </View>
        </View>
        </View>
        
        </View>  
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: 100,
        backgroundColor: '#212121',
        marginTop: 20,

        
    },
    text1:{
        fontSize:30,
        fontStyle:'normal',
        color:'#FFB300',
        flexDirection:'row',
        marginTop:20,
        paddingLeft:'5%',
        fontWeight: 'bold',
    },
    text2:{
        fontSize: 20,
        fontStyle: 'italic',
        color: '#fff',
        flexDirection: 'row',
        paddingLeft: '5%',
        fontWeight:'bold',

    },
    icon:{
    position:'absolute',
    paddingLeft:'88%',
    marginTop:'10%',
     },
     header:{
     backgroundColor:'#212121',
     width:'100%',
     height:100,
     },
     searchBox:{
     backgroundColor:'#FFB300',
     borderRadius:10,
     width:'90%',
     marginLeft:19,
     marginTop:5,
     borderEndColor:'white',
     shadowColor:'white',
     },
     combos:{
     backgroundColor:'#FFB300',
     width:'100%',
     height:350,
     },
     
     total:{
     backgroundColor:'#212121',
     width:'100%',
     height:120,
     borderRadius: 20,
     marginTop:5,
     },
     pic:{
     width:'100%',
     height:100,
     },
     bar:{
    height:40,
    width:'100%',
    backgroundColor:'#FFB300',
    marginTop:32,
    borderRadius:20,

     },
     logoPic:{
     height:30,
     width:30,
     borderRadius:50,
     marginTop:4,
     marginLeft:320,
     position:'absolute',
     },

});