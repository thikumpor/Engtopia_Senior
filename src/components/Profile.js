import React, { Component } from 'react'
import { StyleSheet, View,ScrollView, ActivityIndicator,Text} from 'react-native';
import { ListItem,Badge } from 'react-native-elements/dist/list/ListItem';


class Profile extends Component {
    constructor() {
        super();
    }

    render(){
        return(
          <ScrollView>
              <View>
                  <Text>Welcome</Text>
              </View>
          </ScrollView>
        )
    }
    
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

export default Profile;