import { GetStaticProps } from "next";
import { GetApi } from '../services/api';
import LandingPageTemplate,{ContentProps} from './templates/landingPage.template';

export default function Home(props:ContentProps) {
  const {menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos} = props;
  return (
    <LandingPageTemplate {...{menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos}} />
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
      slides{
        id
        title
        subtitle
        description
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
