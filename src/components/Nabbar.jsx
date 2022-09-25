import styled from "styled-components/macro"
import useScroll from "../hooks/useScroll"
import { useEffect, useState } from 'react'
import { IconHanberger } from "../asset/svg"

const ContainerNavbar = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 12%;
  border-bottom: 1px solid #2B6377;
  opacity: ${({hiddenNavbar}) => hiddenNavbar ? 0 : 1};
  display: flex;
  transition: opacity 0.5s ease-out;
  align-items: center;
`

const Nabbar = () => {
  const { scrollY } = useScroll()
  const [hiddenNavbar, setHiddenNavbar] = useState(false)

  const handleWheelUp = (event) => {
    event.deltaY < 0 ? setHiddenNavbar(false) : setHiddenNavbar(true)
  }
  
  useEffect(() => {

    window.addEventListener('wheel',handleWheelUp)

    return () => window.removeEventListener('wheel', handleWheelUp)

  }, [scrollY, hiddenNavbar])

  return (
    <ContainerNavbar hiddenNavbar={hiddenNavbar} >
      <IconHanberger />
    </ContainerNavbar>
  )
}

export default Nabbar