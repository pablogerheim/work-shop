import '../../css/helper.css';
import { Input } from '@chakra-ui/react';
import { useState } from 'react';
import { createEmail } from '../../data/clientData';

function Footer() {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const [name, setNome] = useState('');
  const handleNomeChange = (e) => setNome(e.target.value);

  async function handleSubmit() {
    event.preventDefault();
    await createEmail({ name, email });
    setNome('');
    setEmail('');
  }

  return (
    <div className="footer bg-slate-800 flex justify-around h-20">
      <form onSubmit={() => handleSubmit()} className="flex align-middle">
        <button type="submit" className="submit text-slate-100 p-2 bg-slate-700 rounded m-2">
          Enviar
        </button>
        <div className="flex gap-3 mr-2 ">
          <label className="text-slate-100">
            Nome
            <Input
              className="text-slate-100"
              placeholder=" Nome"
              required
              type="text"
              value={name}
              onChange={handleNomeChange}
            />
          </label>
          <label className="text-slate-100">
            Email
            <Input
              className="text-slate-100"
              placeholder=" Email"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export { Footer };
