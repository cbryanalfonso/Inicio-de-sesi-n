import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    Image
} from 'react-native';

export default class HomeScene extends Component {
    backToLogin = () => {
     const { goBack } = this.props.navigation; // Obtener el método de navegación goBack
    goBack();  // Regresar a la interfaz anterior
    }

    render(){
        return(
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