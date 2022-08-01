
import { Radio, RadioGroup, Stack, Input, Textarea, Box, Button } from '@chakra-ui/react'
import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import { useState, useEffect } from 'react'
import '../../css/helper.css'
import { productUpdate } from '../../data/admData';
import { products } from '../../data/clientData';
import { useNavigate } from "react-router-dom";

function AdmEdit({
    id
}) {
    const navigate = useNavigate()
    const [productId, setProductId] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [togleActive, setTogleActive] = useState('3')
    const [togleautoexplan, setTogleAutoexplan ] = useState('3')

    useEffect(() => {
        if (togleActive === '3') {
            handleSetProps()
        }
    })

    async function handleSetProps() {
        const props = await products(id)

        setProductId(props.productId)
        setName(props.name)
        setImage(props.image)
        setDescription(props.description)
        setUrl(props.url)
        setTogleActive(props.active ? '1' : '2')
        setTogleAutoexplan(props.autoexplan ? '1' : '2')
    }

    async function handleSubmit() {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault()
        const active = togleActive === '1' ? true : false
        const autoexplan = togleautoexplan === '1' ? true : false
        await productUpdate({ name, image, description, url, active, autoexplan, productId })
        navigate('/adm/products')
    }



    return (
        <>
            <AdmToolbar />
            <Box className='screen flex justify-center'>
                <form className='flax flex-col m-2 p-10 ' onSubmit={handleSubmit}>
                    <h1 className='flex justify-center w-full'> Atualizando Produto  </h1>

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
                                <Radio value='1'>Sim</Radio>
                                <Radio value='2'>Não</Radio>
                            </Stack>
                        </RadioGroup>

                        Imagem auto explicativa.
                        <RadioGroup onChange={ setTogleAutoexplan} value={togleautoexplan}>
                            <Stack direction='row'>
                                <Radio value='1'>Sim</Radio>
                                <Radio value='2'>Não</Radio>
                            </Stack>
                        </RadioGroup>

                        <Button type='submit' className='mt-4' colorScheme='orange'> Atualizar  </Button>

                    </Box>
                </form>
            </Box>
            <AdmFooter />
        </>
    )
}

export { AdmEdit }

