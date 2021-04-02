import React from 'react'
import { BrandEl, ContainerEl } from './style'
import { SwitchThemeButton } from 'components/SwitchThemeButton'

export const Header = () =>
  <ContainerEl>
    <BrandEl>My Library Manager</BrandEl>
    <SwitchThemeButton />
  </ContainerEl>