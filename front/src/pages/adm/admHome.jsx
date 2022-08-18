import { useNavigate } from "react-router";
import { useAuth } from '../../helper/auth'
import '../../css/helper.css'

function AdmHome() {
    const navegation = useNavigate()
    const [, { logout }] = useAuth()

    async function handleLogout() {
        logout()
        navegation("/")
    }

    return (
        <div className='screen home' >
            <div className='flex justify-evenly z-10'>
                <h2 className='pt-2 pl-2 z-10'>ADM home  </h2>
                <button onClick={() => handleLogout()} className='border rounded bg-slate-100 mt-2 px-2'> Deslogar !</button>
            </div>
            <div className='flex justify-center'>
                <img className='top-2' alt='cerebro colorido' src='https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2019/05/cerebro.jpg' />
            </div>
        </div>
    )
}

export { AdmHome }
