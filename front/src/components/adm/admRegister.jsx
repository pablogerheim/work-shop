
import { Radio, RadioGroup, Stack, Input, Textarea, Box, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import '../../css/helper.css'
import { productCreate , productUpdate} from '../../data/admData';
import EventBus from '../../helper/EventEmitter';

function AdmRegister() {
    const [updateMode, setUpdateMode] = useState(false)
    const [productId, setProductId] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [togleActive, setTogleActive] = useState("1")
    const [togleautoexplan, setTogleAutoexplan] = useState("1")

    useEffect(() => {
        EventBus.on('setUpdateCard', (selectedCard) => { console.log("onpg2", selectedCard)
        setUpdateMode(true)
        setProductId(selectedCard.productId)
        setName(selectedCard.name)
        setImage(selectedCard.image)
        setDescription(selectedCard.description)
        setUrl(selectedCard.url)
        setTogleActive(selectedCard.active? "1": "2")
        setTogleAutoexplan(selectedCard.autoexplan? "1" : "2") })
    })

    useEffect(() => {
        EventBus.remove('setUpdateCard')
    }, [togleautoexplan])

    async function handleSubmit() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        const active = togleActive === "1" ? true : false
        const autoexplan = togleautoexplan === "1" ? true : false
        if (!updateMode) {
        await productCreate({ name, image, description, url, active, autoexplan })
        }
        if (updateMode) {
            await productUpdate({ name, image, description, url, active, autoexplan, productId  })
            setUpdateMode(false)
        }
        clearFilds()
    }

    function clearFilds() {
        setName('')
        setImage('')
        setDescription('')
        setUrl('')
        setTogleActive('1')
        setTogleAutoexplan('1')
    }

    return (
        <>
            <Box className='screen flex justify-center'>
                <form className='flax flex-col m-2 p-10 ' onSubmit={handleSubmit}>
                    <h1 className='flex justify-center w-full'> {updateMode ? "Atualizando Produto" : "Criando Produto"}  </h1>

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

                        <Button type='submit' className='mt-4' colorScheme={updateMode ? "orange" : "blue"}>{updateMode ? "Atualizar" : "Criar"}</Button>

                    </Box>
                </form>
            </Box>
        </>
    )
}

export { AdmRegister }

