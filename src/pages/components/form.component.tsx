import {useEffect, useState} from 'react';

interface FormInterface {
    name: string,
    email: string,
    subject: string,
    message: string,
}

interface ElementInterface{

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
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