import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function Home ({navigation}) {
    
        return(
           
            <ScrollView style={styles.container}>
              <View>
              <Button
                    icon={
                    <Icon
                       name='book'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title='  Learning'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20
                }}
                onPress={() =>navigation.navigate('Learning')}
                />
                 <Button
                    icon={
                    <Icon
                       name='pencil-square'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title='  Exercise'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20,
                 
                }}
                onPress={() =>navigation.navigate('Exercise')}
                />
                 <Button
                    icon={
                    <Icon
                       name='hourglass-1'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title='     Test'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20,
                   
                }}
                onPress={() =>navigation.navigate('Test')}
                />
                 <Button
                    icon={
                    <Icon
                       name='bar-chart'
                       size={70}
                       color='#FFF'
                     
                    />
                }
                title='   Score'
                titleStyle={{
                    fontSize: 30
                }}
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20,
                   
                }}
                onPress={() =>navigation.navigate('Score')}
                />
                <Button
                    icon={
                    <Icon
                       name='power-off'
                       size={30}
                       color='#FFF'
                     
                    />
                }
                title='   Logout'
                titleStyle={{
                    fontSize: 20
                }}
                buttonStyle={{
                    backgroundColor: "#22D6F1",
                    height: 50,
                }}
                containerStyle={{
                    marginTop: 20,
                   
                }}
                onPress={() =>navigation.navigate('Main')}
                />
                
                </View>
          </ScrollView>
          
        )
    }
    


const theme ={
    Button:{
        raised: true
    }
}

const styles=StyleSheet.create({

    container:
    {
        flex:1,
        padding:35,
        backgroundColor: '#EFF8FB'
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center'
    }
});

export default Home;