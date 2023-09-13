import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [jogo, setJogo] = useState('');
    const [genero, setGenero] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeGenero, setNomeGenero] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            jogo,
            genero,
            imagem,
            time,
            nomeGenero,
            corTime
        })
        setJogo('')
        setGenero('')
        setImagem('')
        setTime('')
        setNomeGenero('')
        setCorTime('')
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSubmeter}>
                <h2>Preencha os dados dos seus jogos favorítos!</h2>

                <Campo
                    obrigatorio={true}
                    label="Jogo"
                    placeholder="Digite o nome do jogo"
                    valor={jogo}
                    aoAlterado={valor => setJogo(valor)} />

                <Campo
                    obrigatorio={true}
                    label="Gênero(s)"
                    placeholder="Digite o Gênero"
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)} />

                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />

                <Botao>
                    Criar card
                </Botao>
            </form>

            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({ jogo: nomeGenero, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>

                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do Gênero(s)"
                    valor={nomeGenero}
                    aoAlterado={valor => setNomeGenero(valor)} />

                <Campo
                    obrigatorio
                    type='color'
                    label="cor"
                    placeholder="Digite cor do Gênero(s)"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} />

                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario