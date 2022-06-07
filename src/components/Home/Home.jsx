import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HeroBanner from '../HeroBanner'

const Home = () => {
 return (
    <>
    <Container>
      <Row>
      <h2>This is home page !!</h2>
      <HeroBanner />
      </Row>
    </Container>
    </>
  )
}
export default Home