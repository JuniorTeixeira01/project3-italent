/* Neste componente estou criando a estrutura central da página e 
   importando o componente cards para que eles sejam exibidos aqui.
   E faço o uso da proprieda props de listagem exigida no projeto
   */

import Cards from '../cards';   
import dadosProdutos from '../../dados';
import './main.css';
import './mobile.css';

const Main = () => {
    return(
        <main className='container-main'>
            {dadosProdutos.map((produto) => 
                <Cards
                  index={produto.index}
                   imagem={produto.imagem}
                   nome={produto.nome}
                   descricao={produto.descricao}

                />
            )}
        </main>
    );
};

export default Main;