import styled from 'styled-components';

const InputItem = styled('input')`
  min-height: 64px;
  border-radius: 10px;
  border: 4px solid #333;
  background: #333;
  padding: 16px;
`;

const TextAreaItem = styled('textarea')`
  min-height: 64px;
  border-radius: 10px;
  border: 4px solid #333;
  background: #333;
  padding: 16px;
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