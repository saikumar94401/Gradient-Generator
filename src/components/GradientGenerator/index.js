import {Component} from 'react'
import {
  AppContainer,
  GradientContainer,
  Heading,
  SubHeading,
  ButtonList,
  ColorContainer,
  EachColorContainer,
  ColorInput,
  ColorLabel,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    color1Input: '#8ae323',
    color2Input: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    direction: gradientDirectionsList[0].value,
  }

  updateDirection = directionId => {
    this.setState({activeDirection: directionId})
  }

  changeColor1 = event => {
    this.setState({color1Input: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2Input: event.target.value})
  }

  changeBackground = () => {
    const {color1Input, color2Input, activeDirection} = this.state
    this.setState({
      color1: color1Input,
      color2: color2Input,
      direction: activeDirection,
    })
  }

  render() {
    const {
      color1,
      color2,
      activeDirection,
      color1Input,
      color2Input,
      direction,
    } = this.state
    return (
      <AppContainer
        color1={color1}
        color2={color2}
        direction={direction}
        data-testId=" gradientGenerator"
      >
        <GradientContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <SubHeading>Choose Direction</SubHeading>
          <ButtonList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                eachDirection={each}
                selected={activeDirection === each.value}
                updateDirection={this.updateDirection}
              />
            ))}
          </ButtonList>

          <SubHeading>Pick the colors</SubHeading>
          <ColorContainer>
            <EachColorContainer>
              <ColorLabel htmlFor="color1">{color1Input}</ColorLabel>
              <ColorInput
                id="color1"
                type="color"
                value={color1Input}
                onChange={this.changeColor1}
              />
            </EachColorContainer>

            <EachColorContainer>
              <ColorLabel htmlFor="color2">{color2Input}</ColorLabel>
              <ColorInput
                id="color2"
                type="color"
                value={color2Input}
                onChange={this.changeColor2}
              />
            </EachColorContainer>
          </ColorContainer>
          <GenerateButton onClick={this.changeBackground}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
