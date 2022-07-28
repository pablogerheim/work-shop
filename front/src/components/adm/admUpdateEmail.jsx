
import { Input, Box, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import '../../css/helper.css'
import { updateEmail} from '../../data/admData';
import EventBus from '../../helper/EventEmitter';


function AdmUpdateEmail({
    setRefresh
}) {
    const [emailId, setEmailId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        EventBus.on('setUpdateEmail', (selectedEmail) => { 
        setEmailId(selectedEmail.emailId)
        setName(selectedEmail.name)
        setEmail(selectedEmail.email)
    })
})

useEffect(() => {
    EventBus.remove('setUpdateCard')
}, [emailId])


    async function handleSubmit() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
       await updateEmail({emailId, name, email })
       setRefresh(true)
    }

    return (
        <>
            <Box className=' flex justify-center'>
                <form className='flax flex-col m-2 p-10 ' onSubmit={handleSubmit}>

                    <Box className='flex flex-col align-center justify-center gap-2'>
                        Nome
                        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome' />

                        Email
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

                        <Button type='submit' className='mt-4' colorScheme="orange">Atualizar</Button>

                    </Box>
                </form>
            </Box>
        </>
    )
}

export { AdmUpdateEmail }

