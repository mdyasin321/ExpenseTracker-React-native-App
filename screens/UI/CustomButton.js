import { Pressable, StyleSheet, Text, View } from "react-native"
import { GlobalStyles } from "../constants/Styles"


const CustomButton=({onClick,children})=>{
    return (
        <Pressable onPress={onClick} style={({pressed})=>pressed && styles.buttonOpacity}>
            <View style={[styles.rootContainer]}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default CustomButton

const styles=StyleSheet.create({
    rootContainer:{

        paddingHorizontal:14,
        paddingVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        marginHorizontal:10,
        marginVertical:2,
        borderRadius:7

    },

    text:{
        fontSize:12,
        fontWeight:'bold',
        color:'white',
        textAlign:'center'

    },
    buttonOpacity:{
        opacity:0.8,
    }

})