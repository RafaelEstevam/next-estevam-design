import { createGlobalStyle } from 'styled-components';
import { style } from './settings';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${style.black};
  }
`