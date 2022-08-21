import '../../css/helper.css';

function Home() {
  return (
    <div className="screen home">
      <div className="flex justify-evenly z-10">
        <h2 className="pt-2 pl-2 z-10">Arte </h2>
        <a href="/sub" className="border rounded bg-slate-100 mt-2 px-2"> Inscreva-se !</a>
      </div>
      <div className="flex justify-center">
        <img className="top-2" alt="cerebro colorido" src="https://www3.unicentro.br/petfisica/wp-content/uploads/sites/54/2019/05/cerebro.jpg" />
      </div>

    </div>
  );
}

export { Home };
