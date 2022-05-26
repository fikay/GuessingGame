import { useState,useEffect } from 'react'
import { StyleSheet,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
export default function Guesses(props)
{
    
    
    
    
    
   // const guessCount = props.count.map((n)=>n+1);
    return(
    <LinearGradient style ={styles.container} colors={['#8b0000', '#ff69b4']}>
    
    
    <Text style ={styles.number}>#{props.round}</Text>
    <Text style ={styles.guess}> Opponent's Guess: {props.item}</Text>
    
    </LinearGradient>
    );
     
}

const styles = StyleSheet.create({
    container:{
        margin:9, 
        borderRadius:10,
         flexDirection:"row",
         justifyContent:"space-between"

    },  
   number:{
        textAlign:"center",
        marginRight:10,
        padding:15
    },
    guess:{
        textAlign:"center",
        margin:15
    }

});