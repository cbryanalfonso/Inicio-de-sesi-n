import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert
} from 'react-native';

export default class RegisterScene extends Component {

    username = "";
    password = "";
    cPassword = "";

    onUsernameChanged= (newUsername)=>{
        this.username = newUsername;
        console.log(newUsername)
    }

    onPasswordChanged =(newPassword)=>{
        this.password = newPassword;
    }
    onConfirmPasswordChanged = (newConfirmPassword)=>{
        this.cPassword = newConfirmPassword;
    }

    register= () =>{
        if(this.username != "" && this.password!=""){
            if(this.username !="admin"){
                if(this.password == this.cPassword){
                    const { goBack } = this.props.navigation;
                    alert([{text: 'determinar', onPress: () => { goBack(); }}]);
                }else{
                    alert("Las contraseñas no coinciden porfavor intentelo nuevamente ");
                }

            }else{
                alert("Ya existe un usuario registrado con ese nombre, porfavor intentelo nuevamente...")
            }

        }else{
            alert("No se puede registrar el usuario, ya que estos campos no deben estar vacios")
        }
    }

    

   
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}  
                style={styles.container}>
                
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="username"
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        autoCapitalize='none' 
                        underlineColorAndroid={'transparent'} 
                        placeholderTextColor={'#ccc'} 
                        placeholder={'nombre de usuario'} 
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="password"
                        onChangeText={this.onPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}  
                        autoCapitalize='none'  
                        underlineColorAndroid={'transparent'}  
                        placeholderTextColor={'#ccc'}  
                        placeholder={'contraseña'} 
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        ref="cPassword"
                        onChangeText={this.onConfirmPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}  
                        autoCapitalize='none' 
                        underlineColorAndroid={'transparent'}  
                        placeholderTextColor={'#ccc'}  
                        placeholder={'Confirmar contraseña'}  
                    />
                </View>
                <TouchableOpacity
                onPress={this.register}
                    style={styles.button}>
                
                    <Text
                        style={styles.btText}> Registrarse </Text>
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
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});