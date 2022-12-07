import styled from 'styled-components';
import Wrapper from './wrapper.component';
import MeunComponent, { MenuItems, NetworkItems } from './menu.component';
import NetworkComponent from './network.component';

export type HeaderProps = {
    menus?: MenuItems[];
    networks?: NetworkItems[];
}

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 32px 0px;
  align-items: center;
`

const CustomHeader = styled('div')``

const HeaderComponent = styled('div') <{ justifyContent?: string }>`
    width: 33.33%;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: center;
`

export const Logo = styled('div')`
    display: flex;
    padding: 16px;
    border: 4px solid #333;
    border-radius: 10px;
    background: #121212;
    align-items: center;
    justify-content: center;
    h2{
        font-size: 1.5rem
    }
`;

const HeaderWrapper = ({ menus, networks }: HeaderProps) => {
    return (
        <CustomHeader>
            <Wrapper id='#'>
                <MenuWrapper>
                    <HeaderComponent>
                        <MeunComponent {...{ menus }} />
                    </HeaderComponent>
                    <HeaderComponent justifyContent={'center'}>
                        <Logo>
                            <h2>&#60;REO/&#62;</h2>
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