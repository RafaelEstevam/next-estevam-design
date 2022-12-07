import styled from 'styled-components';
import Wrapper from './wrapper.component';
import MeunComponent, {MenuItems, NetworkItems} from './menu.component';
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

const HeaderComponent = styled('div')<{ justifyContent?: string }>`
    width: 33.33%;
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: center;
`

const HeaderWrapper = ({menus, networks}:HeaderProps) => {
    return (
        <CustomHeader>
            <Wrapper>
                <MenuWrapper>
                    <HeaderComponent>
                        <MeunComponent {...{menus}} />
                    </HeaderComponent>
                    <HeaderComponent justifyContent={'center'}>
                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '16px', border: '4px solid #333', borderRadius: '10px 10px'}}>
                            <h2 style={{fontSize: '1.5rem'}}>&#60;REO/&#62;</h2>
                            {/* <small>Rafael Estevam de Oliveira</small> */}
                        </div>
                    </HeaderComponent>
                    <HeaderComponent justifyContent={'right'}>
                        <NetworkComponent {...{networks}} />
                    </HeaderComponent>
                </MenuWrapper>
            </Wrapper>
        </CustomHeader>
    )
}

export default HeaderWrapper;