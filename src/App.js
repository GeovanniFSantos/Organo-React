import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      jogo: 'Ação-Aventura',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      jogo: 'Ficção-Cientifica',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      jogo: 'Terror',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      jogo: 'RPG',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      jogo: 'Sobrevivência',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      jogo: 'Esportes',
      cor: '#FFF5D9'
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DEATH STRANDING',
      genero: 'Death Stranding é um jogo eletrônico de ação desenvolvido pela Kojima Productions.',
      imagem: 'https://meups.com.br/wp-content/uploads/2018/12/Death-Stranding.jpg',
      time: times[0].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'THE ELDER SCROLLS',
      genero: 'The Elder Scrolls é uma série de videojogos do gênero role-playing.',
      imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/364470/capsule_616x353.jpg?t=1661989129',
      time: times[0].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GOD OF WAR',
      genero: 'God of War é uma série de jogos eletrônicos de ação-aventura',
      imagem: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png',
      time: times[0].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'STAR WARS JEDI SURVIVOR',
      genero: 'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela Respawn Entertainmen.',
      imagem: 'https://www.pcguia.pt/wp-content/uploads/2023/05/star-wars-jedi.jpg',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DETROIT BECOME HUMAN',
      genero: 'Detroit: Become Human é um jogo eletrônico produzido pela Quantic Dream.',
      imagem: 'https://www.gamespot.com/a/uploads/scale_landscape/1197/11970954/3390532-detroitbecomehuman-review-promo-nologo.jpg',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'APEX LEGENDS',
      genero: 'Apex Legends é um jogo eletrônico free-to-play do gênero battle royale.',
      imagem: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1694114964',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'RESIDENT EVEL VILLAGE',
      genero: 'Biohazard: Village é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom.',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'THE LAST OF US',
      genero: 'The Last of Us é uma franquia de jogos eletrônicos de ação-aventura e survival horror.',
      imagem: 'https://sm.ign.com/ign_br/screenshot/default/the-last-of-us-serie-hbo_9uy5.png',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'OUTLAST',
      genero: 'O inferno é um experimento ao qual você não pode sobreviver em Outlast.',
      imagem: 'https://image.api.playstation.com/vulcan/coal-image-prod/cdn/molt/ALL/201905/MOLT2276_ZZ/rUhQGewc1LDM3PMCNg.png',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'CYBERPUNK 2077',
      genero: 'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido pela CD Projekt Red.',
      imagem: 'https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/b9ea2dc46d95cf9fa3f77209e27ae7a6488368f1-1920x1080.jpg',
      time: times[3].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'FALLOUT',
      genero: 'Fallout é uma série de jogos de RPG criada por Tim Cain, desenvolvida por vários estúdios.',
      imagem: 'https://m.media-amazon.com/images/I/913m4BOW-NL._AC_UF1000,1000_QL80_.jpg',
      time: times[3].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'HORIZON ZERO DAWN',
      genero: 'Horizon Zero Dawn é um jogo eletrônico de RPG de ação pós-apocalíptico em um mundo aberto.',
      imagem: 'https://cdn.iset.io/assets/56293/produtos/218/8403830295-3b18499214.jpg',
      time: times[3].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'RESIDENT EVEL 4',
      genero: 'Conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'THE LAST OF US PART 2',
      genero: 'Em uma civilização devastada, em que infectados e sobreviventes veteranos estão à solta.',
      imagem: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFrnKGXGTmcusfWp8W42ZosoTU0155pl2CKsMw3ZiYEY74uKNt',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'THE WALKING DEAD',
      genero: 'The Walking Dead é uma série de jogos eletrônicos de aventura gráfica.',
      imagem: 'https://image.api.playstation.com/cdn/UP2026/CUSA01019_00/xFrCV7HSs5qKhuHx8L0kggyG65XSHF8k.png',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'FIFA 23',
      genero: 'FIFA 23 é um jogo eletrônico de simulação de futebol desenvolvido pela Electronic Arts.',
      imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1702/3f51244d2b55a95d5621a96c3a76b7fd08ea994dccd6af28.png',
      time: times[5].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'UNDERGROUND 2',
      genero: 'Need For Speed é um jogo de corrida de 2004 desenvolvido pela EA.',
      imagem: 'https://meups.com.br/wp-content/uploads/2022/05/Need-For-Speed-Underground-2.jpg',
      time: times[5].jogo
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(colaboradorId) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== colaboradorId));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador])
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(idFavorito) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === idFavorito) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.jogo)}
        aoCadastrar={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <section className='time'>
        <h1>Meus Jogos</h1>
        {times.map((time, indice) => <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCor}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.jogo)}
          aoDeletar={deletarColaborador}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
