/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpenses from './screens/ManageExpenses';
import {GlobalStyles} from './screens/constants/Styles';
import CustomButton from './screens/UI/CustomButton';
import ExpenseTrackerProvider from './screens/store/ExpenseTracker-context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

const BottonTabs = createBottomTabNavigator();

const BootomTabsOverview = () => {
  return (
    <BottonTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => {
          return (
            <CustomButton
              onClick={() => {
                navigation.navigate('ManageExpenses');
              }}>
              Add
            </CustomButton>
          );
        },
      })}>
      <BottonTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: ' Recent',
        }}></BottonTabs.Screen>
      <BottonTabs.Screen
        name="AlExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: ' AllExpenses',
        }}></BottonTabs.Screen>
    </BottonTabs.Navigator>
  );
};

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={BootomTabsOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            options={{
              //it is used to add animation that how this Manageexpense should open
              presentation: 'modal',
            }}
            name="ManageExpenses"
            component={ManageExpenses}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseTrackerProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
