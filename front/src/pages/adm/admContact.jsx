import { Toolbar } from '../../components/public/toolbar'
import { Footer } from '../../components/public/footer'
import { contact } from '../../data/publicData'
import { useEffect, useState } from 'react'


function admContact() {
    const [contactData, setContactData] = useState('Loading...')

    useEffect(() => {
        if (contactData === "Loading...") {
            getContactData()
        }
    })

    async function getContactData() {
        setContactData(await contact())
    }

    function printContactData() {
        console.log(contactData)
        if (typeof contactData === 'object') {
            return Object.values(contactData).map((v, i) => <p key={i} className=' flex flex-col justify-center m-5 items-center'>
                {v}</p>)
        }
    }

    return (
        <>
            <Toolbar />
            <div className="screen">
                <h1 className=' flex flex-col justify-center m-5 items-center'>
                    Informações para contado  </h1>
                {printContactData()}
            </div>
            <Footer />
        </>
    )
}

export { admContact }