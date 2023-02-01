import { useContext } from "react";
import styled from "styled-components";
import { style } from '../../styles/settings';
import { PageContext } from "../templates/landingPage.template";

const LinkWrapper = styled('a')`
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

const LinkComponent = (props: any) => {

    const page = useContext(PageContext);
    const cvUrl = page?.cvs[0];

    return (
        <LinkWrapper {...props} href={cvUrl?.url}>
          {props.label}
        </LinkWrapper>
      )
};

export default LinkComponent;