import { combineReducers} from 'redux'
import UsuarioReducers from './UsuarioReducer'

const rootReducer = combineReducers({
   usuario: UsuarioReducers,
})

export default rootReducer