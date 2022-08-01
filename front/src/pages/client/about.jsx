import { Toolbar } from '../../components/client/toolbar'
import { Footer } from '../../components/client/footer'
import { about } from '../../data/clientData'
import { useState, useEffect } from 'react'


function About() {
    const [aboutText, setAbout] = useState('Loading...')

    useEffect(() => {
        getAbout()
    })

    async function getAbout() {
        setAbout(await about())
    }

    return (
        <>
            <Toolbar />
            <div className="screen">
                <h1 className=' flex flex-col justify-center p-5 items-center' >
                    Sobre nós  titulo </h1>
                <p className=' flex flex-col justify-center m-5 items-center'>
                    {aboutText}</p>
            </div>
            <Footer />
        </>
    )
}

export { About }