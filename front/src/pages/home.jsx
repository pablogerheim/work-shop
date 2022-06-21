import { Toolbar } from './toolbar'
import '../css/helper.css'

function Home() {

    return (
        <>
            <Toolbar />
            <div className='home' >
                <div className='flex justify-evenly z-10'>
                <h2 className='pt-2 pl-2 z-10'>Quer aprender arte? </h2>
                <a href='\sub' className='login-link mr-2 mt-1 z-10'> Nos conte quem é você </a>
                </div>
                <div className='flex justify-center'>
                <img className='top-2' alt= 'cerebro colorido' src='https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2019/05/cerebro.jpg'/>
                 </div>
                
            </div>
        </>
    )
}

export { Home }

//<a href='/adm/product'>adm</a>