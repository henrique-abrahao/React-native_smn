import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import Login from './Login';
import Inicio from './Inicio'


export default class Mid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teste: null
        }
    }
    async componentWillMount() {
        this.setState({ teste: await AsyncStorage.getItem('user') })
    }

    render() {
        if (!this.state.teste) {
            return < Login 
            navigation = { this.props.navigation}
            />
        }
        else {
            return <Inicio />
        }
    }
}



