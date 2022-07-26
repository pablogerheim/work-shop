import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import { contact } from '../../data/publicData'
import { useEffect, useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import '../../css/helper.css'
import { contactUpdate } from '../../data/admData';
import { FcApproval } from "react-icons/fc";

function AdmContact() {
    const [contactData, setContactData] = useState(null)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [telephone, setTelephone] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [fedback, setFedback] = useState(false)

    useEffect(() => {
        if (contactData === null) {
            getContactData()
        }
        if (contactData) {
            setName(contactData.name)
            setEmail(contactData.email)
            setTelephone(contactData.telephone)
        }
    }, [contactData])

    async function getContactData() {
        console.log(await contact())
        setContactData(await contact())

    }

    function handleName(params) {
        setName(params)
        setDisabled(false)
    }

    function handleEmail(params) {
        setEmail(params)
        setDisabled(false)
    }

    function handleTelephone(params) {
        setTelephone(params)
        setDisabled(false)
    }


    async function handleSave() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        let x = await contactUpdate({ name, email, telephone })
        if (x.statusText) {
            setFedback(true)
            setTimeout(() => {
                setFedback(false)
            }, 2000);
        }
        setDisabled(true)
    }

    return (
        <>
            <AdmToolbar />
            <section className="screen p-5 flex align-middle justify-around ">
                <div className="w-4/5 aboutWidth flex flex-col align-middle">
                    <h1 className=' flex flex-col justify-center p-5 items-center'>
                        Informações para contato {fedback ? <p className='flex'><FcApproval className='h-7 w-7 mr-3' /> Atualizado com sucesso </p> : null}
                    </h1>
                    {
                        contactData !== null ?
                            <div>
                                Nome
                                <Textarea className='mb-5' value={name !== null ? name : "Loading..."} onChange={(e) => handleName(e.target.value)} />
                                Email
                                <Textarea className='mb-5' value={email !== null ? email : "Loading..."} onChange={(e) => handleEmail(e.target.value)} />
                                Telefone
                                <Textarea className='mb-5' value={telephone !== null ? telephone : "Loading..."} onChange={(e) => handleTelephone(e.target.value)} />
                            </div>
                            : <p className='flex flex-col justify-center m-5 items-center'>Loading...</p>
                    }
                    <Button colorScheme='blue' isDisabled={disabled} onClick={handleSave}> Salvar </Button>
                </div>
            </section>
            <AdmFooter />
        </>
    )
}

export { AdmContact }