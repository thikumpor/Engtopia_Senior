import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function Learning ({navigation}) {
    
        return(
           
            <ScrollView style={styles.container}>
                 <View style={{alignItems: 'center',margin: 10}}>
                  <Icon
                       name='leanpub'
                       size={200}
                       color='#214B61'
                      
                    />
                    </View>
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
                title='   Grammar'
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
                onPress={() =>navigation.navigate('Home')}
                />
                 <Button
                    icon={
                    <Icon
                       name='book'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title=' Vocabulary'
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
                onPress={() =>navigation.navigate('Home')}
                />
                 <Button
                    icon={
                    <Icon
                       name='book'
                       size={70}
                       color='#FFF'
                       marginLeft= {10}
                    />
                }
                title='    Reading'
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
                onPress={() =>navigation.navigate('Home')}
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

export default Learning;