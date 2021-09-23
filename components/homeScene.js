import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    Image
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon';

import HomeScreen from './HomeScreen'
import fotos from './fotos'
import contador from './contador';
import imc from './imc';


const Tab = createBottomTabNavigator();

const screenOptions = (route, color)=>{
    let iconName
    switch (route.name) {
        case "Home":
            iconName= "home"
            break;
        case "fotos":
            iconName = "image"
            break;
        case "contador":
            iconName = "numeric"
            break;
        case "imc":
            iconName = "human-male-boy"
            break;
    }
    return(
        <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
        ></Icon>
    );
}
export default class HomeScene extends Component {

    
    backToLogin = () => {
     const { goBack } = this.props.navigation; // Obtener el método de navegación goBack
    goBack();  // Regresar a la interfaz anterior
    }

    render(){
        return(
            <Tab.Navigator
                initialRouteName ="Home"
                screenOptions={
                    ({route})=>({
                        tabBarIcon: ({color})=> screenOptions(route,color)
                    })
                   /* {
                        route
                       // tabBarInactiveTintColor:"#442484"
                        
                    }*/
                }
            >
                <Tab.Screen
                    name ="Home"
                    component={HomeScreen}
                    options={
                        {
                           headerShown:false,
                        }
                    } 
                >
                    

                </Tab.Screen>
                <Tab.Screen
                    name ="fotos"
                    component={fotos}
                    options={
                        {
                            headerShown: false,
                        }
                    }  
                >
                   </Tab.Screen>
                   <Tab.Screen
                    name = "contador"
                    component={contador}
                    options={{headerShown:false}}
                   >
                       
                   </Tab.Screen>
                   <Tab.Screen
                    name = "imc"
                    component={imc}
                    options={{headerShown:false}}
                   >
                       
                   </Tab.Screen>
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    content: {
        fontSize: 40,
    },
});


/*
<ScrollView
            
            >
              
                <Image source={require('./imagenes/d.jpg')}></Image>
                <Image source={require('./imagenes/d.jpg')}></Image>
                <Image source={require('./imagenes/d.jpg')}></Image>
                <Image source={require('./imagenes/d.jpg')}></Image>
                <Image source={require('./imagenes/d.jpg')}></Image>

                
                <Text style={styles.content}> Acceso exitoso amigo mio!!!</Text>
                <Text style={
                    {
                        fontSize: 15,
                    }
                }> Si desea regresar a la pantalla de inicio, presione el boton</Text>
                <Button onPress={this.backToLogin} title="Haga click"></Button>

            </ScrollView>

*/