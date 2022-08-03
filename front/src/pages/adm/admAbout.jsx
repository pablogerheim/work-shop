import { about } from '../../data/clientData'
import { useState, useEffect } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { aboutUpdate } from '../../data/admData';
import { FcApproval } from "react-icons/fc";
import '../../css/helper.css'

function AdmAbout() {
    const [aboutText, setAbout] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [fedback, setFedback] = useState(false)

    useEffect(() => {
        if (aboutText === null) {
            getAbout()
        }
    })

    async function getAbout() {
        setAbout(await about())
    }

    function handleText(newText) {
        if (aboutText !== newText) {
            setAbout(newText)
            setDisabled(false)
        }
    }

    async function handleSave() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        let res = await aboutUpdate(aboutText)
        if (res.statusText) {
            setFedback(true)
            setTimeout(() => {
                setFedback(false)
            }, 2000);
        }
        setDisabled(true)
    }

    return (
        <section className="screen p-5 flex align-middle justify-around ">
            <div className="w-4/5 aboutWidth flex flex-col align-middle">

                <h1 className=' flex flex-col justify-center p-5 items-center' >
                    Sobre nós  titulo {fedback ? <p className='flex'><FcApproval className='h-7 w-7 mr-3' /> Atualizado com sucesso </p> : null}
                </h1>
                <Textarea className=' mb-5 flex  '
                    value={aboutText ? aboutText : 'Loading...'}
                    onChange={(e) => handleText(e.target.value)}
                />
                <Button colorScheme='blue' isDisabled={disabled} onClick={handleSave}> Salvar </Button>
            </div>
        </section>
    )
}

export { AdmAbout }