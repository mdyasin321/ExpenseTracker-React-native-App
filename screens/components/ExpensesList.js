import {Text, View, FlatList, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/Styles';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({expenses}) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={dataItem => {
          return <ExpenseItem dataItem={dataItem}></ExpenseItem>;
        }}
      />
    </View>
  );
};

export default ExpensesList;
