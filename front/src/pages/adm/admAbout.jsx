import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'
import { about } from '../../data/publicData'
import { useState, useEffect } from 'react'


function admAbout() {
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
                <h1 className=' flex flex-col justify-center m-5 items-center' >
                    Sobre nós  titulo </h1>
                <p className=' flex flex-col justify-center m-5 items-center'>
                    {aboutText}</p>
            </div>
            <Footer />
        </>
    )
}

export { admAbout }