import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/Styles';

const ExpensesSummary = ({expenses, periodName}) => {
  //calculating total sum
  const expensesTotalSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.rootConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.periodText}>{periodName}</Text>
        <Text style={styles.amountText}>${expensesTotalSum.toFixed()}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  rootConatiner: {
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    width: '95%',
    height: 40,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
    backgroundColor: GlobalStyles.colors.primary50,
    elevation: 3,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
  periodText: {
    color: GlobalStyles.colors.primary400,
  },
});
