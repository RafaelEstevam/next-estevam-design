const language = (word: string, lang: any) => {
    const languages:any = {
        "Graduation": {
            "en":"Graduation",
            "pt_BR": "Graduação"
        },
        "Experience": {
            "en":"Experience",
            "pt_BR": "Experiencia"
        },
        "Knowledges": {
            "en": "Knowledges",
            "pt_BR": "Conhecimentos"
        },
        "Contacts": {
            "en": "Contacts",
            "pt_BR": "Contatos"
        },
        "Name": {
            "en": "Name",
            "pt_BR": "Nome"
        },
        "Email": {
            "en": "Email",
            "pt_BR": "Email"
        },
        "Subject": {
            "en": "Subject",
            "pt_BR": "Assunto"
        },
        "Message": {
            "en": "Message",
            "pt_BR": "Mensagem"
        },
        "Submit_contact": {
            "en": "Submit contact",
            "pt_BR": "Enviar contato"
        },
        "Current": {
            "en": "Current",
            "pt_BR": "Atual"
        },
        "Company": {
            "en": "Company",
            "pt_BR": "Empresa"
        },
        "Institution": {
            "en": "Institution",
            "pt_BR": "Instituição"
        }
    }

    return languages[word][lang];

}

export {language};