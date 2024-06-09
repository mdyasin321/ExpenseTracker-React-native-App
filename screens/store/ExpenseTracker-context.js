import React, {act, createContext, useReducer} from 'react';
import {DummyData} from '../data/DummyData';

export const ExpenseTrackerContext = createContext({
  expenses: [],
  addHandler: ({description, amount, date}) => {},
  deleteHandler: id => {},
  update: (id, {description, amount, date}) => {},
});

const ExpenseReducer = (prevState, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      const newExpenseArray = [{...action.payload, id: id}, ...prevState];
      return newExpenseArray;

    case 'UPATE':
      const existingItemIndex = prevState.findIndex(element => {
        return element.id === action.payload.id;
      });

      const existingExpenses = [...prevState];

      const existedItem = prevState[existingItemIndex];
      const updatedItem = {...existedItem, ...action.payload.data};
      existingExpenses[existingItemIndex] = updatedItem;

      return existingExpenses;

    case 'DELETE':
      const updatedItems = prevState.filter(expense => {
        return expense.id !== action.payload;
      });

      return updatedItems;
    default:
      return prevState;
  }
};

const ExpenseTrackerProvider = ({children}) => {
  const [expensesState, dispatchAction] = useReducer(ExpenseReducer, DummyData);

  const addExpenseHandler = expense => {
    dispatchAction({type: 'ADD', payload: expense});
  };

  const deleteExpenseHandler = id => {
    dispatchAction({type: 'DELETE', payload: id});
  };

  const updateExpenseHandler = (id,expense) => {
    dispatchAction({type: 'UPATE', payload: {id: id, data: expense}});
  };

  const values = {
    expenses: expensesState,
    addHandler: addExpenseHandler,
    update: updateExpenseHandler,
    deleteHandler: deleteExpenseHandler,
  };

  return (
    <ExpenseTrackerContext.Provider value={values}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerProvider;
