import { Toolbar} from './toolbar'

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
        </>
    )
}

export { About }