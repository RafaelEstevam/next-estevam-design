import styled from 'styled-components';
import { style } from '../../styles/settings';

const InputItem = styled('input')`
  min-height: ${style.constAttr * 16}px;
  border-radius: ${style.constAttr * 2.5}px;
  border: ${style.constAttr}px solid ${style.black};
  background: ${style.white};
  padding: ${style.constAttr * 4}px;
`;

const TextAreaItem = styled('textarea')`
  min-height: ${style.constAttr * 16}px;
  border-radius: ${style.constAttr * 2.5}px;
  border: ${style.constAttr}px solid ${style.black};
  background: ${style.white};
  padding: ${style.constAttr * 4}px;
`

interface InputProps {
  name?: string,
  value?: string | undefined,
  onChange?: React.ChangeEventHandler<HTMLElement>,
  type?: string,
  required?: boolean,
  placeholder?: string,
  rows?: number
}

export const TextAreaForm = (props: InputProps) => {
  return (
    <TextAreaItem {...props} ></TextAreaItem>
  )
}

const InputForm = (props: InputProps) => {

  return (
    <InputItem {...props} />
  )
}

export default InputForm;