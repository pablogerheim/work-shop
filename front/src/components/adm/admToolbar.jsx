import { useState } from 'react';
import img from '../../img/logo.png';

const imgMenu = 'https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png';

function AdmToolbar() {
  const [menu, setMenu] = useState(false);

  function togleStateMenu(bloenaProps) {
    setMenu(bloenaProps);
  }

  function handleMenu() {
    if (menu) {
      return (
        <div className="flex gap-3 mr-2 h-20">
          <button type='button'>
            <img src={imgMenu} alt="menu img" className="h-4 w-4" onClick={() => togleStateMenu(false)} />
          </button>
          <a href="/adm/home" className="flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2"> Home </a>
          <a href="/adm/about" className="flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2"> Sobre </a>
          <a href="/adm/contact" className="flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2"> Contado </a>
          <a href="/adm/products" className="flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2"> Produtos </a>
          <a href="/adm/emails" className="flex self-center text-xs text-gray-600 border-r-2 border-solid border-gray-400 pr-2"> Emails </a>
          <a href="/adm/create" className="flex self-center text-xs text-gray-600 pr-2"> Novo Produto</a>
        </div>
      );
    }

    return (
      <div className="flex gap-3 mr-2 ">
        <button onClick={() => togleStateMenu(true)}>
          <img src={imgMenu} alt="menu img" className="h-10 w-10" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 flex justify-between ">
      <a href="/adm/login">
        <img src={img} alt="Aprendendo Arte" height="60px" width="80px" className="m-2 " />
      </a>
      <div className="h-auto w-auto flex items-center">
        {handleMenu()}
      </div>
    </div>
  );
}

export { AdmToolbar };
