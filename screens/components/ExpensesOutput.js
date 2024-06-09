import { Text, View , StyleSheet} from "react-native"
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DummyData } from "../data/DummyData";
import { GlobalStyles } from "../constants/Styles";


const ExpensesOutput=({expenses,periodName})=>{
    return (

        <View style={styles.rootConatiner}>
        <ExpensesSummary expenses={expenses}  periodName={periodName}></ExpensesSummary>
        <ExpensesList expenses={expenses} ></ExpensesList>
        </View> 

    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    rootConatiner: {
      flex:1,
      //I have added the paddingBottom:50, so that the last item of flatlist is fully visible,
      // because it is getting hidden by bottom tab, when we are not giving paddingBottom:50
      paddingBottom:50,
      backgroundColor:GlobalStyles.colors.primary700,
    }
  });