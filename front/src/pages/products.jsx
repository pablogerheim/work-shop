import { Toolbar } from './components/toolbar'
import '../css/helper.css'
import {v4}  from "uuid";
import { Footer } from './components/footer';

const arrProducts = [{
    id: 1,
    name: "lettering na pratica",
    img: 'https://camilapegado.com.br/wp-content/webp-express/webp-images/uploads/2022/04/Logo-lettering-sem-rebarba-amarela.png.webp',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: true
}, {
    id: 2,
    name: "Arte Classica",
    img: 'https://images.virgula.com.br/2016/03/Pinturas-cla%CC%81ssicase-animacoes-Michelangelo.jpg',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: false

}, {
    id: 3,
    name: "Semana da arte moderna",
    img: 'https://img.imageboss.me/revista-cdn/cdn/38773/5f3078e8c3b4905dcddc4928464f25d657b4b56f.jpg?1644958917',
    description: 'Texto descritivo do que se trata',
    url: 'http://localhost:3000/test',
    active: true,
    autoexplan: true
}]

function Products() {

    function card({ name, img, description, url, active, autoexplan }) {
        if (!active) { return }
        if (autoexplan) {
            return (<div className='card' key={v4()}>
                <a href={url}>
                    <img src={img} alt={name} className='img ' />
                </a>
            </div>
        )}
        return (
            <div className='card' key={v4()}>
                <a href={url}>
                    <p className='absolute ml-4 mt-4 z-10'>{name}</p>
                    <p className='absolute ml-4 mt-10 z-10'>{description}</p>
                    <img src={img} alt={name} className='img opacity-50' />
                </a>
            </div>
        )
    }

    return (
        <>
            <Toolbar />
            <div className="product grid justify-center ">
                {arrProducts.map(p => card(p)

                )}
            </div>
            <Footer/>
        </>
    )
}

export { Products }