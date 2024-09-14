/* Aquivo principal do projeto Que faz a importação de todos os componentes
   que aparecerão na página, nele importo o Hedear, o Main, o Formulário
   e o Footer, no Footer faço o uso da propriedade children exigida no 
   projeto*/
   
import Header from './componentes/header';
import Main from './componentes/main';
import Formulario from './componenteForm/formulario';
import Footer from './componentes/footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Formulario />
      <Footer>&copy; Desenvolvido por Junior Teixeira</Footer>
    </div>
  );
}

export default App;
