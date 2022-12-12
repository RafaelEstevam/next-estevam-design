import { createContext } from 'react';
import LandingPageTemplate, { ContentProps } from '../templates/landingPage.template';

export const LanguageContext = createContext(null);

interface ContextProps {
  props: ContentProps
}

const ContextComponent = ({ props }: ContextProps) => {

  const { menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words } = props;
  const wordsProps: any = words;

  return (
    <LanguageContext.Provider value={wordsProps}>
      <LandingPageTemplate {...{ menus, contents, slides, graduations, experiences, technologies, networks, badgets, photos, words }} />
    </LanguageContext.Provider>
  )
}

export default ContextComponent;