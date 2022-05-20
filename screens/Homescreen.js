import { SafeAreaView,View,StyleSheet, Text, TextInput} from "react-native";

export default function HomeScreen()
{
    return(

        <View style = { styles.container}>
            
        <Text style ={styles.text}>
            Guess My Number
        </Text>

            
        </View>

    );

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        //backgroundColor:"red",
        alignItems:'center',
        //justifyContent:'center'
    },

    text:{
        fontSize:20,
        padding:30,
        borderWidth:2,
        borderColor:"black",
        backgroundColor: "red",
        marginTop:50
        
    }

})