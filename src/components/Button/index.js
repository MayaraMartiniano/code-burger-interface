import PropTypes from 'prop-types'
import React from 'react'

import { ContanierButton } from './styles'

function Button({ children, ...rest }) {
  // pegando o texto do button

  return <ContanierButton {...rest}> {children}</ContanierButton>
}

export default Button

Button.propTypes = {
  // avisando que o children é uma string
  children: PropTypes.string
}
