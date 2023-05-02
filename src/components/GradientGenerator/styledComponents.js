import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 35px;
  color: white;
`
export const SubHeading = styled.p`
  font-size: 18px;
  color: white;
`

export const ButtonList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
`
export const ColorContainer = styled.div`
  display: flex;
`

export const EachColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`
export const ColorInput = styled.input`
  width: 60px;
  background: none;
  border: none;
  height: 30px;
`

export const ColorLabel = styled.p`
  color: white;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
`
