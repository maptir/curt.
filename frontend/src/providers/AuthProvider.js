import { connect } from 'react-redux'
import * as authActions from '../redux/modules/auth'

const AuthProvider = props => {
  return props.children({
    isLoggedIn: !!props.token,
    login: props.login,
    logout: props.logout,
    isModalOpen: props.isModalOpen,
    openModal: props.openModal,
    closeModal: props.closeModal,
  })
}

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = { ...authActions }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthProvider)
