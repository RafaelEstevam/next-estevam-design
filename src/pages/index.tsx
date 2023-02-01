import { GetStaticProps } from "next";
import { createContext } from 'react';
import { GetApi } from '../services/api';
import LandingPageTemplate, { ContentProps } from './templates/landingPage.template';
import { queryGetPage } from '../queries/getPage';


export const LanguageContext = createContext(null);

export default function Home(props: ContentProps) {
  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words, cvs } = props;

  return (
    <LandingPageTemplate {...{ menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words, lang:"en", cvs }} />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const lang = 'en'

  const getGraph = await GetApi(queryGetPage(lang), 'POST');

  const { menus, contents, slides, experiences, graduations, technologies, networks, badgets, photos, words, cvs } = getGraph

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
      words: words,
      lang: lang,
      cvs: cvs
    }
  }
}
