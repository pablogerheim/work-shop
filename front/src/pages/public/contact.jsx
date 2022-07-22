import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'


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