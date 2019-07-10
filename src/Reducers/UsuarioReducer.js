const initialState = {
    nome: '',
    telefone: '',
    cidade: '',
    imagem: '',

    list: [
        {
            'nome': 'teste4',
            'telefone': '320193432',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste3',
            'telefone': '320195324323',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste2',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste1',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste5',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste6',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'teste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'te432432ste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        },
        {
            'nome': 'te432432ste',
            'telefone': '3205324234193',
            'cidade': 'dsakldmsa',
            'imagem': 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
        }
       

    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGENOME':
            return { ...state, nome: action.payload }
        case 'CHANGETELEFONE':
            return { ...state, telefone: action.payload }
        case 'CHANGECIDADE':
            return { ...state, cidade: action.payload }
        case 'CHANGEIMG':
            return { ...state, imagem: action.payload }
        case 'CLEAR':
            return { ...state, nome: '', telefone: '', cidade: '', imagem: '' }
        case 'CHANGELIST':
            return { ...state, list: action.payload }
        default:
            return state
    }

}