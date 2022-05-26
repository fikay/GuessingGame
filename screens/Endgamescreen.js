import { useState,useEffect } from 'react'
import { View,TouchableOpacity,StyleSheet, Text, FlatList, Image,SafeAreaView, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function EndgameScreen(props)
{
    return(
        <LinearGradient style ={Styles.container} colors={['#8b0000', '#ff69b4']}>
        <SafeAreaView style={{flex:1, alignItems:"center"}}>
        <View style ={Styles.gameover}>
        <Text style ={Styles.gameOverText}>Game Over</Text>
        </View>
        <View style={Styles.imageContainer}>
        <Image  source={require('../screens/Images/win.jpg')} resizeMode ="contain"/>
        </View>
        <View style={Styles.textStyle}>
        <Text style={Styles.Text}>Your phone neeeded <Text style={Styles.values}>{props.round}
        </Text> Rounds to guess the number<Text style={Styles.values}> {props.numberPicked}</Text> </Text>
        <TouchableOpacity style ={Styles.button} onPress= {props.newgame}>
        <Text style={[Styles.Text ,{padding :20}]}>
            Start New Game
        </Text>

        </TouchableOpacity>
        </View>
        
        
        </SafeAreaView>
        </LinearGradient>

    )
}

const Styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center"
    },
    gameover:{
        
        alignItems:"center",
        margin:25,
        flex:0.5
        

    },
    gameOverText:{
        padding:30,
        //borderWidth:1,
        borderColor:"#8b0000",
        fontSize:30,
        color:"#ff69b4"
    },
    imageContainer:
    {
        //flex:2, 
        height:300,
        width:300,
        alignItems:"center", 
        backgroundColor:"red",
        borderRadius:150,
        borderWidth:3,
        overflow:"hidden"


    },
    textStyle:{
        marginTop:10,
        flex:0.8,
        alignItems:"center"
    },
    Text:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginHorizontal:10
    },
    values:{
        color:"yellow",
        
    },
    button:{
        backgroundColor:'#ff69b4',
        marginTop:70,
        borderRadius:10
    }
    
        
    
})