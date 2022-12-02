import styled from 'styled-components';
import MeunComponent from './components/menu.component';
import Wrapper from './components/wrapper.component';

interface MenuItems{
  label: string,
  link: string
}

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 32px;
`

export default function Home() {

  const items:MenuItems[] = [{label: 'Home', link: "/"}, {label: 'About', link: "#about"}]

  return (
    <main>
      <Wrapper>
        <MenuWrapper>
            <MeunComponent {...{items}} />
              <h2>Estevam Design</h2>
            <MeunComponent {...{items}} />
        </MenuWrapper>
      </Wrapper>
    </main>
  )
}
