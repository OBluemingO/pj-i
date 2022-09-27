import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styled, { keyframes } from 'styled-components/macro'
import Nabbar from './components/Nabbar'
import { Post } from 'asset/images'
import { IconStar } from 'asset/svg'
import ModalLoading from 'components/modal/ModalLoading'

const Container = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  max-width: 1440px;
  margin: auto;
  box-sizing: border-box;
`

const WrapSection = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
`

const TextTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 800;
  font-size: 4rem;

`

const TextBody = styled.h4`
  margin: 0;
  padding: 0;
  text-transform: lowercase;
  text-align: end;
  margin-right: 50px;
  margin-top: 10%;
`

const WrapperImage = styled.div`
  height: 27.8%;
  width: 26.05%;
  overflow: hidden;
  border-radius: 169px;
  max-height: 410px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const WrapContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const WrapText = styled.div`
  width: 400px;
  height: 400px;
`

const BoxLine = styled.div`
  width: 260px;
  height: 40px;
  position: absolute;
  left: 7%;
  top: 30px;
  background-color: white;
  z-index: -1;
  transform: rotateY(30deg) rotateX(-30deg);
`

const TextStonk = styled.span`
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: white;
`

function App() {
  const [height, setHeight] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const textStokeRef = useRef()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(prev => window.innerHeight)
    })

    const _count_down_loading = setTimeout(() => {
      setIsLoading(false)
    }, 1500);


    return () => clearTimeout(_count_down_loading)
  }, [])

  return (
    <>
      <ModalLoading status={isLoading}   />
      {
        !isLoading  &&
        <Container >
          <Nabbar />
          <WrapSection>
            <WrapContent>
              <WrapText>
                <BoxLine />
                <TextTitle><TextStonk ref={textStokeRef}>Phayu</TextStonk>phat <br />Trilao</TextTitle>
                <TextBody>junior front end developer <br />
                  Contrary to popular belief, Lorem Ipsum is not simpsssssssss
                  Contrary to popular belief, Lorem Ipsum is not simpsssssssss
                  Contrary to popular belief, Lorem Ipsum is not simpsssssssss
                  Contrary to popular belief, Lorem Ipsum is not simpsssssssss
                  </TextBody>
              </WrapText>
              <WrapperImage><Image alt='image introdul' loading='lazy' src={Post} /></WrapperImage>
            </WrapContent>
          </WrapSection>
        </Container>
      }
    </>
  );
}

export default App;
