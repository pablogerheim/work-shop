import '../../css/helper.css'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'

function AdmFooter() {
    const [email, setEmail] = useState('')
    const handleEmailChange = (e) => setEmail(e.target.value)
    
    function handleSubmit() {
        // enviar email para o banco de dados
        console.log(email)
    }

    return (
        <div className="footer bg-slate-800 flex justify-between h-20">
            <button onClick={()=> handleSubmit()} className='text-slate-100 p-4'>
                Enviar
            </button>
            <div className='flex gap-3 mr-2 '>
            <label className='text-slate-100'>
            Nos envie seu Email
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

export { AdmFooter }
 