import img from '../img/logo.png'

function Toolbar() {

    return (
        <div className="bg-slate-100 flex justify-between ">
            <img src={img} alt='Aprendendo Arte' height='60px' width='80px' className='m-2 '/>
            <div className='flex gap-3 mr-2 '>
                <a href='/home' className='flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2' > Home </a>
                <a href='/about' className='flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2'> Sobre nós </a>
                <a href='/contact' className='flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2'> Contado </a>
                <a href='/products' className='flex self-center text-xs text-gray-600 pr-2'> Produtos </a>
            </div>
        </div>
    )
}

export { Toolbar }
