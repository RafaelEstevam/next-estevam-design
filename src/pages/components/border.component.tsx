import styled from 'styled-components';

const BorderDivider = styled('div')`
  height: 100%;
  width: 4px;
  background: #333333;
  position: absolute;
  z-index: 1;
  left: calc(50% - 2px);
}
`

const Border = () => {
  return (
    <BorderDivider />
  )
}

export default Border;