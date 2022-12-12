import styled from 'styled-components';
import { style } from '../../styles/settings';

interface TitleInterface {
  title?: string,
  fontSize?: string,
  width?: string,
  display?: string,
  justifyContent?: string
}

const Title = styled('h2') <TitleInterface>`
  color: ${style.white};
  width: ${props => props.width || 'inherit'};
  font-size: ${props => props.fontSize || '3.5rem'};
  display: ${props => props.display || 'inherit'};
  justify-content: ${props => props.justifyContent || 'inherit'};
`

const TitleComponent = ({ title, display, fontSize, justifyContent, width }: TitleInterface) => {
  return (
    <Title {...{ display, fontSize, justifyContent, width }}>{title}</Title>
  )
}

export default TitleComponent;