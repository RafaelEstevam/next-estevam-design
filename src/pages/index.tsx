import styled from 'styled-components';
import MeunComponent, {MenuItems, NetworkItems} from './components/menu.component';
import NetworkComponent from './components/network.component';
import SlideComponent from './components/slide.component';
import ContentComponent, {ContentItems} from './components/content.component';
import Wrapper from './components/wrapper.component';
import { GetStaticProps } from "next";
import { GetApi } from '../services/api';

interface GraduationExperiencesItems{
  id: string,
  name: string,
  description: string,
  company: string,
  startDate: string,
  current: string,
  endDate: string,
  typeExperience: string
}

interface TechItems{
  id: string,
  name: string,
  description: string,
  skill: string
}

interface BadgetItems{
  id: string,
  title: string,
  value: string,
}

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default function Home(props:ContentProps) {

  const {menus, contents, slides, graduationExperiences, teches, networks, badgets} = props;

  return (
    <main>
        <Wrapper>
          <MenuWrapper>
              <MeunComponent {...{menus}} />
                <h2>Estevam Design</h2>
              <NetworkComponent {...{networks}} />
          </MenuWrapper>
        </Wrapper>
        <Wrapper>
          <SlideComponent {...{items: slides}} />
        </Wrapper>
        <Wrapper>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <h3>
              Sobre
            </h3>
          </div>
          <div>
            Foto
          </div>
          <div>
            <h3>
              Badgets
            </h3>
          </div>
          </div>
        </Wrapper>
    </main>
  )
}

export const getStaticProps:GetStaticProps = async(context) => {

  const {menus, contents, slides, graduationExperiences, teches, networks, badgets} = await GetApi(
    `query {
      menus {
        id
        label
        link
        slug
      }
      contents(where:{typeOfContent:text}) {
        id
        title
        text
        typeOfContent
      }
      slides:contents(where:{typeOfContent:slide}){
        id
        title
        text
        typeOfContent
      }
      graduationExperiences {
        id
        name
        description
        company
        startDate
        current
        endDate
        typeExperience
      }
      teches{
        id
        name
        description
        skill
        logo{
          locale
        }
      }
      networks{
        id
        name
        link
        icon{
          locale
        }
      }
      badgets{
        id
        title
        value
      }
  }`, 'POST');

  return {
    props: {
      menus: menus,
      contents: contents,
      slides: slides,
      graduationExperiences: graduationExperiences,
      teches: teches,
      networks:networks,
      badgets: badgets
    }
  }
}

type ContentProps = {
  menus: MenuItems[],
  contents: ContentItems[],
  slides: ContentItems[],
  graduationExperiences: GraduationExperiencesItems[],
  teches: TechItems[],
  networks: NetworkItems[],
  badgets: BadgetItems[]
}
