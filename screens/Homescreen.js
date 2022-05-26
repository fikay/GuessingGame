import { useState } from 'react'
import { View,TouchableOpacity,StyleSheet, Text, TextInput, ImageBackground, Keyboard, Alert} from "react-native";


export default function HomeScreen(props)
{
    const [number, setNumber] = useState('');

    const shouldSetResponse = () => true;
    const onRelease = () => (
    Keyboard.dismiss()
    );
    function inputText(enteredText)
    {
        
     setNumber(enteredText)   
    }

    function checkNumber()
    {
       const chosenNumber = parseInt(number)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=100)
        {
            Alert.alert(
                "Invalid Number",
                "Number must be within 1 to 99",
                [{text: 'Okay', style:'destructive', onPress: resetNumber}]

            )

        }
        else
        {
            props.onNumberPicked(chosenNumber)

        }
    }
    function resetNumber()
    {
        setNumber("")
        
    }
    return(

        <View style = { styles.container} onResponderRelease ={onRelease} onStartShouldSetResponder={shouldSetResponse}>
        <ImageBackground source ={require('../screens/Images/Akatsuki.jpeg')} style = {styles.image} resizeMode="cover">
        <View style ={{marginBottom:20}}>
        <Text style ={styles.text}>
            Guess My Number
        </Text>

        </View> 
        <View style = {styles.secondView}>

            <Text style ={styles.textView}> Enter a Number</Text>
            <TextInput
            style = {styles.input}
            keyboardType="numeric"
            onChangeText={inputText}
            value = {number}
            maxLength={2}

            />
            <View style ={styles.buttonView}>
            <TouchableOpacity style ={styles.buttons} onPress= {resetNumber}>
            <Text style = {{textAlign:'center'}}>Reset</Text></TouchableOpacity>
            <TouchableOpacity style ={styles.buttons} onPress= {checkNumber}><Text style = {{textAlign:'center'}}>Confirm</Text></TouchableOpacity>

            </View>

            
        </View>   
        

            </ImageBackground>
        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        //backgroundColor:"red",
        //alignItems:'center',
        //justifyContent:'center'
    },
    image:{
        flex:1,
        alignItems:'center'

    },

    text:{
        fontSize:20,
        padding:30,
        borderWidth:2,
        borderColor:"white",
        color:'black',
       // fontFamily:'open-sans-bold',
        marginTop:100,
        marginBottom:20,
        
        
    },

    secondView:
    {
        
        backgroundColor:'#8b0000',
        width:'90%',
        height: 220,
        borderRadius:10,
        alignItems:'center',
        elevation:4,
        shadowColor:'yellow',
        shadowOffset:{width:2,height:2},
        shadowRadius:10,
        shadowOpacity:0.25 
         
        //justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderColor:"#8b0000",
        borderBottomColor:"#f8f8ff",
        fontSize:31,
        marginVertical:8,
        fontWeight:"bold",
        height:50,
        width:50,
        textAlign:'center'
        
        //.lineHeight:10
    },
    textView:{

        fontSize:20,
         fontWeight:'bold',
          color:'#daa520',
          marginTop:10,
           marginBottom:20
    },
    buttonView:{
        flexDirection:'row',
          marginTop:40, 
          height:50, 
          width:'90%',
          justifyContent:'space-evenly',
          alignItems:'center',
          marginBottom:20,
          //backgroundColor:'red'
    },
    buttons:{
        backgroundColor:"#dc143c",
        padding:12,
        width:'45%',
        //marginLeft:20,
        borderRadius:10,
        marginRight:0
        


    },
    buttonPressed:{
         backgroundColor:"#00ffff",
        padding:12,
        width:'45%',
        //marginLeft:20,
        borderRadius:10,
        marginRight:0

    }

})