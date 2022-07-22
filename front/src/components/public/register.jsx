import { Footer } from './components/footer'
import { Toolbar} from './components/toolbar'

function Register() {

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

export { Register }