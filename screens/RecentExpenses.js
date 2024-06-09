import {Text, View} from 'react-native';
import ExpensesOutput from './components/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseTrackerContext } from './store/ExpenseTracker-context';
import { getDateMinusDays } from './utilities/getDateMinusday';

const RecentExpenses = () => {
    const ctx= useContext(ExpenseTrackerContext);
    const recentExpenses= ctx.expenses.filter((element)=>{
        const todayDate= new Date();

        const date7daysAgo=getDateMinusDays(todayDate,7);

        return element.date > date7daysAgo
    })
  return <ExpensesOutput  expenses={recentExpenses} periodName="Last 7 days expenses"></ExpensesOutput>;
};

export default RecentExpenses;
