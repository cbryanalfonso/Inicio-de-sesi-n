import React, {Component, useState, PureComponent} from 'react'
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class contador extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          counter: 0,
        };
    
    
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
       /* this.handleReset = this.handleReset.bind(this);
        this.handleDiez = this.handleDiez.bind(this);
        this.handlemenosDiez = this.handlemenosDiez.bind(this);*/
      }

    handleUp(){
        this.setState({counter: this.state.counter + 1});
    }

    handleDown(){
        this.setState({counter: this.state.counter - 2});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <TouchableOpacity onPress={this.handleDown} style={styles.btn}>
                        <Text style ={styles.btnTxt}>
                            -
                        </Text>
                    </TouchableOpacity>
               
                        <Text style ={styles.contador}>
                            {this.state.counter}
                        </Text>
                
                <TouchableOpacity onPress={this.handleUp} style={styles.btn}>
                        <Text style ={styles.btnTxt}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
        
    },
    subcontainer:{
        //height:100,
        width:'100%',
        //padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnTxt:{
        fontSize: 38,
        color: '#7f8c8d',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btn:{
        width: 70,
        height: 70,
        alignItems: 'center',
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
})