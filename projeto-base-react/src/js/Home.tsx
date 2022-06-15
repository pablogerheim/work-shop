
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';
import { FaGalacticSenate } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from '@emotion/react'

const cssSpiner = css`margin-top:10px `;

function Home() {

    return (
        <div className="App">
            <div className=' flex flex-col justify-center m-5 items-center'>
                <FaGalacticSenate className='h-10 w-10' /> Projeto base react
                <div className='mt-3'>UUID: {uuidv4()} </div>
                <ClipLoader css={cssSpiner}/>
            </div>
        </div>
    )
}

export { Home }

