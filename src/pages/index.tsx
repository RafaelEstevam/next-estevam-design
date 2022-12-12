import { GetStaticProps } from "next";
import { createContext, useContext } from 'react';
import { GetApi } from '../services/api';
import LandingPageTemplate, { ContentProps } from './templates/landingPage.template';
import { queryGetPage } from '../queries/getPage';
import { create } from "domain";
import ContextComponent from './components/context.component';

export const LanguageContext = createContext(null);

export default function Home(props: ContentProps) {
  return (
    <ContextComponent props={props} />
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const getGraph = await GetApi(queryGetPage('en'), 'POST');
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
