import styled from "styled-components/macro"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  /* position: fixed; */
  z-index: -1;
  position: absolute;
  color: white;
`

const ModalLoading = () => {
  return (
    <Container>ModalLoading</Container>
  )
}

export default ModalLoading