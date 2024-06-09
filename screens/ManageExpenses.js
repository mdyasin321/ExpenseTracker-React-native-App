import {useContext, useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from './UI/CustomButton';
import {GlobalStyles} from './constants/Styles';
import {ExpenseTrackerContext} from './store/ExpenseTracker-context';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

const ManageExpenses = ({route, navigation}) => {
  const ctx = useContext(ExpenseTrackerContext);
  // If I am receiving expenseId, that I means I am calling MangeExpenseScreem for editing and
  // viceversa for add
  const editingExpenseId = route.params?.expenseId;

  //converting any dataType to boolean by appending "!!" at the front of that value
  const isEditing = !!editingExpenseId;

  const defaultValues = ctx.expenses.find(element => {
    return element.id == editingExpenseId;
  });

  //
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing === true ? 'Edit Expense' : 'Add Expenses',
    });
  }, [navigation, isEditing]);

  const deleteHandler = () => {
    ctx.deleteHandler(editingExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = expenseDate => {
    if (isEditing) {
      ctx.update(editingExpenseId, expenseDate);
    } else {
      ctx.addHandler(expenseDate);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm
        defaultValues={defaultValues}
        buttonLabel={isEditing ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}></ExpenseForm>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <CustomButton onClick={deleteHandler}>Delete</CustomButton>
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
  },
  deleteContainer: {
    padding: 8,
    marginHorizontal: 45,

    borderTopWidth: 3,
    borderColor: GlobalStyles.colors.primary500,
  },
  cancelAndupdateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
