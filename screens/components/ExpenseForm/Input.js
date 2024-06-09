import { Text, View,TextInput, StyleSheet } from "react-native"
import { GlobalStyles } from "../../constants/Styles";

const Input=({label,textInputConfig,style})=>{

    const inputStyles=[styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.descriptionInput);
    }

    return (
        <View style={[styles.rootContainer,style]}>
            <Text  style={styles.label}>{label}</Text>
            <TextInput  style={inputStyles} {...textInputConfig} />
        </View>
    )
}

export default Input;

const styles= StyleSheet.create({
    rootContainer:{
        marginHorizontal:8,
        marginVertical:5,
    },
    label:{

        fontSize:20,
        color:GlobalStyles.colors.primary700,
        marginBottom:8
    },
    input :{
        backgroundColor:GlobalStyles.colors.primary200,
        fontSize:19,
        color:'white',
        borderRadius:8
    },

    descriptionInput:{
        minHeight:100,
        textAlignVertical:'top'
    }
})