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
      jogo: 'JULIANA AMOASEI',
      genero: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GUILHERME LIMA',
      genero: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
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
      jogo: 'GEOVANNI F SANTOS',
      genero: 'Desenvolvedor Full Stack Junior',
      imagem: 'https://github.com/GeovanniFSantos.png',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GUILHERME LIMA',
      genero: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'PAULO SILVEIRA',
      genero: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'JULIANA AMOASEI',
      genero: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GUILHERME LIMA',
      genero: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'PAULO SILVEIRA',
      genero: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'JULIANA AMOASEI',
      genero: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GUILHERME LIMA',
      genero: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
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
      jogo: 'JULIANA AMOASEI',
      genero: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'THE LAST OF US',
      genero: 'Em uma civilização devastada, em que infectados e sobreviventes veteranos estão à solta.',
      imagem: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFrnKGXGTmcusfWp8W42ZosoTU0155pl2CKsMw3ZiYEY74uKNt',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'PAULO SILVEIRA',
      genero: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'JULIANA AMOASEI',
      genero: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'DANIEL ARTINE',
      genero: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'GUILHERME LIMA',
      genero: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].jogo
    },
    {
      id: uuidv4(),
      favorito: false,
      jogo: 'PAULO SILVEIRA',
      genero: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
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
