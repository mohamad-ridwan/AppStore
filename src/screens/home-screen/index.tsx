import React from 'react'
import { UseHome } from '../../hooks/UseHome'
import Container from './Container'
import Content from './Content'

export default function HomeScreen() {
  const {
    data,
    renderItem,
    scrollY
  } = UseHome()

  return (
    <Container>
      <Content data={data} renderItem={renderItem} scrollY={scrollY} />
    </Container>
  )
}