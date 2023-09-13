import { AiFillCloseCircle } from 'react-icons/ai';
import { RiStarSFill } from 'react-icons/ri'; // estrela cheia
import { RiStarSLine } from 'react-icons/ri'; // estrela Vazia
import "./Colaborador.css"

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function deletarColaborador() {
        aoDeletar(colaborador.id);
    }

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle
            size={25}
            className="deletar"
            onClick={deletarColaborador}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.jogo} />
        </div>
        <div className="rodape">
            <h4>{colaborador.jogo}</h4>
            <h5>{colaborador.genero}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <RiStarSFill {...propsFavorito} color='#ff0000' />
                    : <RiStarSLine {...propsFavorito} />}</div>
        </div>
    </div>
    )
}


export default Colaborador