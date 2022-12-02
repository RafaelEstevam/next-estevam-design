import styled from 'styled-components';
import MeunComponent from './components/menu.component';
import Wrapper from './components/wrapper.component';
import { GetStaticProps } from "next";
import { GetApi } from '../services/api';

interface MenuItems{
  label: string,
  link: string
}

type MenuItemsProps = {
  menus: MenuItems[];
}

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 32px;
`

export default function Home(props:MenuItemsProps) {

  const {menus:items} = props;

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

export const getStaticProps:GetStaticProps = async(context) => {

  const {menus} = await GetApi(
    `query {
      menus {
          id
          label
          link
          slug
      }
  }`, 'POST');

  return {
    props: {
      menus: menus
    }
  }
}
