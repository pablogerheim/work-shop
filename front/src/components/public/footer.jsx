import '../../css/helper.css'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { apiEmail } from "../../data/publicData";

function Footer() {
    const [email, setEmail] = useState('')
    const handleEmailChange = (e) => setEmail(e.target.value)
    const [name, setNome] = useState('')
    const handleNomeChange = (e) => setNome(e.target.value)

    function handleSubmit() {
        apiEmail.post('/', {name, email})
        console.log(email)
        setNome('')
        setEmail('')
    }

    return (
        <div className="footer bg-slate-800 flex justify-around h-20">
            <button onClick={() => handleSubmit()} className='text-slate-100 p-4'>
                Enviar
            </button>
            <div className='flex gap-3 mr-2 '>
                <label className='text-slate-100'>
                    Nome
                    <Input
                        className='text-slate-100'
                        placeholder=' Nome'
                        required
                        type='text'
                        value={name}
                        onChange={handleNomeChange} />
                </label>
                <label className='text-slate-100'>
                    Email 
                    <Input
                        className='text-slate-100'
                        placeholder=' Email'
                        required
                        type='email'
                        value={email}
                        onChange={handleEmailChange} />
                </label>
            </div>
        </div>
    )

}

export { Footer }
