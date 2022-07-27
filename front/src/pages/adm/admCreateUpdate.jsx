import { AdmRegister } from "../../components/adm/admRegister";
import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'

function AdmCreateUpdate() {

    return (<>
        <AdmToolbar />
        <AdmRegister />
        <AdmFooter />
    </>)
}


export { AdmCreateUpdate }