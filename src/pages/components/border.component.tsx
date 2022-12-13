import styled from 'styled-components';
import { style } from '../../styles/settings';

const BorderDivider = styled('div')`
  height: 100%;
  width: ${style.constAttr}px;
  background: ${style.grayBackground};
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