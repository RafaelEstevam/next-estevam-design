
import styled from "styled-components";
import { style } from '../../styles/settings';

const ButtonWrapper = styled('button')`
  width: 100%;
  background: ${style.white};
  padding: ${style.constAttr * 4}px;
  border-radius: ${style.constAttr * 2.5}px;
  border: 0px;
  color: ${style.black};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.1s linear all;
  :hover{
    opacity: 1;
  }
`

const ButtonComponent = (props: any) => {
  return (
    <ButtonWrapper {...props}>
      {props.label}
    </ButtonWrapper>
  )
};

export default ButtonComponent;