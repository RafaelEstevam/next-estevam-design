import styled from 'styled-components';
import Wrapper from './wrapper.component';
import MeunComponent, { MenuItems, NetworkItems } from './menu.component';
import NetworkComponent from './network.component';
import { style } from '../../styles/settings';
import TitleComponent from './title.component';

export type HeaderProps = {
    menus?: MenuItems[];
    networks?: NetworkItems[];
}

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: ${style.constAttr * 8}px 0px;
  align-items: center;
`

const CustomHeader = styled('div')``

const HeaderComponent = styled('div') <{ justifyContent?: string }>`
    width: 33.33%;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: center;
`

export const Logo = styled('div') <{ fontSize?: string }>`
    display: flex;
    padding: ${style.constAttr * 4}px;
    border: ${style.constAttr}px solid ${style.grayBackground};
    border-radius: ${style.constAttr * 2.5}px;
    background: ${style.black};
    align-items: center;
    justify-content: center;
`;

const HeaderWrapper = ({ menus, networks }: HeaderProps) => {
    return (
        <CustomHeader>
            <Wrapper id='#' header>
                <MenuWrapper>
                    <HeaderComponent>
                        <MeunComponent {...{ menus }} />
                    </HeaderComponent>
                    <HeaderComponent justifyContent={'center'}>
                        <Logo>
                            <TitleComponent title='<REO/>' fontSize='1.5rem' />
                        </Logo>
                    </HeaderComponent>
                    <HeaderComponent justifyContent={'right'}>
                        <NetworkComponent {...{ networks }} />
                    </HeaderComponent>
                </MenuWrapper>
            </Wrapper>
        </CustomHeader>
    )
}

export default HeaderWrapper;