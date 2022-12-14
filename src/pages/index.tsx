import { GetStaticProps } from "next";
import { createContext } from 'react';
import { GetApi } from '../services/api';
import LandingPageTemplate, { ContentProps } from './templates/landingPage.template';
import { queryGetPage } from '../queries/getPage';
import { create } from "domain";

export const LanguageContext = createContext(null);

export default function Home(props: ContentProps) {
  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words } = props;

  return (
    <LandingPageTemplate {...{ menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words, lang:"en" }} />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const getGraph = await GetApi(queryGetPage('pt_BR'), 'POST');
  const { menus, contents, slides, experiences, graduations, technologies, networks, badgets, photos, words } = getGraph

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
      photos: photos,
      words: words
    }
  }
}
