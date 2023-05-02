import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, selected, updateDirection} = props

  const changeDirection = () => {
    updateDirection(eachDirection.value)
  }

  console.log(selected)
  return (
    <ListItem>
      <Button selected={selected} onClick={changeDirection}>
        {eachDirection.displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
