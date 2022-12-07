import styled from 'styled-components';
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

const Main = styled('main')`
  position: relative;
  z-index: 2;
`

const LandingPageTemplate = (props: ContentProps) => {

  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos } = props;

  return (
    <div style={{ position: 'relative' }}>
      <Border />

      <Main>

        <HeaderWrapper {...{ menus, networks }} />

        <Wrapper content>
          <SlideComponent {...{ items: slides }} />
        </Wrapper>

        <Wrapper content id="about">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '64px', alignItems: 'center' }}>
            <ContentComponent {...{ contents }} />
            <PhotoComponent {...{ photos }} />
            <BadgetComponent {...{ badgets }} />
          </div>
        </Wrapper>



        <WrapperDivider borderTop borderBottom margin id="graduation-experience" >
          <Wrapper >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', alignItems: 'center', marginBottom: '64px' }}>
              <h2 style={{ fontSize: '3.5rem', width: '33%', display: 'flex', justifyContent: 'flex-end' }}>Graduation</h2>
              <Logo>
                <h2 style={{ fontSize: '3.5rem' }}>&</h2>
              </Logo>
              <h2 style={{ fontSize: '3.5rem', width: '33%' }}>Experience</h2>
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
              <h2 style={{ fontSize: '3.5rem' }}>Knowledges</h2>
              <TechnologyComponent {...{ technologies }} />
            </div>
          </Wrapper>
        </WrapperDivider>

        <Wrapper id="contact">
          <div style={{ padding: '64px 0px', display: 'flex', gap: '128px' }}>
            <div style={{ width: '50%' }}>
              <h2 style={{ fontSize: '3.5rem' }}>Contacts</h2>
              <FormComponent />
            </div>
            <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <Logo>
                  <h2>&#60;REO/&#62;</h2>
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

export type ContentProps = {
  menus: MenuItems[],
  contents: ContentItems[],
  slides: SlideItem[],
  graduations: GraduationExperiencesItems[],
  experiences: GraduationExperiencesItems[],
  technologies: TechnologyItems[],
  networks: NetworkItems[],
  badgets: BadgetItems[],
  photos: PhotoItem[]
}