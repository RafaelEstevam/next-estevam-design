import {useEffect, useState} from 'react';
import {PostApi} from '../../services/api';

interface FormInterface {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const FormComponent = () => {

    const [form, setForm] = useState<FormInterface>({
        name:'',
        email:'',
        message: '',
        subject: ''
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setForm({...form, ...{[e.currentTarget.name]: e.currentTarget.value}})
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

        const response = await PostApi(mutation, 'POST');
        console.log(response);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input name="name" value={form.name || ''} onChange={(e) => handleChange(e)} />
            <input name="email" value={form.email || ''} onChange={(e) => handleChange(e)}/>
            <input name="subject" value={form.subject || ''} onChange={(e) => handleChange(e)}/>
            <input name="message" value={form.message || ''} onChange={(e) => handleChange(e)}/>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default FormComponent;