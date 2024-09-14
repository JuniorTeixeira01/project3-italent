/*
 Componente Formulário onde faço a importação do componente FormInput do formulário css,
 nele faço o uso de três componentes FormInput onde o primeiro é definido o nome, 
 no segundo o email e no terceiro o input de enviar 
*/

import FormInput from '../formInput';
import './formulario.css';
import './mobile.css';

const Formulario = () => {
    return(
        <form className='container-form'>
            <FormInput inputName={"Nome"} type={"name"} required={"required"}  placeholder={"Seu nome completo"} />
            <FormInput inputName={"Email"} type={"email"} required={"required"}  placeholder={"seuemail@email.com"} />
            <FormInput type={"submit"}/>
        </form>
    );
};

export default Formulario;