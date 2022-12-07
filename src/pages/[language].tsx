import { GetStaticProps, GetStaticPaths } from "next";
import { GetApi } from '../services/api';
import LandingPageTemplate,{ContentProps} from './templates/landingPage.template';

interface Language{
    language: string
}

export default function Home(props:ContentProps) {
  const {menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos} = props;
  const isVoid = props && Object.keys(props).length === 0;

  return !isVoid ? (
    <LandingPageTemplate {...{menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos}} />
  ) : (
    <h1>404</h1>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
    const {localizations} = await GetApi(
        `query {
            localizations {
                language
            }
      }`, 'POST');

    const paths = localizations.map((lang:Language) => ({
        params: {language: lang.language}
    }))

    return {paths, fallback: true}
}

export const getStaticProps:GetStaticProps = async({params = {}}) => {
  const getGraph = await GetApi(
    `query {
        menus (locales:${params.language}) {
          id
          label
          link
          slug
        }
        contents(where:{typeOfContent:text}, locales:${params.language}) {
          id
          title
          text
          typeOfContent
        }
        slides(locales:${params.language}){
          id
          title
          subtitle
          description
        }
        experiences:graduationExperiences(where:{typeExperience:experience}, locales:${params.language}){
          id
          name
          description
          company
          startDate
          current
          endDate
          typeExperience
        }
        graduations:graduationExperiences(where:{typeExperience:graduation}, locales:${params.language}){
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
        badgets(locales:${params.language}){
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

  if(getGraph){
    const {menus, contents, slides, experiences, graduations, technologies, networks, badgets, photos} = getGraph

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
  }else{
    return {
      props: {}
    }
  }
}
