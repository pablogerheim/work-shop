import { Footer } from './components/footer'
import { Toolbar } from './components/toolbar'


function Contact() {

    return (
        <>
            <Toolbar />
            <div className="App">
                <p className=' flex flex-col justify-center m-5 items-center'>
                    Informações para contado  </p>
            </div>
            <Footer/>
        </>
    )
}

export { Contact }