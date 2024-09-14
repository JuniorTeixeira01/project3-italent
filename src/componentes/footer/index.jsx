/*
 Arquivo Footer onde faço a importação do seu css e faço o uso 
 da propriedade children exigida no projeto, e export ela para 
 o arquivo App onde será exibida na página. 
*/
import './footer.css';

const Footer = ({children}) => {
    return(
        <footer className="container-footer">
            <p>{children}</p>
        </footer>
    );
};

export default Footer;