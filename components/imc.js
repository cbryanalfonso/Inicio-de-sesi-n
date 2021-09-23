import React, { Component, useState, PureComponent } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input';

export default class imc extends Component {
    state = {
        estatura: '',
        peso: '',
        imc: '',
        imcResultado: '',
        factorial: '',
    }

    handleestatura = (text) => {
        this.setState({ estatura: text })
    }
    handlepeso = (text) => {
        this.setState({ peso: text })
    }

    calculate = (estatura, peso) => {

        var result = (parseFloat(peso) * 10000) / (parseFloat(estatura) * parseFloat(estatura));
        result = result.toFixed(2);
        this.setState({ imc: result })
        if (result < 18.5) {
            this.setState({ imcResultado: 'Bajo de peso' })
        }
        else if (result >= 18.5 && result < 25) {
            this.setState({ imcResultado: 'Peso normal' })
        }
        else if (result >= 25 && result < 30) {
            this.setState({ imcResultado: 'Sobrepeso' })
        }
        else if (result >= 30) {
            this.setState({ imcResultado: 'Obeso' })
        }
        else {
            alert('Incorrect Input!');
            this.setState({ imcResultado: '' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    fontSize: 20, textAlign: 'justify',
                    marginBottom: 50,
                    marginTop: 80,
                    fontWeight: 'bold',
                    color: 'red'
                }}>
                    Calcular el Indice de masa muscular
                </Text>

                <Text style={{ fontSize: 20, textAlign: 'justify', marginBottom: 20, }}>Ingrese su peso en Kilogramos.</Text>
                <View style={styles.inputBox}>
                    <TextInput placeholder="Ej. 86 "
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        onChangeText={(text) => setName(text)}
                        onChangeText={this.handlepeso}
                    ></TextInput>
                </View>
                <Text style={{ fontSize: 20, textAlign: 'justify', marginBottom: 20, }}>Ingrese su estatura en cm.</Text>
                <View style={styles.inputBox}>
                    <TextInput placeholder="Ej. 180 "
                        style={styles.inputStyle}
                        keyboardType="numeric"
                        onChangeText={(text) => setName(text)}
                        onChangeText={this.handleestatura}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => this.calculate(this.state.estatura, this.state.peso)}
                >
                    <Text style={styles.btnTxt}>Calcular</Text>
                </TouchableOpacity>
                <Text >{this.state.imc}</Text>
                <Text >{this.state.imcResultado}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',

    },
    subcontainer: {
        //height:100,
        width: '100%',
        //padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnTxt: {
        fontSize: 38,
        color: '#7f8c8d',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn: {
        width: "60%",
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#ecf0f1',
    },
    contador: {
        fontSize: 70,
        color: 'black',
        fontWeight: 'bold',
        width: 90,
        height: 90,
        textAlign: 'center',
    },
    inputStyle: {
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
        backgroundColor: '#bdc3c7',
        marginBottom: 8,
    },
})