import { AdmToolbar } from '../../components/adm/admToolbar'
import { AdmFooter } from '../../components/adm/admFooter'
import { AdmUpdateEmail } from "../../components/adm/admUpdateEmail";
import { Paginas } from "../../components/Paginas";
import '../../css/helper.css'
import { AiOutlineForm, AiOutlineClose, AiFillWarning, AiOutlinePoweroff } from 'react-icons/ai';
import { getEmail, deleteEmail, activeEmail } from "../../data/admData";
import { useEffect, useState } from 'react'
import EventBus from '../../helper/EventEmitter';
import { Input } from '@chakra-ui/react'

function AdmEmails() {
    const [emailData, setEmailData] = useState(null)
    const [emailsOn, setEmailsOn] = useState()
    const [emailSelected, setEmailSelected] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {

        if (emailData === null || refresh) {
            getProductData()
            setRefresh(false)
        }

        if (emailData) {
            emailsOnPage()
        }

    }, [emailData, refresh, page])

    async function getProductData() {
        setEmailData(await getEmail())
    }

    async function handleUpdate(selectedEmail) {
        setEmailSelected(selectedEmail.emailId)
        setTimeout(() => {
            EventBus.dispatch('setUpdateEmail', selectedEmail)
        }, 0);
    }

    async function handleDelet(id) {
        await deleteEmail(id)
        setRefresh(true)
    }

    async function togleActive(emailId, oldActive) {
        let active = !oldActive
        await activeEmail(emailId, active)
        setRefresh(true)
    }

    function hendleSerach(wanted) {
        setSearch(wanted)
        if (wanted === '') {
            setRefresh(true)
            setPage(1)
        }
        if (emailData) {
            let x = emailData.filter(e => e.name.toLowerCase().includes(wanted.toLowerCase()))
            setEmailData(x)
            console.log(x)
        }
    }

    function emailsOnPage() {
        if(emailData.length <= 12){setEmailsOn(emailData)} else{
            let onPageEmails = []
            emailData.forEach((e, i) => { 
                if ((i+1) <= page * 12 && (i+1) >= (page * 12) - 11) {
                    onPageEmails.push(e)
                }
            });
            setEmailsOn(onPageEmails)
        }
    }


    function email(selectedEmail, { emailId, name, active, email }) {
        if (emailSelected === emailId) { return <AdmUpdateEmail setRefresh={setRefresh} /> }
        return (
            <div key={emailId} className="grid grid-cols-3 gap-4">
                <p className=' flex justify-around'>{name}</p>
                <p className=' flex justify-around'>{email}</p>
                <div className='flex gap-1 justify-evenly'>
                    <button
                        className='bg-orange-400 shadowClass my-2'
                        title="update"
                        type="button"
                        onClick={() => handleUpdate(selectedEmail)} >
                        <AiOutlineForm className="h-4 w-4" />
                    </button>
                    <button
                        className='bg-red-400 shadowClass my-2'
                        title="delete"
                        type="button"
                        onClick={() => handleDelet(emailId)}>
                        <AiOutlineClose className="h-4 w-4" />
                    </button>
                    <button
                        className={`${active ? "bg-green-400" : "bg-indigo-400"} shadowClass  my-2`}
                        type="button"
                        onClick={() => togleActive(emailId, active)}>
                        {active ? <AiOutlinePoweroff className="h-4 w-4" /> : <AiFillWarning className="h-4 w-4" />}
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <AdmToolbar />
            <section className='screen'>
                <div className='p-4'>
                    <Input
                        placeholder='Procurar por nome'
                        value={search}
                        onChange={(e) => hendleSerach(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mt-10">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <p className=' flex justify-around'>Nome</p>
                        <p className=' flex justify-around'>Email</p>
                        <p className=' flex justify-around'>Opções</p>
                    </div>
                    {emailsOn ? emailsOn.map(selectedEmail => email(selectedEmail, selectedEmail)) : "Loading...."}
                </div>
            </section>
            {
                emailData ?
                    <Paginas dataLength={emailData.length} pagina={page} onSelectpage={setPage} /> :
                    "Loading..."
            }
            <AdmFooter />
        </>
    )
}

export { AdmEmails }

