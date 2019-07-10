import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            passoword: ''
        }
    }
    

    async onEntrar(usuario, passoword) {
        if (passoword == '123') {
            await AsyncStorage.multiSet([['user', usuario], ['senha', passoword]])
            this.props.navigation.navigate('InicioScreen')
             
        } else {
            this.setState({ passoword: '' })
            Alert.alert('Senha errada')
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Image source={require('../../assets/logo.png')}></Image>
                </View>

                <View style={styles.body}>
                    <TextInput
                        laceholderTextColor="#ffffff"
                        onChangeText={(text) => this.setState({ usuario: text })}
                        placeholder={'Login'}
                        value={this.state.usuario}
                        style={styles.inputBox} />

                    <TextInput secureTextEntry={true}
                        laceholderTextColor="#fff"
                        onChangeText={(text) => this.setState({ passoword: text })}
                        placeholder={'Senha'}
                        value={this.state.passoword}
                        style={styles.inputBox} />

                    <TouchableOpacity onPress={() => this.onEntrar(this.state.usuario, this.state.passoword)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4c5f68'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1

    },
    body: {
        alignItems: 'center',
        padding: 20,
        flex: 1
    },

    inputBox: {
        width: 300,
        height: 35,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        fontSize: 13,
        color: '#000',
        marginVertical: 10
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#00e76e',
        borderRadius: 50,
        marginVertical: 50,
        paddingVertical: 13,
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
    },
});
