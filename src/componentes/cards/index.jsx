/* Neste componente é criado os cards que serão exibidos no main
   Nele dou a definição do props de listagem que será repassado 
   para o componente main. nessa listagem estão definidas as 
   propriedades de imagem, nome e descrição da lista.
*/
import './cards.css';

const Cards = ({imagem, nome, descricao}) => {
    return(
        <div className='container-card'>
            <img src={imagem} alt=''/>
            <h3>{nome}</h3>
            <p>{descricao}</p>
        </div>
    );
};

export default Cards;