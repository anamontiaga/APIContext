import React from 'react'
import { useViewport } from 'contexts/viewportContext'

import { Header } from 'components/Header'
import { ContainerEl } from './style'

export const Home = () => {
  const { isMobile, isTablet, isLaptop } = useViewport()
  return (
    <ContainerEl>
      <Header />
      {isMobile ?
        <div style={{ background: 'pink', height: '100px', width: '200px' }}>Im a Mobile</div>
        : isTablet ?
          <div style={{ background: 'green', height: '100px', width: '200px' }}>Im a Tablet</div>
          : isLaptop &&
          <div style={{ background: 'yellow', height: '100px', width: '200px' }}>Im a Laptop</div>
      }
    </ContainerEl>
  )
}