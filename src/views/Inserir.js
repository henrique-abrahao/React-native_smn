import React from 'react'
import { TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Form, Item, Icon, Text, Button } from 'native-base';

import { setCid, setImg, setNome, setTel, save, edit } from '../Actions/UsuarioActions.js'

class Insert extends React.Component {

  static navigationOptions = {
    title: 'Inserir'
  };


  render() {
    const { list, nome, cidade, telefone, imagem } = this.props;
    const teste = this.props.navigation.getParam('id', 'null')
    return (
      <Container>
        <Form>

          <Item>
            <TextInput onChangeText={(text) => this.props.setNome(text)}
              value={nome}
              placeholder='Nome' />
          </Item>


          <Item>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}

              onChangeText={(text) => this.props.setTel(text)}
              keyboardType={"number-pad"}
              value={telefone}
              placeholder='Telefone' />
          </Item>


          <Item>
            <TextInput onChangeText={(text) => this.props.setCid(text)}
              value={cidade}
              placeholder='Cidade' />
          </Item>

          <Item>
            <TextInput onChangeText={(text) => this.props.setImg(text)}
              value={imagem}
              placeholder='Digite um Link para alterar imagem' />
          </Item>

        </Form>

        <Button iconLeft onPress={() =>
          teste == 'null' ? this.props.save(list, nome, telefone, cidade, imagem)
            : this.props.edit(list, teste, nome, telefone, cidade, imagem)}>
          <Icon name='add' />
          <Text>{teste == 'null' ? 'Salvar' : 'Editar'}</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.usuario.nome,
  telefone: state.usuario.telefone,
  cidade: state.usuario.cidade,
  imagem: state.usuario.imagem,
  list: state.usuario.list
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ save, edit, setNome, setCid, setImg, setTel }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Insert)