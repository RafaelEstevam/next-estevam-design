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
        content{
					html
        }
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
        link
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
        link
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
      },
      words{
        word
      },
      cvs:assets(locales:${language}, where: {mimeType:"application/pdf"}){
        url
      }
    }
  `
}

export { queryGetPage };