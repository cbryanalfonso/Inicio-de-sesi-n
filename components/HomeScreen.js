import { Link } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component {
    backToLogin = () => {
        const { goBack } = this.props.navigation; // Obtener el método de navegación goBack
        goBack();  // Regresar a la interfaz anterior
    }
    facebook =()=>{
        <Link to={"https://www.it-swarm-es.com/es/reactjs/enlace-de-boton-otra-pagina/832175862/"}></Link>
    }

    render() {
        return (

            <ScrollView

            >
                <Text style ={{textAlign:'center', fontSize:35, marginTop:20,color:'red', fontWeight: 'bold' }}>Bryan Alfonso Cruz Juan</Text>
                <Image source={require('./imagenes/ftBuena.jpg')}
                    style={{ width: "80%", height: 200, marginStart: 40, marginEnd: 40, marginBottom: 10,marginTop:40 }}
                ></Image>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, fontStyle: "italic" }}>Bryan Alfonso Cruz Juan</Text>
                <Text style={{ padding: 20, textAlign: 'justify', fontSize: 14 }}>Mi nombre es Bryan Alfonso Cruz Juan, me gusta el desarrollo, aunque sea un poco estresante
                    creo es una de las mejores cosas que existen en este mundo.
                </Text>
                <Text style={{ padding: 20, textAlign: 'justify', fontSize: 18 }}>Mis redes sociales
                </Text>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        backgroundColor: '#7f8c8d',
                        marginTop: 20,
                    }}
                    onPress={this.facebook}
                >
                    <Text style={{color: '#fff',
                    fontSize: 20,}}>Facebook
                    </Text>
                    <Link></Link>
                </TouchableOpacity>


                <Text style={styles.content}> Acceso exitoso amigo mio!!!</Text>
                <Text style={
                    {
                        fontSize: 15,
                    }
                }> Si desea regresar a la pantalla de inicio, vaya a fotos</Text>
                
                

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
<Button onPress={this.backToLogin} title="Haga click"></Button>
*/