import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    Image
} from 'react-native';

export default class fotos extends Component {
    backToLogin = () => {
     const { navigate } = this.props.navigation; // Obtener el método de navegación goBack
     navigate('Login');
    //goBack();  // Regresar a la interfaz anterior
    }

    render(){
        return(
          
<ScrollView
            
            >
              
              <Image source={require('./imagenes/ftBuena.jpg')}
                    style={{ width: "80%", height: 200, marginStart: 40, marginEnd: 40, marginBottom: 10 }}
               />
                

                
                <Text style={styles.content}>Bryan Alfonso</Text>
                <Text style={
                    {
                        fontSize: 15,
                        marginBottom: 200
                    }
                }> Si desea regresar a la pantalla de inicio, presione el boton</Text>
                <Button  onPress={()=>alert("Adios"), this.backToLogin} title="Cerrar Sesión"></Button>

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


/*

*/