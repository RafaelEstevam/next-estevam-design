const queryGetPage = (language?: string | string[] | undefined) => {
  return `
    query {
      menus (locales:${language}) {
        id
        label
        link
        slug
      }
      contents(where:{typeOfContent:text}, locales:${language}) {
        id
        title
        text
        typeOfContent
      }
      slides(locales:${language}){
        id
        title
        subtitle
        description
      }
      experiences:graduationExperiences(where:{typeExperience:experience}, locales:${language}){
        id
        name
        description
        company
        startDate
        current
        endDate
        typeExperience
      }
      graduations:graduationExperiences(where:{typeExperience:graduation}, locales:${language}){
        id
        name
        description
        company
        startDate
        current
        endDate
        typeExperience
      }
      technologies:teches(first:50){
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
      badgets(locales:${language}){
        id
        title
        value
      }
      photos:assets(where: {width_gt:500, mimeType:"image/jpeg"}, first: 1){
        id
        url
        mimeType
      }
    }
  `
}

export { queryGetPage };