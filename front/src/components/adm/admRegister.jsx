import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import { Radio, RadioGroup, Stack, Input, Textarea, Box, Button } from '@chakra-ui/react'

import { useState } from 'react'
import '../../css/helper.css'

function AdmRegister() {
    const [create, setCreate] = useState(false)
    const [name, setName] = useState('1')
    const [image, setImage] = useState('1')
    const [description, setDescription] = useState('1')
    const [url, setUrl] = useState('1')
    const [active, setActive] = useState('1')
    const [explan, setExplan] = useState('1')

    function handleSubmit() {
        // chama api de envio 
        
    }

    return (<>
        <AdmToolbar />
        <Box className='screen flex justify-center'>
            <form className='flax flex-col m-2 p-10 ' onSubmit={handleSubmit}>
                <h1 className='flex justify-center w-full'> {create ? "Criando Produto" : "Atualizando Produto" }  </h1>

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
                    <RadioGroup onChange={setActive} value={active}>
                        <Stack direction='row'>
                            <Radio value='1'>Sim</Radio>
                            <Radio value='2'>Não</Radio>
                        </Stack>
                    </RadioGroup>

                    Imagem auto explicativa.
                    <RadioGroup onChange={setExplan} value={explan}>
                        <Stack direction='row'>
                            <Radio value='1'>Sim</Radio>
                            <Radio value='2'>Não</Radio>
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

