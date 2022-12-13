import { useContext } from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { PostApi } from '../../services/api';
import InputItem, { TextAreaForm } from './input.form.component';
import ButtonComponent from './Button.component';
import { useSnackbar } from 'notistack';
// import { LanguageContext } from './context.component';
import { WordInterface } from '../templates/landingPage.template';
interface FormInterface {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const FormWrapper = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 64px;
`;

const FormComponent = () => {

    const { enqueueSnackbar } = useSnackbar();

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
            <InputItem placeholder={'language[4]?.word'} required name={'language[4]?.word'} value={form.name || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={'language[5]?.word'} required name={'language[5]?.word'} value={form.email || ''} onChange={(e) => handleChange(e)} />
            <InputItem placeholder={'language[6]?.word'} required name={'language[6]?.word'} value={form.subject || ''} onChange={(e) => handleChange(e)} />
            <TextAreaForm placeholder={'language[7]?.word'} required rows={5} name={'language[7]?.word'} value={form.message || ''} onChange={(e) => handleChange(e)}></TextAreaForm>
            {!loading ? (
                <ButtonComponent type='submit' label={'language[8].word'} />
            ) : (
                <p>Loading...</p>
            )}
        </FormWrapper>
    )
}

export default FormComponent;