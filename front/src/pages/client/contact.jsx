import { contact } from '../../data/clientData'
import { useEffect, useState } from 'react'

function Contact() {
    const [contactData, setContactData] = useState(null)

    useEffect(() => {
        if (contactData === null) {
            getContactData()
        }
    })

    async function getContactData() {
        setContactData(await contact())
    }

    return (
        <div className="screen">
            <h1 className=' flex flex-col justify-center p-5 items-center'>
                Informações para contato  </h1>
            {contactData ?
                <div>
                    <p className=' flex flex-col justify-center m-5 items-center'> {contactData.name}</p>
                    <p className=' flex flex-col justify-center m-5 items-center'> {contactData.email}</p>
                    <p className=' flex flex-col justify-center m-5 items-center'>  {contactData.telephone}</p>
                </div>
                : "Loading...."}
        </div>
    )
}

export { Contact }