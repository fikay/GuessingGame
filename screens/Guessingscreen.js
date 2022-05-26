import { useState,useEffect } from 'react'
import { View,TouchableOpacity,StyleSheet, Text, FlatList, ImageBackground,SafeAreaView, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Guesses from './Components/Guesses';
import {Ionicons} from '@expo/vector-icons';



let min =1;
let max =100;
let number =0;
function generateRandomNumber(min, max, exclude)
    {
        const rndNum =  (Math.floor(Math.random()*(max - min)) + min) 
        if(rndNum === exclude)
        {
            return generateRandomNumber();
        }
        else
        return rndNum
    }

export default function GuessingScreen(props)
{
    
    
    const firstGuess = generateRandomNumber(min,max,props.numberPicked );
    const [counter, setCounter] = useState(firstGuess);
    const [round, setRound] = useState([0]);
    const [ guesses, setnumberGuesses] = useState([]);
    
    

    function multipleCall(bound)
    {
        
        if(counter<props.numberPicked && bound =="lower")
        {
            Alert.alert(
            "You know you lying 🐑",
            "Please be honest"
            )
        }
        else if(counter>props.numberPicked && bound =="higher")
        {
            Alert.alert(
                "You know you lying 🐑",
                "Please be honest"
            )
        }
        else
        {
            number = number+1;
            setRound(prevRounds=>[number, ...prevRounds]);
            console.log(getRoundLength)
             addGuess();
        

        if(bound == "lower")
        {
            //console.log(firstGuess)
            max = counter
           // console.log(max)

        }
        else{
           min = counter +1
        }
        
       const newGuess = generateRandomNumber(min,max, counter );
       setCounter(newGuess)
       console.log(min,max,props.numberPicked,counter)
        
         
        
        
       // increaseCount();

        }
       


       
    }
    function winChecker()
    {
        if (counter == props.numberPicked)
        {   
            min =1;
            max=100;
            props.gameOver()
            props.numberRounds(getRoundLength)
        }
        else
        null;
    }
    const getRoundLength = guesses.length;

    function addGuess()
    {   
        //setnumberGuesses(guess)
        setnumberGuesses(currentguess=>[
             {text:counter.toString(), id:Math.random().toString()},
            ...currentguess
           
        ])
    }
    useEffect(()=>{
        winChecker();
    });
   
    
    return(
        <LinearGradient style ={{flex:1, justifyContent:'center'}} colors={['#8b0000', '#ff69b4']}>
        <ImageBackground 
        source ={require('../screens/Images/guess.jpg')} 
        resizeMode = "cover" 
        style={Styles.image}
        imageStyle = {Styles.imagebackground}
        >
        <SafeAreaView style ={Styles.arrange}>
        <Text style = {Styles.opponent}>Opponents Guess</Text>
        <View style = {{ marginTop:80, width:"80%", height:70,alignItems:'flex-end'}}>
        <Text numberOfLines={2} style = {Styles.opponentguess}>{counter}</Text>
        </View>

        </SafeAreaView>
        
        <View style ={Styles.arrange2}>
        <View style = {{  marginTop:10, alignSelf:'stretch'}}>
        <Text style = {{fontSize:20, color:"#f5f5f5", fontWeight:'bold', padding:20, borderRadius:30, textAlign:'center', marginTop:2}}>
            Is Guess Too High Or Low?
        </Text>
        </View>
        <View style ={{flexDirection:"row",  alignSelf:"stretch", marginTop:10}}>
            <TouchableOpacity style={Styles.buttons} onPress={()=>multipleCall("lower")}><Text style = {Styles.buttonText}><Ionicons name ="md-remove" size ={24} color ="white"/></Text></TouchableOpacity>
            <TouchableOpacity style={Styles.buttons} onPress={()=>multipleCall("higher")}><Text style = {Styles.buttonText}><Ionicons name ="md-add" size ={24} color ="white"/></Text></TouchableOpacity>
        </View>
        <View style = {{ alignSelf:"stretch", flex:1, justifyContent:"center"}}>
        <View style ={{margin:10, padding:20}}>
        <FlatList
        data={guesses}
        ListEmptyComponent = {()=><Text style={{textAlign:'center', color: "white", fontWeight:"bold"}}> No Guesses For Now </Text>}
        renderItem = {(itemData) =>{
            return(
               <Guesses item = {itemData.item.text} round ={getRoundLength - itemData.index}/>
               
            );
        }
        }
        keyExtractor = {(itemData,index)=>{
            return itemData.id
        }}

        />
        </View>
        </View>
        </View>

        </ImageBackground>
        </LinearGradient>
        

    );
}

const Styles = StyleSheet.create({
    image:{
        flex:1,
        
    },
    imagebackground:{
        opacity:0.5
    },
   
    arrange2:{
        //justifyContent:"flex-start",
        alignItems:'center',
        ///backgroundColor:'red',
        flex:2
    },
    arrange:{
        justifyContent:'flex-start',
        alignItems:'center',
        //backgroundColor:'blue',
        flex:1.1
    },
     opponent:{
        fontSize:20,
        fontWeight:"bold",
        borderWidth:1,
        padding:15,
        color:'#f5f5f5',
        borderColor:'#d8bfd8',
        marginTop:30
    },
    opponentguess:{
        fontSize:40,
        fontWeight:"bold",
        borderWidth:1,
        padding:10,
        color:'#f5f5f5',
        marginTop:5,
        height:"100%",
        width:'100%',
        textAlign:'center',
        borderColor:'#d8bfd8',
        alignSelf:"center"
        

    },
    
    buttons:{
        width:'45%',
        margin:10,
        activeOpacity: 0.5
        
        
    },
    buttonText:{
        textAlign:"center",
        padding:25,
        borderWidth:1,
        borderRadius:10,
        color:'#f5f5f5',
        backgroundColor:'#fa8072',
        overflow:'hidden',
        borderColor:'#fa8072',
        fontSize:15,
        fontWeight:"bold"
        
    }



})