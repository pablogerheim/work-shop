import { AdmEditEmail } from "../../components/adm/admEditEmail";
import { Pagination } from "../../components/pagination";
import '../../css/helper.css'
import { AiOutlineForm, AiOutlineClose, AiFillWarning, AiOutlinePoweroff } from 'react-icons/ai';
import { getEmail, deleteEmail, activeEmail, getLastId } from "../../data/admData";
import { useEffect, useMemo, useState } from 'react'
import EventBus from '../../helper/eventBus';
import { Input } from '@chakra-ui/react'

function AdmEmails() {
    const [emailData, setEmailData] = useState(null)
    const [emailsOn, setEmailsOn] = useState()
    const [emailSelected, setEmailSelected] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [lastId, setLastId] = useState(0)

    useEffect(() => {

        if (emailData === null || refresh) {
            getProductData()
            getTotalEmails()
            setRefresh(false)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emailData, refresh])

    useMemo(() => {
        if (emailData) {
            if (emailData.length <= 12) { setEmailsOn(emailData) } else {
                let onPageEmails = []
                emailData.forEach((e, i) => {
                    if ((i + 1) <= page * 12 && (i + 1) >= (page * 12) - 11) {
                        onPageEmails.push(e)
                    }
                });
                setEmailsOn(onPageEmails)
            }
        }
    }, [emailData, page])

    async function getTotalEmails() {
        setLastId(await getLastId())
    }

    async function getProductData() {
        console.log(await getEmail())
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
            let filtredEmails = emailData.filter(obj => obj.name.toLowerCase().includes(wanted.toLowerCase()))
            setEmailData(filtredEmails)
        }
    }

    function email(selectedEmail, { emailId, name, active, email }) {
        if (emailSelected === emailId) { return <AdmEditEmail setRefresh={setRefresh} /> }
        return (
            <div key={emailId} className="grid grid-cols-3 gap-4">
                <p className=' flex justify-around'>{name}</p>
                <p className=' flex justify-around'>{email}</p>
                <div className='flex gap-1 justify-evenly'>
                    <button
                        className='bg-orange-400 shadowClass my-2'
                        title="update"
                        type="button"
                        onClick={() => handleUpdate(selectedEmail)} 
                        >
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
    if (!emailData) { return <div className='screen' > Loading....</div> }
    return (<>
        <section className='screen'>
            <div className='p-4'>
                <Input
                    placeholder='Procurar por nome'
                    value={search}
                    onChange={(e) => hendleSerach(e.target.value)}
                />
                {lastId > 0 ? <div className='mt-1'>
                    <p>Total de emails já cadastrados {lastId}</p>
                    <p>Total de emails ativos {emailData.length}</p>
                    <p>Total de emails descadastrados {lastId - emailData.length}</p> </div> : <p className='mt-1'> Sem informações</p>}

            </div>
            <div className="flex flex-col mt-1">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <p className=' flex justify-around'>Nome</p>
                    <p className=' flex justify-around'>Email</p>
                    <p className=' flex justify-around'>Opções</p>
                </div>
                {emailsOn ? emailsOn.map(selectedEmail => email(selectedEmail, selectedEmail)) : "Loading...."}
            </div>
        </section>
        <Pagination dataLength={emailData.length} page={page} onSelectpage={setPage} />
    </>
    )
}

export { AdmEmails }

