import { useState, useEffect } from 'react';
import { about } from '../../data/clientData';

function About() {
  const [aboutText, setAbout] = useState('Loading...');

  useEffect(() => {
    getAbout();
  });

  async function getAbout() {
    setAbout(await about());
  }

  return (
    <div className="screen">
      <h1 className=" flex flex-col justify-center p-5 items-center">
        Sobre nós  titulo
      </h1>
      <p className=" flex flex-col justify-center m-5 items-center">
        {aboutText}
      </p>
    </div>
  );
}

export { About };
