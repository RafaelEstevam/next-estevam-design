
import styled from "styled-components";

const ButtonWrapper = styled('button')`
  width: 100%;
  background: #fff;
  padding: 16px;
  border-radius: 10px;
  border: 0px;
  color: #121212;
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