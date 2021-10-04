import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main'
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'
import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Learning from './src/Learning/Learning'
import Exercise from './src/Exercise/Exercise'
import Test from './src/Test/Test'
import Score from './src/Score/Score'
import AppTest from './src/Test/Apptest'
import Exercise1 from './src/Exercise/Exercise1'
import Pretest from './src/Pretest/Pretest'
import Exercise2 from './src/Exercise/Exercise2'
import Exercise3 from './src/Exercise/Exercise3'
import ParentsLg from './src/components/ParentsLg'
import TeacherLg from './src/components/TeacherLg'
import MainLogin from './src/components/MainLogin';


const Stack = createNativeStackNavigator();


export default function App() {
    return ( 
        <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen  name="Main"  component={Main}/>
          <Stack.Screen  name="Login"  component={Login}/>
          <Stack.Screen  name="SignUp"  component={SignUp}/>
          <Stack.Screen  name="Home"  component={Home}/>
          <Stack.Screen  name="Profile"  component={Profile}/>
          <Stack.Screen  name="Learning"  component={Learning}/>
          <Stack.Screen  name="Exercise"  component={Exercise}/>
          <Stack.Screen  name="Test"  component={Test}/>
          <Stack.Screen  name="Score"  component={Score}/>
          <Stack.Screen  name="AppTest"  component={AppTest}/>
          <Stack.Screen  name="Exercise1"  component={Exercise1}/>
          <Stack.Screen  name="Exercise2"  component={Exercise2}/>
          <Stack.Screen  name="Exercise3"  component={Exercise3}/>
          <Stack.Screen  name="Pretest"  component={Pretest}/>
          <Stack.Screen  name="MainLogin"  component={MainLogin}/>
          <Stack.Screen  name="ParentsLg"  component={ParentsLg}/>
          <Stack.Screen  name="TeacherLg"  component={TeacherLg}/>
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
    
    );
}