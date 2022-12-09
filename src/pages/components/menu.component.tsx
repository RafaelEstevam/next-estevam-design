import { useState } from 'react';
import styled from 'styled-components';
import { style } from '../../styles/settings';

export interface NetworkItems {
    id: string,
    name: string,
    link: string,
    label: string,
}

export interface MenuItems extends NetworkItems {
    slug: string
}

export type MenuProps = {
    menus?: MenuItems[];
    networks?: NetworkItems[];
}

const ItemMenu = styled('li')`
    list-style: none;
    position: relative;
    overflow: hidden;
    .itemLinkEffect{
        opacity: 0;
        transition: 0.2s linear all;
        position:absolute;
        bottom: 0px;
        width: 0px;
    }
    :hover{
        .itemLinkEffect{
            opacity: 1;
            width: 100%;
        }
    }
`

const Menu = styled('ul')`
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: ${style.constAttr * 8}px;
    opacity: 0;
    transition: 0.1s linear all;
    top: 140px;
    z-index: 20;
    &.active{
        opacity: 1;
    }
`;

const ItemLink = styled('a')`
    color: ${style.black};
    cursor: default;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${style.fontSize}rem;
    padding: ${style.constAttr * 4}px ${style.constAttr * 2}px;
    // display: block;
    min-width: max-content;
    display: none;
    font-size: 3.5rem;
    &.active{
        display: block;
        :hover{
            cursor: pointer;
        }
    }
    ::after{
        content: ' ';
        background: #fc0;
        height: 100%;
        width: 0%;
        display: block;
        position: absolute;
        top: 0px;
        background: #ffffff03;
        backdrop-filter: invert(100);
        transition: 0.2s linear all;
    }
    :hover{
        ::after{
            width: 50%;
        }
    }
`;

const HamburgerMenu = styled('div')`
    cursor:pointer;
    position: relative;
    height: ${style.constAttr * 10}px;
    width: ${style.constAttr * 12}px;
    .ham{
        width: 100%;
        height: ${style.constAttr}px;
        border-radius: ${style.constAttr * 10}px;
        display: block;
        background: ${style.white};
        position: absolute;
        transition: 0.1s linear all;
        transform: rotate(0deg);
    }
    .ham1{
        top: 0%;
    }
    .ham2{
        top: calc(50% - 2px);
    }
    .ham3{
        bottom: 0px;
    }
    &.active{
        .ham{
            background: ${style.black};
        }
        .ham1{
            opacity:0;
            top: calc(50% - 4px);
        }
        .ham3{
            opacity:0;
            bottom: calc(50% - 4px);
        }
        .ham2{
            transition-delay: 0.1s;
            transform: rotate(45deg);
        }
        .ham2-2{
            transform: rotate(-45deg);
        }
    }
`

const HamburgerMenuWrapper = styled('div')<{ show?: Boolean }>`
    display: flex;
    // align-items: center;
    gap: ${style.constAttr * 10}px;
    flex-direction: column;
    position: fixed;
    z-index: ${props => props.show ? 10 : 2};
`

const MenuBackground = styled('div')<{ bgColor?: string, efect?: string, top?: number }>`
  width: 0px;
  height: 100%;
  position: absolute;
  background: ${props => props.bgColor};
  z-index: 2;
  left: 0px;
  backdrop-filter: ${props => props.efect};
  top: ${props => props.top}px;
  transition: 0.1s linear all;
  &.active{
    width: calc(50%);
  }
`

const MeunComponent = ({ menus }: MenuProps) => {

    const [show, setShow] = useState<Boolean>(false);

    return (
        <>
            <HamburgerMenuWrapper {...{show}}>
                <HamburgerMenu className={show && 'active'} onClick={() => show ? setShow(false) : setShow(true)}>
                    <div className="ham ham1"></div>
                    <div className="ham ham2"></div>
                    <div className="ham ham2 ham2-2"></div>
                    <div className="ham ham3"></div>
                </HamburgerMenu>
                {/* {show && (
                    <Menu className={show && 'active'}>
                        {menus?.map((item, key) => (
                            <ItemMenu key={key}>
                                <ItemLink className={show && 'active'} href={item.link}>{item.label}</ItemLink>
                            </ItemMenu>
                        ))}
                    </Menu>
                )} */}
            </HamburgerMenuWrapper>
            
            <Menu className={show && 'active'}>
                {menus?.map((item, key) => (
                    <ItemMenu key={key}>
                        <ItemLink className={show && 'active'} href={item.link}>{item.label}</ItemLink>
                    </ItemMenu>
                ))}
            </Menu>

            <MenuBackground bgColor='rgba(240,240,240,0.1)' efect='invert(100)' className={show && 'active'}/>
            <MenuBackground bgColor='rgba(237,237,237,1)' top={134} className={show && 'active'}/>
        </>
    )
};

export default MeunComponent;