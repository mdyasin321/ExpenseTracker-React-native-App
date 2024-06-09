import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {GlobalStyles} from '../constants/Styles';
import {getFormattedDate} from './getFormattedDate';
import { useNavigation } from '@react-navigation/native';

const ExpenseItem = ({dataItem}) => {
    const navigation= useNavigation();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpenses',{
        expenseId:dataItem.item.id
    })
  };
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.buttonOpacity}>
      <View style={styles.rootConatiner}>
        <View>
          <Text style={styles.descriptionText}>
            {dataItem.item.description}
          </Text>
          <Text style={styles.dateText}>
            {getFormattedDate(dataItem.item.date)}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>
            {dataItem.item.amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  rootConatiner: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 8,
    elevation: 3,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },

  dateText: {
    fontSize: 14,
    color: 'white',
  },

  amountContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  amountText: {
    color: GlobalStyles.colors.primary500,
  },

  buttonOpacity: {
    opacity: 0.45,
  },
});
