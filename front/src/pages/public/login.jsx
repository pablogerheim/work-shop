import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import '../../css/helper.css'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState(false)

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    
    function submit() {
        if( name === '' || email === '') { setErr(true)}
        else{
            setErr(false)
            //chama o back e cadastra o nome email
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
                    <h2 className='self-center justify-center' >Será um enorme prazer te conhecer!</h2>
                    <label>
                         Nome
                        <Input
                         placeholder=' Nome'
                            required
                            type='text'
                            value={name}
                            onChange={handleNameChange} />
                    </label>
                    <label>
                        Email
                        <Input
                         placeholder=' Email' 
                            required
                            type='email'
                            value={email}
                            onChange={handleEmailChange} />
                         
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
            <Footer/>
        </>
    )
}

export { Login }