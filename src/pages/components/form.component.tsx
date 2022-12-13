import { useContext, useState } from 'react';
import styled from 'styled-components';
import { PostApi } from '../../services/api';
import InputItem, { TextAreaForm } from './input.form.component';
import ButtonComponent from './Button.component';
import { useSnackbar } from 'notistack';

import {language} from '../../services/translate';
import { style } from '../../styles/settings';

import { LangContext } from '../templates/landingPage.template';

interface FormInterface {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const FormWrapper = styled('form')`
    display: flex;
    flex-direction: column;
    gap: ${style.constAttr * 8}px;
    margin-top: ${style.constAttr * 16}px;
`;

const FormComponent = () => {

    const { enqueueSnackbar } = useSnackbar();
    const lang = useContext(LangContext);

    const [form, setForm] = useState<FormInterface>({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setForm({ ...form, ...{ [e.currentTarget.name]: e.currentTarget.value } })
    }

    const handleLoading = (submited: boolean) => {
        setLoading(submited)
    }

    const handleError = () => {
        enqueueSnackbar("Houve um erro na hora de enviar. Tente novamente mais tarde", { variant: "error" });
    }

    const handleSuccess = () => {
        enqueueSnackbar("Contato enviado com sucesso.", { variant: 'success' });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const mutation = `
            mutation {
                createContactForm(data: {name:"${form.name}", email:"${form.email}", subject: "${form.subject}", message:"${form.message}"}) {
                    id
                    name
                    email
                    subject
                    message
                }
            }`

        const response = await PostApi(mutation, 'POST', handleError, handleSuccess, handleLoading);

    }

    return (
        <FormWrapper onSubmit={(e) => handleSubmit(e)}>
            <InputItem placeholder={language("Name", lang)} required name={'language[4]?.word'} value={form.name || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={language("Email", lang)} required name={'language[5]?.word'} value={form.email || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={language("Subject", lang)} required name={'language[6]?.word'} value={form.subject || ''} onChange={(e) => handleChange(e)} />
            <TextAreaForm placeholder={language("Message", lang)} required rows={5} name={'language[7]?.word'} value={form.message || ''} onChange={(e) => handleChange(e)}></TextAreaForm>
            {!loading ? (
                <ButtonComponent type='submit' label={language("Submit_contact", lang)} />
            ) : (
                <p>Loading...</p>
            )}
        </FormWrapper>
    )
}

export default FormComponent;