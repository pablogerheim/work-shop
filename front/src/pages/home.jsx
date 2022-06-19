import { Toolbar } from './toolbar'
import '../css/helper.css'

function Home() {

    return (
        <>
            <Toolbar />
            <div className='' >
                <h2 className='pt-2 pl-2 absolute'>Quer aprender arte? </h2>
                <a href='\sub' className='login mr-2 mt-1'> Nos conte quem é você </a>
                <img alt= 'cerebro colorido' src='https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2019/05/cerebro.jpg'/>
                <a href='/adm/product'>adm</a>
            </div>
        </>
    )
}

export { Home }