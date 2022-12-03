import styled from 'styled-components';
import MeunComponent, {MenuItems, NetworkItems} from './components/menu.component';
import NetworkComponent from './components/network.component';
import SlideComponent from './components/slide.component';
import ContentComponent, {ContentItems} from './components/content.component';
import BadgetComponent, {BadgetItems} from './components/badget.component';
import TechnologyComponent, {TechnologyItems} from './components/technology.component';
import GraduationComponent from './components/graduation.component';
import ExperienceComponent from './components/experience.component';
import { GraduationExperiencesItems } from './components/interfaces/graduationExperience.component.interface';
import Wrapper from './components/wrapper.component';
import { GetStaticProps } from "next";
import { GetApi } from '../services/api';
import Image from 'next/image';
import PhotoComponent, { PhotoItem } from './components/photo.component';

const MenuWrapper = styled('nav')`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default function Home(props:ContentProps) {

  const {menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos} = props;

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
              <ContentComponent {...{contents}} />
            </div>
            <div>
              <PhotoComponent {...{photos}} />
            </div>
            <div>
              <BadgetComponent {...{badgets}} />
            </div>
          </div>
        </Wrapper>
        
        <Wrapper>
          <div>
            <TechnologyComponent {...{technologies}} />
          </div>
        </Wrapper>

        <Wrapper>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <GraduationComponent {...{graduations}} />
            </div>
            <div>
              <ExperienceComponent {...{experiences}} />
            </div>
          </div>
        </Wrapper>
    </main>
  )
}

export const getStaticProps:GetStaticProps = async(context) => {

  const {menus, contents, slides, experiences, graduations, technologies, networks, badgets, photos} = await GetApi(
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
      experiences:graduationExperiences(where:{typeExperience:experience}){
        id
        name
        description
        company
        startDate
        current
        endDate
        typeExperience
      }
      graduations:graduationExperiences(where:{typeExperience:graduation}){
        id
        name
        description
        company
        startDate
        current
        endDate
        typeExperience
      }
      technologies:teches{
        id
        name
        description
        skill
        logo{
          url
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
      photos:assets(where: {width_gt:500, mimeType:"image/jpeg"}){
        id
        url
        mimeType
      }
  }`, 'POST');

  return {
    props: {
      menus: menus,
      contents: contents,
      slides: slides,
      experiences: experiences,
      graduations: graduations,
      technologies: technologies,
      networks:networks,
      badgets: badgets,
      photos: photos
    }
  }
}

type ContentProps = {
  menus: MenuItems[],
  contents: ContentItems[],
  slides: ContentItems[],
  graduations: GraduationExperiencesItems[],
  experiences: GraduationExperiencesItems[],
  technologies: TechnologyItems[],
  networks: NetworkItems[],
  badgets: BadgetItems[],
  photos: PhotoItem[]
}
