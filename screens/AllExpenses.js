import { Text, View } from "react-native"
import ExpensesOutput from "./components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseTrackerContext } from "./store/ExpenseTracker-context";

const AllExpenses=()=>{

    const ctx= useContext(ExpenseTrackerContext);
    return (
        <ExpensesOutput expenses={ctx.expenses} periodName='Total'></ExpensesOutput>
    )
}

export default AllExpenses;