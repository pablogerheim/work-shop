import { Input, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { createEmail } from "../../data/clientData";
import '../../css/helper.css'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [err, setErr] = useState(false)

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)

    async function submit() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        if (name === '' || email === '') { setErr(true) }
        else {
            setErr(false)
            await createEmail({ name, email })
        }
    }

    const erro = <p className='text-red-500'> Campo não preenchido </p>
    return (
        <div className='screen flex justify-center'>
            <div className=' formWidth flex justify-center pt-2 '>
                <form className='form p-4 grid gap-2' >
                    <h2 className='self-center justify-center' >Se Inscreva! </h2>
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
    )
}

export { Login }