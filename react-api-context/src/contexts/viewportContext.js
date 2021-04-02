import React from 'react'
import PropTypes from 'prop-types';

const viewportContext = React.createContext({})
const MOBILE_BREAKPOINT = 481
const TABLET_BREAKPOINT = 769
const LAPTOP_BREAKPOINT = 1025

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState()
  const [height, setHeight] = React.useState()

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  React.useLayoutEffect(() => {
    handleWindowResize()
  }, [])

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext)

  const isMobile = width < MOBILE_BREAKPOINT
  const isTablet = width < TABLET_BREAKPOINT
  const isLaptop = width < LAPTOP_BREAKPOINT
  const isLargeDesktop = width > LAPTOP_BREAKPOINT

  return { width, height, isMobile, isTablet, isLaptop, isLargeDesktop }
}

ViewportProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};


export { ViewportProvider, useViewport }
