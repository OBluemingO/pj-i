import { useEffect, useLayoutEffect, useRef } from "react"
import styled from "styled-components/macro"
import { gsap } from "gsap"
import { Back } from "gsap/src/all"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* position: fixed; */
  z-index: 500;
  position: absolute;
  color: white;
`

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({color}) => color && `${color}`};
  position: absolute;
  top:0;
  left:0;
`

const ModalLoading = ({status}) => {

  const modalRef = useRef() 

  useLayoutEffect(() => {
    if(status) return

    const modal = modalRef.current
    const slide = Array.from(modal.childNodes)
    const tl = gsap.timeline()
      .to(slide[slide.length-1],{yPercent:-100, duration:1,ease:Back.easeOut})
      .to(slide[slide.length-2],{xPercent:100, duration:1,ease:Back.easeOut})
      .to(slide[slide.length-3],{xPercent:-100, duration:1,ease:Back.easeOut})
      .to(slide[0],{yPercent:-100,duration:2, ease:Back.easeOut})
      .to(modal,{display:"none",duration:1},'-=1')

    return () => tl.kill()
  }, [status])
  
  return (
    <Container ref={modalRef}>
      <Slide color="hotpink" />
      <Slide color="blue" />
      <Slide color="gray" />
      <Slide color="red" />
    </Container>
  )
}

export default ModalLoading