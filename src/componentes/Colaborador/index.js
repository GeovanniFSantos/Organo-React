import { AiFillCloseCircle } from 'react-icons/ai';
import "./Colaborador.css"

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {

    function deletarColaborador() {
        aoDeletar(colaborador.id);
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
        </div>
    </div>
    )
}


export default Colaborador