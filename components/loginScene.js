import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button,
    Image
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default class LoginScene extends Component {
    login = () =>{
        if(this.user == 'admin' && this.pass == "1234"){
           // alert("usuario admitido");
        
        const { navigate } = this.props.navigation;
        navigate("homeScene")

        }else{
            alert("Usuario no autorizado")
        }
    }
    
    user = "";
    pass = "";

    onUsernameChanged=(newUsername)=>{
        console.log(newUsername);
        this.user= newUsername;
    }

    onPasswordChanged=(newPassword)=>{
        console.log(newPassword);
        this.pass=newPassword;
    }
     
    register= () =>{

        const { navigate } = this.props.navigation;
        navigate('registerScene');
    }
   

 render(){
        return(
            <TouchableOpacity
            style = {styles.container}
            activeOpacity={1.0}
            >
                <View style={styles.imagenBox}>
                    <Image source={require('./imagenes/d.jpg')}></Image>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                    ref="user"
                    onChangeText={this.onUsernameChanged}
                    style={styles.input}
                    placeholder={"Nombre de usuario"}
                    autoCapitalize="none"
                    underlineColorAndroid = {'transparent'}
                    placeholderTextColor ={"white"}
                    textAlign="center"
                    ></TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                    ref="pass"
                    onChangeText={this.onPasswordChanged}
                    style={styles.input}
                    placeholder={"Contraseña"}
                    autoCapitalize="none"
                    underlineColorAndroid = {'transparent'}
                    placeholderTextColor ={"white"}
                    textAlign="center"
                    secureTextEntry={true}
                    ></TextInput>
                </View>

                <TouchableOpacity
                style={styles.button}
                onPress={this.login}
                >
                    <Text style={styles.btText}> Iniciar sesión</Text>

                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                
                onPress={this.register}
                >
                    <Text 
                    style={styles.btText}
                    >Registrarse</Text>

                </TouchableOpacity>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    imagenBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 350,
        borderRadius: 8,
        backgroundColor: '#ecf0f1',
        marginBottom: 15,
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#bdc3c7',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#7f8c8d',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});