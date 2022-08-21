import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdm } from '../../data/admData';
import '../../css/helper.css';

import { useAuth } from '../../helper/auth';

function AdmLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [, { login }] = useAuth();

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  async function submit() {
    const userInfo = await loginAdm({ name, password });
    if (!userInfo.status === 200) { setErr(true); } else {
      setErr(false);
      login(userInfo.data.token);
      navigate('/adm/home');
    }
  }

  const erro = <p className="text-red-500"> Campo não preenchido </p>;
  return (
    <div className="screen flex justify-center">
      <div className="login flex justify-center pt-2 ">
        <form className="form formWidth p-4 grid gap-2">
          <h2 className="self-center justify-center">Login ADM</h2>
          <label>
            Nome
            <Input
              placeholder="Nome"
              required
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Senha
            <Input
              placeholder="Senha"
              required
              type="Password"
              value={password}
              onChange={handlePasswordChange}
            />

          </label>
          {err ? erro : ''}
          <Button
            loadingText="Submitting"
            colorScheme="teal"
            variant="outline"
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export { AdmLogin };
