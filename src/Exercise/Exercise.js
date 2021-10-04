import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function Exercise ({navigation}) {
    
        return(
           
            <ScrollView style={styles.container}>
                 <View style={{alignItems: 'center',margin: 10}}>
                  <Icon
                       name='sort-alpha-asc'
                       size={200}
                       color='#214B61'
                      
                    />
                    </View>
              <View>
              <Button
                    icon={
                    <Icon
                       name='pencil-square'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title=' Exercise 1'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#45758F",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20
                }}
                onPress={() =>navigation.navigate('Exercise1')}
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
                title=' Exercise 2'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#45758F",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20,
                 
                }}
                onPress={() =>navigation.navigate('Exercise2')}
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
                title=' Exercise 3'
                titleStyle={{
                    fontSize: 30,
                    marginLeft: 10
                }}
                buttonStyle={{
                    backgroundColor: "#45758F",
                    height: 120,
                }}
                containerStyle={{
                    marginTop: 20,
                   
                }}
                onPress={() =>navigation.navigate('Exercise3')}
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

export default Exercise;