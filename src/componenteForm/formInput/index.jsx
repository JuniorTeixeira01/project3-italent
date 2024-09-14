/*
 Componente FormInput, nele faço a definição do label e ponho nele a propriedade
 props inputName exigida no projeto.
 Também faço a definição de algumas propriedades do input repassadas através do 
 spreed como sugestão de projeto, e assim defino o FomrInput como um único container 
*/

import './formInput.css';

const FormInput = ({inputName, ...props}) => {
    return(
        <div className='form-input'>
            <label>{inputName}</label>
            <input type={props.type} required={props.required}  placeholder={props.placeholder}/>
        </div>
    );
};

export default FormInput;