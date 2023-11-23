import { useState } from "react";
import styled from "styled-components";
import { style } from "../../styles/settings";
import { ContentLink } from "./content.component";
import { datalayerOnClickMenu } from "../utils/datalayerActions";

export interface NetworkItems {
  id: string;
  name: string;
  link: string;
  label: string;
}

export interface MenuItems extends NetworkItems {
  slug: string;
}

export type MenuProps = {
  menus?: MenuItems[];
  networks?: NetworkItems[];
};

const ItemMenu = styled("li")`
  list-style: none;
  position: relative;
  overflow: hidden;
  .itemLinkEffect {
    opacity: 0;
    transition: 0.2s linear all;
    position: absolute;
    bottom: 0px;
    width: 0px;
  }
  :hover {
    .itemLinkEffect {
      opacity: 1;
      width: 100%;
    }
  }
`;

const MainMenu = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: ${style.constAttr * 8}px;
`;

const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 140px);
  padding-bottom: ${style.constAttr * 8}px;
  position: fixed;
  opacity: 0;
  transition: 0.1s linear all;
  top: 140px;
  z-index: 20;
  &.active {
    opacity: 1;
  }
`;

const ItemLink = styled("a")`
  color: ${style.white};
  cursor: default;
  text-transform: uppercase;
  font-weight: bold;
  padding: ${style.constAttr * 4}px 0px;
  min-width: max-content;
  display: none;
  font-size: 2.5rem;
  &.active {
    display: block;
    :hover {
      cursor: pointer;
    }
  }
  ::after {
    content: " ";
    background: #fc0;
    height: 100%;
    width: 0%;
    display: block;
    position: absolute;
    border-radius: ${style.constAttr * 2.5}px;
    top: 0px;
    background: #ffffff03;
    backdrop-filter: invert(100);
    transition: 0.1s linear all;
  }
  :hover {
    ::after {
      width: 5%;
    }
  }
  @media (max-width: ${style.md}) {
    &.active {
      display: contents;
      flex-wrap: wrap;
      line-break: normal;
    }
  }
`;

const HamburgerMenu = styled("div")`
  cursor: pointer;
  position: relative;
  height: ${style.constAttr * 10}px;
  width: ${style.constAttr * 12}px;
  background: transparent;
  .ham {
    width: 100%;
    height: ${style.constAttr}px;
    border-radius: ${style.constAttr * 10}px;
    display: block;
    background: ${style.white};
    position: absolute;
    transition: 0.1s linear all;
    transform: rotate(0deg);
  }
  .ham1 {
    top: 0%;
  }
  .ham2 {
    top: calc(50% - 2px);
  }
  .ham3 {
    bottom: 0px;
  }
  &.active {
    .ham {
      background: ${style.white};
    }
    .ham1 {
      opacity: 0;
      top: calc(50% - 4px);
    }
    .ham3 {
      opacity: 0;
      bottom: calc(50% - 4px);
    }
    .ham2 {
      transition-delay: 0.1s;
      transform: rotate(45deg);
    }
    .ham2-2 {
      transform: rotate(-45deg);
    }
  }
`;

const HamburgerMenuWrapper = styled("div")<{ show?: Boolean }>`
  display: flex;
  gap: ${style.constAttr * 10}px;
  position: fixed;
  z-index: ${(props) => (props.show ? 10 : 2)};
`;

const MenuBackground = styled("div")<{
  bgColor?: string;
  efect?: string;
  top?: number;
}>`
  position: fixed;
  z-index: -1;
  left: 0px;
  backdrop-filter: ${(props) => props.efect};
  top: ${(props) => props.top || 0}px;
  bottom: 0px;
  width: calc(100%);
  transition: 0.2s linear all;

  &.fade {
    opacity: 0;
    background: transparent;
  }
  &.active {
    z-index: 2;
    opacity: 1;
    background: ${(props) => props.bgColor};
  }
  @media (max-width: ${style.md}) {
    &.active {
      width: calc(100%);
    }
  }
`;

const Language = styled("div")`
  display: flex;
  gap: ${style.constAttr * 4}px;
`;

const ItemLanguage = styled("a")`
  color: ${style.textLight};
`;

const setBodyOverlay = (show: boolean) => {
  const body = document.getElementsByTagName("body")[0];
  if (show) {
    body.classList.add("hide");
  } else {
    body.classList.remove("hide");
  }
};

const MeunComponent = ({ menus }: MenuProps) => {
  const [show, setShow] = useState<Boolean>(false);

  const handleShow = (show: boolean) => {
    setShow(show);
    setBodyOverlay(show);
    datalayerOnClickMenu();
  };

  return (
    <>
      <HamburgerMenuWrapper {...{ show }}>
        <HamburgerMenu
          className={show && "active"}
          onClick={() => (show ? handleShow(false) : handleShow(true))}
        >
          <div className="ham ham1"></div>
          <div className="ham ham2"></div>
          <div className="ham ham2 ham2-2"></div>
          <div className="ham ham3"></div>
        </HamburgerMenu>
      </HamburgerMenuWrapper>

      <Menu className={show && "active"}>
        <MainMenu>
          {menus?.map((item, key) => (
            <ItemMenu key={key}>
              <ItemLink className={show && "active"} href={item.link}>
                {item.label}
              </ItemLink>
            </ItemMenu>
          ))}
        </MainMenu>

        <Language className={show && "active"}>
          <ContentLink href="/">en</ContentLink>
          <ContentLink href="/pt_BR">pt_BR</ContentLink>
        </Language>
      </Menu>

      <MenuBackground
        bgColor={`${style.black}cc`}
        efect="blur(12px)"
        className={show ? "active" : "fade"}
      />
    </>
  );
};

export default MeunComponent;
