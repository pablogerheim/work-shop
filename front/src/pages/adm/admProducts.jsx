import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import '../../css/helper.css'
import { AdmCards } from "../../components/adm/admCards";
import { AdmRegister } from "../../components/adm/admRegister";
import { useState, useEffect } from 'react'
import EventBus from '../../helper/EventEmitter';


function AdmProducts() {
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        EventBus.on('update', (obj) => { console.log("onpg1", obj); setUpdate(true)  })

    })

    useEffect(() => {

        EventBus.remove('update')

    },[update])

    return (
        <>
            <AdmToolbar />
            {update ? <AdmRegister update={update} setUpdate={setUpdate} /> : <AdmCards />}
            <AdmFooter />
        </>
    )
}

export { AdmProducts }

