import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PostApi } from '../../services/api';
import InputItem, { TextAreaForm } from './input.form.component';
import ButtonComponent from './Button.component';
import { useSnackbar } from 'notistack';

import {language} from '../../services/translate';
import { style } from '../../styles/settings';

import { PageContext } from '../templates/landingPage.template';

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
    const page = useContext(PageContext);

    const [form, setForm] = useState<FormInterface>({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [loading, setLoading] = useState(false);

    const handleRefreshForm = () => {
        setForm({
            name: '',
            email: '',
            message: '',
            subject: ''
        })
    }

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
        handleRefreshForm();
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

    // useEffect(() => {
    //     console.log(form)
    // }, [form])

    return (
        <FormWrapper onSubmit={(e) => handleSubmit(e)}>
            <InputItem placeholder={language("Name", page?.lang)} required name={'name'} value={form?.name || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={language("Email", page?.lang)} required name={'email'} value={form?.email || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={language("Subject", page?.lang)} required name={'subject'} value={form?.subject || ''} onChange={(e) => handleChange(e)} />
            <TextAreaForm placeholder={language("Message", page?.lang)} required rows={5} name={'message'} value={form?.message || ''} onChange={(e) => handleChange(e)}></TextAreaForm>
            {!loading ? (
                <ButtonComponent type='submit' label={language("Submit_contact", page?.lang)} />
            ) : (
                <p>Loading...</p>
            )}
        </FormWrapper>
    )
}

export default FormComponent;