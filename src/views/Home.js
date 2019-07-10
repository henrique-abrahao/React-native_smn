import React from 'react'
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';



export default class Home extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg' }} />
                <Body>
                  <Text>Henrique Abrahão</Text>
                  <Text note>Prova React-Native</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../../assets/listatel.png')} style={{ height: 220, width: 320, flex: 1 }} />
                <Text>
                  Prova React-Native - Lista Telefonica podendo inserir, atualizar e remover Dados
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}