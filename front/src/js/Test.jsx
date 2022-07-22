
import '../css/App.css';
import { v4 as uuidv4 } from 'uuid';
import { FaGalacticSenate } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from '@emotion/react'
import { Toolbar } from '../components/public/toolbar'

const cssSpiner = css`margin-top:10px `;

function Test() {

    return (
        <>
            <Toolbar />
            <div className="App">
                <div className=' flex flex-col justify-center m-5 items-center'>
                    <FaGalacticSenate className='h-10 w-10' /> Essa Etapa ainda deve ser decidida
                    <div calss='mt-3'>UUID: {uuidv4()} </div>
                    <ClipLoader css={cssSpiner} />
                </div>
            </div>
        </>)
}

export { Test }

