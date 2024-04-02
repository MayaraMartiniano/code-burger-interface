import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData') // verificando se o usuario está logado

  if (!user) {
    return <Redirect to="/login" /> // se nao estiver logado vai redirecionar para tela de login
  }

  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]) // documentação proptypes
}
