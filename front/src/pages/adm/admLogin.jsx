import { Toolbar } from '../toolbar'
import '../../css/helper.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'

function AdmLogin() {

    const [name, setName] = useState('')
    const [passwor, setPasswor] = useState('')
    const [err, setErr] = useState(false)

    const handleNameChange = (e) => setName(e.target.value)
    const handlePassworChange = (e) => setPasswor(e.target.value)
    
    function submit() {
        if( name === '' || passwor === '') { setErr(true)}
        else{
            setErr(false)
            //chama o back e Login
            //redireciona para o home e passa a apresentar o texto ola nome digitado
        }
    }
    
    const erro = <p className = 'text-red-500'> Campo não preenchido </p>
    return (
        <>
            <Toolbar />
            <div className='flex justify-center'>
            <div className='login flex justify-center pt-2 '>
                <form className='form p-4 grid gap-2' >
                    <h2 className='self-center justify-center' >Login ADM</h2>
                    <label>
                         Use Name
                        <Input
                         placeholder=' Nome'
                            required
                            type='text'
                            value={name}
                            onChange={handleNameChange} />
                    </label>
                    <label>
                        Passwor
                        <Input
                            placeholder=' Passwor' 
                            required
                            type='Passwor'
                            value={passwor}
                            onChange={handlePassworChange} />
                         
                    </label>
                    { err? erro : '' }
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
        </>
    )
}

export { AdmLogin }