import { createContext, useContext } from 'react';
import { GetStaticProps, GetStaticPaths } from "next";
import { GetApi } from '../services/api';
import LandingPageTemplate, { ContentProps } from './templates/landingPage.template';
import { queryGetPage } from '../queries/getPage';
import ContextComponent from './components/context.component';

interface Language {
  language: string
}

export const LanguageContext = createContext(null);

export default function Home(props: ContentProps) {
  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words } = props;
  const isVoid = props && Object.keys(props).length === 0;
  const wordsProps: any = words;

  return !isVoid ? (
    <ContextComponent props={props} />
  ) : (
    <h1>404</h1>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { localizations } = await GetApi(
    `query {
            localizations {
                language
            }
      }`, 'POST');

  const paths = localizations.map((lang: Language) => ({
    params: { language: lang.language }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const getGraph = await GetApi(queryGetPage(params.language), 'POST');

  if (getGraph) {
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
  } else {
    return {
      props: {}
    }
  }
}
