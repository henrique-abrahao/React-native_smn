import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import { apagar, setCid, setImg, setNome, setTel } from '../Actions/UsuarioActions.js'




class ListaTel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listagem: this.props.list
        }
    }

    static navigationOptions = {
        title: 'Contatos'
    };

    confirmDelete(lista, i) {
        this.props.apagar(lista, i)
        this.setState({ listagem: this.props.list })
    }

    onChange(listagem, i, nome, telefone, cidade, imagem) {
        this.props.setNome(nome)
        this.props.setTel(telefone)
        this.props.setCid(cidade)
        this.props.setImg(imagem)  
        this.props.navigation.navigate('InserirCont', {id: i})
    }

    onDelete(lista, i) {

        Alert.alert(
            `Deletar Usuario`,
            'Deseja exclui-lo?',
            [
                { text: 'CANCELAR', style: 'cancel' },
                { text: 'CONFIRMAR', onPress: () => this.confirmDelete(lista, i) },
            ]
        );
    }



    render() {
        const { listagem } = this.state
        return (

            <Container>
                <Content>
                    <List>
                        {listagem.map((item, i) => {
                            return (
                                <ListItem thumbnail key={i}>
                                    <Left>
                                        <Thumbnail square source={{ uri: item.imagem }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.nome}</Text>
                                        <Text note numberOfLines={1}>{item.telefone}</Text>
                                        <Text note numberOfLines={1}>{item.cidade}</Text>

                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => this.onChange(listagem, i, item.nome,
                                                                                            item.telefone, item.cidade, item.imagem)}>
                                            <Icon name='edit' size={30} color='#DFD615' />
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent onPress={() => this.onDelete(listagem, i)}>
                                            <Icon name='trash' size={30} color='red' />
                                        </Button>
                                    </Right>
                                </ListItem>

                            )
                        })}
                    </List>
                </Content>

            </Container>
        );
    }
}
const mapStateToProps = state => ({
    list: state.usuario.list
})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ apagar, setNome, setCid, setImg, setTel }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ListaTel)

