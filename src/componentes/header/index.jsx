/* 
 Neste código estou aplicando o topo do projeto
 nele temos dois contaires.
 */

import './header.css';
import './mobile.css';

const Header = () =>{
    return(
       <header className="container">
           <div>
              <h1>Nossos Produtos</h1>
            </div>
           <div>
             <p>Deliciosas bebidas</p>
           </div>
       </header>
    );
};

export default Header;