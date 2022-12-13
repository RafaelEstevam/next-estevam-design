import styled from 'styled-components';
// import { LanguageContext } from '../components/context.component';
import HeaderWrapper, { Logo } from '../components/header.component';
import { MenuItems, NetworkItems } from '../components/menu.component';
import SlideComponent, { SlideItem } from '../components/slide.component';
import ContentComponent, { ContentItems } from '../components/content.component';
import BadgetComponent, { BadgetItems } from '../components/badget.component';
import TechnologyComponent, { TechnologyItems } from '../components/technology.component';
import GraduationComponent from '../components/graduation.component';
import ExperienceComponent from '../components/experience.component';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import Wrapper, { WrapperDivider } from '../components/wrapper.component';
import PhotoComponent, { PhotoItem } from '../components/photo.component';
import Border from '../components/border.component';
import FormComponent from '../components/form.component';
import ButtonComponent from '../components/Button.component';
import TitleComponent from '../components/title.component';

export interface WordInterface {
  word: string
}

const Main = styled('main')`
  position: relative;
  z-index: 2;
`;

const MenuBackground = styled('div') <{ bgColor?: string, efect?: string, top?: number }>`
  width: calc(50%);
  height: 100%;
  position: absolute;
  background: ${props => props.bgColor};
  z-index: 40;
  backdrop-filter: ${props => props.efect};
  top: ${props => props.top}px;
`;

const LandingPageTemplate = (props: ContentProps) => {

  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Border />

      <Main>

        <HeaderWrapper {...{ menus, networks }} />

        <Wrapper content={'true'}>
          <SlideComponent {...{ items: slides }} />
        </Wrapper>

        <Wrapper content={'true'} id="about">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '64px', alignItems: 'center' }}>
            <ContentComponent {...{ contents }} />
            <PhotoComponent {...{ photos }} />
            <BadgetComponent {...{ badgets }} />
          </div>
        </Wrapper>



        <WrapperDivider borderTop borderBottom margin id="graduation-experience" >
          <Wrapper >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center', marginBottom: '64px' }}>
              <TitleComponent display='flex' justifyContent='flex-end' title={'language[0]?.word'} width='33%' fontSize='3.5rem' />
              <Logo>
                <TitleComponent title='&' width='33%' fontSize='3.5rem' />
              </Logo>
              <TitleComponent display='flex' justifyContent='flex-start' title={'language[1]?.word'} width='33%' fontSize='3.5rem' />
            </div>
            <div style={{ display: 'flex', gap: '128px' }}>
              <GraduationComponent {...{ graduations }} />
              <ExperienceComponent {...{ experiences }} />
            </div>
          </Wrapper>
        </WrapperDivider>

        <WrapperDivider borderBottom>
          <Wrapper>
            <div style={{ display: 'flex', alignItems: 'center', gap: '64px' }}>
              <TitleComponent title={'language[2]?.word'} fontSize='3.5rem' />
              <TechnologyComponent {...{ technologies }} />
            </div>
          </Wrapper>
        </WrapperDivider>

        <Wrapper id="contact">
          <div style={{ padding: '64px 0px', display: 'flex', gap: '128px' }}>
            <div style={{ width: '50%' }}>
              <TitleComponent title={'language[3]?.word'} fontSize='3.5rem' />
              <FormComponent />
            </div>
            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Logo>
                  <TitleComponent title='<REO/>' fontSize='2.5rem' />
                </Logo>
                <ButtonComponent label='Download CV' />
              </div>
            </div>
          </div>
        </Wrapper>

        <WrapperDivider borderTop>
          <Wrapper>
            Site builded with: React, Next, GraphQL. Hosted on Netlify.
          </Wrapper>
        </WrapperDivider>


      </Main>
    </div>
  )
}

export default LandingPageTemplate;

interface WordItem {
  word: string
}

export type ContentProps = {
  menus: MenuItems[],
  contents: ContentItems[],
  slides: SlideItem[],
  graduations: GraduationExperiencesItems[],
  experiences: GraduationExperiencesItems[],
  technologies: TechnologyItems[],
  networks: NetworkItems[],
  badgets: BadgetItems[],
  photos: PhotoItem[],
  words: WordItem[]
}