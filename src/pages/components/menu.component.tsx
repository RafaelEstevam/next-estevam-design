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

const ItemLink = styled('a')`
    color: #fff;
    cursor: default;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${style.fontSize}rem;
    padding: ${style.constAttr * 4}px ${style.constAttr * 2}px;
    display: block;
    min-width: max-content;
    &.active{
        :hover{
            cursor: pointer;
        }
    }
    
`

const ItemLinkEffect = styled('div')`
    width: 100%;
    height: ${style.constAttr}px;
    background: ${style.grayBackground};
    border-radius: ${style.constAttr * 10}px;
`

const Menu = styled('ul')`
    display: flex;
    gap: ${style.constAttr * 4}px;
    opacity: 0;
    transition: 0.1s linear all;
    &.active{
        opacity: 1;
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
        background: ##fc0;
    }
    .ham2{
        top: calc(50% - 2px);
    }
    .ham3{
        bottom: 0px;
    }
    &.active{
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

const HamburgerMenuWrapper = styled('div')`
    display: flex;
    align-items: center;
    gap: ${style.constAttr * 10}px;
`

const MeunComponent = ({ menus }: MenuProps) => {

    const [show, setShow] = useState<Boolean>(false);

    return (
        <HamburgerMenuWrapper>
            <HamburgerMenu className={show && 'active'} onClick={() => show ? setShow(false) : setShow(true)}>
                <div className="ham ham1"></div>
                <div className="ham ham2"></div>
                <div className="ham ham2 ham2-2"></div>
                <div className="ham ham3"></div>
            </HamburgerMenu>
            <Menu className={show && 'active'}>
                {menus?.map((item, key) => (
                    <ItemMenu key={key}>
                        <ItemLink className={show && 'active'} href={item.link}>{item.label}</ItemLink>
                        <ItemLinkEffect className="itemLinkEffect" />
                    </ItemMenu>
                ))}
            </Menu>

        </HamburgerMenuWrapper>
    )
};

export default MeunComponent;