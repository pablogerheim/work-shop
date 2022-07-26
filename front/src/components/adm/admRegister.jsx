import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import { Radio, RadioGroup, Stack, Input, Textarea, Box, Button } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import '../../css/helper.css'
import { productCreate } from '../../data/admData';
import EventEmitter from '../../helper/EventEmitter';

function AdmRegister() {
    const [create, setCreate] = useState(true)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [togleActive, setTogleActive] = useState("1")
    const [togleautoexplan, setTogleAutoexplan] = useState("1")


    useEffect(() => {
        // async function helperUpdate() {
        //     console.log("emitter")
        // }
        const listner = EventEmitter.addListener('update', () => {  console.log("emitter"); setTogleActive(false)})
        return () => {
            listner.remove()
        }
    })

    async function handleSubmit() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        const active = togleActive === "1" ? true : false
        const autoexplan = togleautoexplan === "1" ? true : false
        await productCreate({ name, image, description, url, active, autoexplan })

        clearFilds()
        setCreate(true)
    }

    function clearFilds() {
        setName('')
        setImage('')
        setDescription('')
        setUrl('')
        setTogleActive('1')
        setTogleAutoexplan('1')
    }

    return (<>
        <AdmToolbar />
        <Box className='screen flex justify-center'>
            <form className='flax flex-col m-2 p-10 ' onSubmit={handleSubmit}>
                <h1 className='flex justify-center w-full'> {create ? "Criando Produto" : "Atualizando Produto"}  </h1>

                <Box className='flex flex-col align-center justify-center gap-2 admRegister '>
                    Nome
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Nome do produto' />

                    Imagen
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder='Link da Imagen' />

                    Descrição
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descrição do produto' />

                    Url
                    <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Url de redirecionamento' />

                    Produto pronto para exibição.
                    <RadioGroup onChange={setTogleActive} value={togleActive}>
                        <Stack direction='row'>
                            <Radio value="1">Sim</Radio>
                            <Radio value="2">Não</Radio>
                        </Stack>
                    </RadioGroup>

                    Imagem auto explicativa.
                    <RadioGroup onChange={setTogleAutoexplan} value={togleautoexplan}>
                        <Stack direction='row'>
                            <Radio value="1">Sim</Radio>
                            <Radio value="2">Não</Radio>
                        </Stack>
                    </RadioGroup>

                    <Button type='submit' className='mt-4' colorScheme={create ? "blue" : "orange"}>{create ? "Criar" : "Atualizar"}</Button>

                </Box>
            </form>
        </Box>
        <AdmFooter />
    </>
    )
}

export { AdmRegister }

