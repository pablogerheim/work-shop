import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import '../../css/helper.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

function AdmLogin() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)

    const handleNameChange = (e) => setName(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    function submit() {
        if (name === '' || password === '') { setErr(true) }
        else {
            setErr(false)
            //chama o back e Login
            //redireciona para o home e passa a apresentar o texto ola nome digitado
        }
    }

    const erro = <p className='text-red-500'> Campo não preenchido </p>
    return (
        <>
            <AdmToolbar />
            <div className='screen flex justify-center'>
                <div className='login flex justify-center pt-2 '>
                    <form className='form formWidth p-4 grid gap-2' >
                        <h2 className='self-center justify-center' >Login ADM</h2>
                        <label>
                            Nome
                            <Input
                                placeholder='Nome'
                                required
                                type='text'
                                value={name}
                                onChange={handleNameChange} />
                        </label>
                        <label>
                            Senha
                            <Input
                                placeholder='Senha'
                                required
                                type='Password'
                                value={password}
                                onChange={handlePasswordChange} />

                        </label>
                        {err ? erro : ''}
                        <Button
                            loadingText='Submitting'
                            colorScheme='teal'
                            variant='outline'
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <AdmFooter />
        </>
    )
}

export { AdmLogin }