import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: white;

  cursor: pointer;
  border: none;

  padding: 5px;
  width: 70px;
  opacity: ${props => (props.selected ? 1 : 0.5)};
  color: #014f7b;
  font-weight: bold;
  border-radius: 5px;
`
