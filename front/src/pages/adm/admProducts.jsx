import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import '../../css/helper.css'
import { Button } from '@chakra-ui/react'
import { AiOutlineForm, AiOutlineClose, AiFillWarning , AiOutlinePoweroff } from 'react-icons/ai';
import { products } from '../../data/publicData'
import { useEffect, useState } from 'react'
import { productActiv, productDelete } from '../../data/admData';
import { useNavigate } from "react-router-dom";
import EventBus from '../../helper/EventEmitter';


function AdmProducts() {
    let navigate = useNavigate();
    const [productData, setProductData] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        if (productData === null || refresh) {
            getProductData()
            setRefresh(false)
        }
    },[productData, refresh])

    async function getProductData() {
        setProductData(await products())
    }

    async function handleUpdate(obj) {
        navigate('/adm/createUpdade')
        setTimeout(() => {
            EventBus.dispatch('update', obj)
        }, 0);
    }

    async function handleDelet(id) {
       await productDelete(id)
       setRefresh(true)
    }

    async function togleActive(id, active) {
        active = !active
        await productActiv({id, active })
        setRefresh(true)
    }

    function card(p,{ productId, name, image, description, active, autoexplan }) {
        
        if (autoexplan) {
            return (
                <div className='card' key={productId}>
                    <div className=" flex p-2 justify-end gap-2 absolute ml-36 z-10">
                        <button className='bg-orange-400 shadowClass' title="update" type="button" onClick={() => handleUpdate(p)} ><AiOutlineForm className="h-7 w-7 " /></button>
                        <button className='bg-red-400 shadowClass' title="delete" type="button" onClick={() => handleDelet(productId)}><AiOutlineClose className="h-7 w-7" /></button>
                        <button className={`${active? "bg-indigo-400" : "bg-green-400"} shadowClass`} type="button" onClick={() => togleActive(productId, active)}>{active ? <AiFillWarning className="h-7 w-7" /> : <AiOutlinePoweroff className="h-7 w-7" />}</button>
                    </div>
                    <img src={image} alt={name} className='img ' />
                </div>
            )
        }
        return (
            <div className='card' key={productId}>
                <div className="flex p-2 justify-end gap-2 absolute ml-36 z-10">
                    <button className='bg-orange-400  shadowClass' title="update" type="button" onClick={() => handleUpdate(p)} ><AiOutlineForm className="h-7 w-7" /></button>
                    <button className='bg-red-400 shadowClass' title="delete" type="button" onClick={() => handleDelet(productId)}><AiOutlineClose className="h-7 w-7" /></button>
                    <button className={`${active? "bg-indigo-400" : "bg-green-400"} shadowClass`}  type="button" onClick={() => togleActive(productId)}>{active ? <AiFillWarning className="h-7 w-7" /> : <AiOutlinePoweroff className="h-7 w-7" />}</button>
                </div>
                <p className='absolute ml-4 mt-10 z-10'>{name}</p>
                <p className='absolute ml-4 mt-16 z-10'>{description}</p>
                <img src={image} alt={name} className='img opacity-50' />
            </div>
        )
    }

    return (
        <>
            <AdmToolbar />
            <section className='screen'>
                <div className='flex justify-end'>
                    <a href='/adm/createUpdade'> <Button colorScheme='blue' className='m-2'> Cadastrar novo produto</Button>
                    </a>
                </div>
                <div className="product grid justify-center ">
                    {productData? productData.map(p => card(p,p) ) : "Loading...."}
                </div>
            </section>
            <AdmFooter />
        </>
    )
}

export { AdmProducts }

