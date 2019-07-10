import { Alert } from 'react-native'

export const setNome = text => ({
    type: 'CHANGENOME',
    payload: text
})
export const setTel = text => ({
    type: 'CHANGETELEFONE',
    payload: text
})
export const setCid = text => ({
    type: 'CHANGECIDADE',
    payload: text
})
export const setImg = text => ({
    type: 'CHANGEIMG',
    payload: text
})

export const save = (list, nome, telefone, cidade, imagem) => {
    return dispatch => {
        let nova = list
        for (var i = 0; i < list.length; i++) {
            if (list[i].telefone == telefone) {
                return Alert.alert(`Ja existe um Usuario com esse Numero: ${telefone}`);
            }
        }
        if (imagem == '') {
            imagem = 'http://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png';
        }
        nova.push({
            'nome': nome,
            'telefone': telefone,
            'cidade': cidade,
            'imagem': imagem
        })
        dispatch({
            type: 'CHANGELIST',
            payload: nova
        }
        )
        Alert.alert(`Contato ${nome} Inserido Com Sucesso`)

    }
}
export const edit = (list, id, nome, telefone, cidade, imagem) => {
    return dispatch => {
        list[id].nome = nome
        list[id].telefone = telefone
        list[id].cidade = cidade
        list[id].imagem = imagem
        Alert.alert(`Contato ${nome} Alterado Com Sucesso`)
    }
}

export const apagar = (list, i) => {
    return dispatch => {
        let nova = list

        nova.splice(i, 1)
        dispatch({
            type: 'CHANGELIST',
            payload: nova
        }
        )
    }
}
