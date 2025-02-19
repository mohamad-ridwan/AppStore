import React from 'react'
import { useHome } from '../../hooks/useHome'
import Container from './Container'
import Content from './Content'

export default function HomeScreen() {
  const {
    data,
    renderItem,
    scrollY
  } = useHome()

  return (
    <Container>
      <Content data={data} renderItem={renderItem} scrollY={scrollY} />
    </Container>
  )
}