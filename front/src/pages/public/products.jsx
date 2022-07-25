import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'
import '../../css/helper.css'
import {v4}  from "uuid";
import { products } from '../../data/publicData'
import { useEffect, useState } from 'react'

const arrProducts = [{
    id: 1,
    name: "lettering na pratica",
    image: 'https://camilapegado.com.br/wp-content/webp-express/webp-images/uploads/2022/04/Logo-lettering-sem-rebarba-amarela.png.webp',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: true
}, {
    id: 2,
    name: "Arte Classica",
    image: 'https://images.virgula.com.br/2016/03/Pinturas-cla%CC%81ssicase-animacoes-Michelangelo.jpg',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: false

}, {
    id: 3,
    name: "Semana da arte moderna",
    image: 'https://img.imageboss.me/revista-cdn/cdn/38773/5f3078e8c3b4905dcddc4928464f25d657b4b56f.jpg?1644958917',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: true
}]

function Products() {
    const [productData, setProductData] = useState('Loading...')

    useEffect(() => {
        if (productData === "Loading...") {
            getProductData()
        }
    })

    async function getProductData() {
        console.log(await products())
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
        )}
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

    return (
        <>
            <Toolbar />
            <div className="screen product grid justify-center  ">
                {arrProducts.map(p => card(p))}
            </div>
            <Footer/>
        </>
    )
}

export { Products }