import styled from 'styled-components';
import HeaderWrapper from '../components/header.component';
import {MenuItems, NetworkItems} from '../components/menu.component';
import SlideComponent, {SlideItem} from '../components/slide.component';
import ContentComponent, {ContentItems} from '../components/content.component';
import BadgetComponent, {BadgetItems} from '../components/badget.component';
import TechnologyComponent, {TechnologyItems} from '../components/technology.component';
import GraduationComponent from '../components/graduation.component';
import ExperienceComponent from '../components/experience.component';
import { GraduationExperiencesItems } from '../../interfaces/graduationExperience.interface';
import Wrapper from '../components/wrapper.component';
import PhotoComponent, { PhotoItem } from '../components/photo.component';
import FormComponent from '../components/form.component';

const LandingPageTemplate = (props:ContentProps) => {

    const {menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos} = props;

    return (
      <main>
        
        <HeaderWrapper {...{menus, networks}} />
        
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

        {/* <Wrapper>
          <FormComponent />
        </Wrapper> */}
    </main>
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