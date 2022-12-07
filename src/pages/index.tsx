import { GetStaticProps } from "next";
import { GetApi } from '../services/api';
import LandingPageTemplate, { ContentProps } from './templates/landingPage.template';
import { queryGetPage } from '../queries/getPage';

export default function Home(props: ContentProps) {
  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos } = props;
  return (
    <LandingPageTemplate {...{ menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos }} />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const getGraph = await GetApi(queryGetPage('en'), 'POST');
  const { menus, contents, slides, experiences, graduations, technologies, networks, badgets, photos } = getGraph

  return {
    props: {
      menus: menus,
      contents: contents,
      slides: slides,
      experiences: experiences,
      graduations: graduations,
      technologies: technologies,
      networks: networks,
      badgets: badgets,
      photos: photos
    }
  }
}
