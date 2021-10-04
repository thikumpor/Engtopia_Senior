import React from 'react'
import { StyleSheet, View,Text, ScrollView} from 'react-native';
import {ThemeProvider,Button,Input,Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function SignUp ({navigation}) {
        return(
            <ThemeProvider theme={theme}>
                <ScrollView style={styles.container}>
                <View style={{alignItems: 'center',margin: 10}}>
                <Icon
                       name='user-circle'
                       size={150}
                       color='#0B3861'
                      
                    />
                
                </View>
                <Input
                leftIcon={
                    <Icon
                       name='user-o'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Name'}
                />
                <Input
                leftIcon={
                    <Icon
                       name='user-o'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Lastname'}
                />
                <Input
                leftIcon={
                    <Icon
                       name='envelope-o'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Email'}
                />
                <Input
                leftIcon={
                    <Icon
                       name='unlock-alt'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Password'}
                />
                <Input
                leftIcon={
                    <Icon
                       name='mobile'
                       size={20}
                       color='#0085E6'
                    />
                }
                placeholder={'Phone Number'}
                />
                <Button
                    icon={
                    <Icon
                       name='check'
                       size={20}
                       color='#FFF'
                    />
                }
                title='   Sign Up'
                buttonStyle={{
                    backgroundColor: "#0B3861",
                    height: 50,
                    fontSize: 20
                }
                
                }
                onPress={() =>navigation.navigate('Pretest')}
                />

                
                </ScrollView>
            </ThemeProvider>
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

export default SignUp;