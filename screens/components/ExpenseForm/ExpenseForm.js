import {Alert, StyleSheet, View} from 'react-native';
import Input from './Input';
import {useState} from 'react';
import CustomButton from '../../UI/CustomButton';

const ExpenseForm = ({buttonLabel, onCancel, onSubmit,defaultValues}) => {
  // const [enteredAmt, setEnteredAmt] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  // const [enteredDesc, setEnteredDesc] = useState('');

  // const addAmountHandler = amt => {
  //   setEnteredAmt(amt);
  // };

  // const addDateHandler = date => {
  //   setEnteredDate(amt);
  // };

  // const addDescHandler = desc => {
  //   setEnteredDesc(amt);
  // };

  //OR
  // (Instead of using so much useState, an multiple handler functions, we can create
  //           one useState which can handle all the three inputs)

  const [inputs, setInputs] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  //generic way of accepting the inputs in one method instead of three methods
  const inputsHandler = (inputIdentifier, enteredValue) => {
    setInputs(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const formSubmitHnadler = () => {
    const expenseDate = {
      amount: +inputs.amount,
      date: new Date(inputs.date),
      description: inputs.description,
    };

    //Input validations
    const amountIsValid= !isNaN(expenseDate.amount) && expenseDate.amount>0
    const dateIsValid=  expenseDate.date.toString() !== 'Invalid Date';
    const descIsValid= expenseDate.description.trim().length>0

    if(!amountIsValid || !dateIsValid || !descIsValid){

      Alert.alert('Invalid Input, Please enter valid input')
      return;
    }

    onSubmit(expenseDate);
  };
  return (
    <View>
      <View style={styles.amtAndDateContainer}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: val => {
              // here val is the parameter which is the user text passing here by javascript
              inputsHandler('amount', val);
            },
            //OR(using bind  function)
            // onChangeText: inputsHandler.bind(this,'amount'),

            value: inputs.amount,
          }}></Input>
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: val => {
              // here val is the parameter which is the user text passing here by javascript
              inputsHandler('date', val);
            },
            //OR(using bind  function)
            //onChangeText: inputsHandler.bind(this,'date'),
            value: inputs.date,
          }}></Input>
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCorrect: true, by default
          //autoCapitalize:none
          onChangeText: val => {
            // here val is the parameter which is the user text passing here by javascript
            inputsHandler('description', val);
          },

          //OR(using bind  function)
          // onChangeText: inputsHandler.bind(this,'description'),

          value: inputs.description,
        }}></Input>
      <View style={styles.cancelAndupdateContainer}>
        <CustomButton onClick={onCancel}>Cancel</CustomButton>
        <CustomButton onClick={formSubmitHnadler}>{buttonLabel}</CustomButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  amtAndDateContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  // the amount and date writing field should take all available space, and passing it via props
  rowInput: {
    flex: 1,
  },
  cancelAndupdateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
