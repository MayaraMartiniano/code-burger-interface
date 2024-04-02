import React from 'react'

import HomeLogo from '../../assets/home-log.png'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
    </Container>
  )
}

export default Home
