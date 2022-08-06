import { useState, useEffect } from 'react'
import { v4 } from "uuid"
import setaR from "../img/setaR.png"
import setaL from "../img/setaL.png"

function Pagination({
    dataLength = 0,
    page = 1,
    onSelectpage = null
}) {
    const [numberPages, setNumberPages] = useState([])
    useEffect(() => {
        if (dataLength > 0) {
            let calcPage = (dataLength / 12).toFixed(1)
            let arrNumberPages = []
            for (let i = 0; i < calcPage; i++) { arrNumberPages.push(i + 1) }
            setNumberPages(arrNumberPages)
        }
    }, [dataLength])

    function activeStyle(numberpage) {
        let styleA = numberpage === page ? "border px-2 mb-2 rounded bg-blue-400" : 'border px-2 mb-2 rounded '
        return styleA
    }
    function controlPage(numberpage) {
        onSelectpage(numberpage)
    }

    function typeOfPagination() {
        if (dataLength <= 12) { return <div> <button className="border px-2 mb-2 rounded bg-blue-400">1</button></div> }
        else if (numberPages.length <= 8) {
            return (<>
                {numberPages.map(numeroPagina => {
                    return (<button type='button' onClick={evt => controlPage(numeroPagina)} key={v4()} className={activeStyle(numeroPagina)}>{numeroPagina}</button>)
                })}
            </>)
        } else if (page <= 3 || page >= numberPages.length - 2) {
            return (<>
                <button type='button' onClick={evt => controlPage(numberPages[0])} className={activeStyle(numberPages[0])}>{numberPages[0]}</button>
                <button type='button' onClick={evt => controlPage(numberPages[1])} className={activeStyle(numberPages[1])}>{numberPages[1]}</button>
                <button type='button' onClick={evt => controlPage(numberPages[2])} className={activeStyle(numberPages[2])}>{numberPages[2]}</button>
                <button type='button' onClick={evt => controlPage(numberPages[3])} className={activeStyle(numberPages[3])}>{numberPages[3]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlPage(numberPages.length - 3)} className={activeStyle(numberPages.length - 3)}>{numberPages.length - 3}</button>
                <button type='button' onClick={evt => controlPage(numberPages.length - 2)} className={activeStyle(numberPages.length - 2)}>{numberPages.length - 2}</button>
                <button type='button' onClick={evt => controlPage(numberPages.length - 1)} className={activeStyle(numberPages.length - 1)}>{numberPages.length - 1}</button>
                <button type='button' onClick={evt => controlPage(numberPages.length)} className={activeStyle(numberPages.length)}>{numberPages.length}</button>
            </>)
        } else {
            return (<>
                <button type='button' onClick={evt => controlPage(numberPages[0])} className='border px-2 mb-2 rounded'>{numberPages[0]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlPage(numberPages[page - 2])} className='border px-2 mb-2 rounded'>{numberPages[page - 2]}</button>
                <button className="border px-2 mb-2 rounded bg-blue-400">{page}</button>
                <button type='button' onClick={evt => controlPage(numberPages[page])} className='border px-2 mb-2 rounded'>{numberPages[page]}</button>
                <span className='paginas__cada__span'>...</span >
                <button type='button' onClick={evt => controlPage(numberPages.length)} className='border px-2 mb-2 rounded'>{numberPages.length}</button>
            </>)
        }
    }
    return (
        <div className="flex justify-around">
            <button disabled={page === numberPages[0]}
                onClick={evt => controlPage(page - 1)}
            >
                <img src={setaL} alt='back page' className='h-4 w-4' />
            </button>
            {typeOfPagination()}
            <button disabled={page === numberPages.length}
                onClick={evt => controlPage(page + 1)}
            >
                <img src={setaR} alt='back page' className='h-4 w-4' />
            </button>
        </div>)

}

export { Pagination }