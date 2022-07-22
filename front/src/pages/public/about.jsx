import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'

function About() {

    return (
        <>
        <Toolbar/>
        <div className="App">
            <h1 className=' flex flex-col justify-center m-5 items-center' >
                Sobre nós  titulo </h1>
            <p className=' flex flex-col justify-center m-5 items-center'>
                Sobre nós texto </p>
        </div>
        <Footer/>
        </>
    )
}

export { About }