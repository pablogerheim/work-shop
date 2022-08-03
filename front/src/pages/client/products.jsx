import { products } from '../../data/clientData'
import { useEffect, useState } from 'react'
import { v4 } from "uuid";
import '../../css/helper.css'

function Products() {
    const [productData, setProductData] = useState(null)

    useEffect(() => {
        if (productData === null) {
            getProductData()
        }
    })

    async function getProductData() {
        setProductData(await products())
    }

    function card({ name, image, description, url, active, autoexplan }) {
        if (!active) { return }
        if (autoexplan) {
            return (<div className='card' key={v4()}>
                <a href={url}>
                    <img src={image} alt={name} className='img ' />
                </a>
            </div>
            )
        }
        return (
            <div className='card' key={v4()}>
                <a href={url}>
                    <p className='absolute ml-4 mt-4 z-10'>{name}</p>
                    <p className='absolute ml-4 mt-10 z-10'>{description}</p>
                    <img src={image} alt={name} className='img opacity-50' />
                </a>
            </div>
        )
    }

    if (!productData) { return (<div>Loading...</div>) }
    return (
        <div className="screen product grid justify-center  ">
            {productData.map(product => card(product))}
        </div>
    )
}

export { Products }