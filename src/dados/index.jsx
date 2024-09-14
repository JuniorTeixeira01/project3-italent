/*
Componente de listagem exigido no projeto
Neste código faço as importações das imagens para usa-las no objetos já em variáveis */
import achocolatado from '../assets/achocolatado.avif';
import cafe from '../assets/cafe.avif';
import capuccino from '../assets/capuccino.avif';
import expresso from '../assets/expresso.avif';
import leite from '../assets/leite.avif';
import suco from '../assets/sucos.avif';

/* Neste código criei um array de objetos que serão disrtribuídos pelos cards do main*/

const dadosProdutos = [
    {imagem: achocolatado, nome:"Achocolatado", descricao:"Uma deliciosa bebida quente!"},
    {imagem: cafe, nome:"Café", descricao:"A bebida que é apreciada por todos!"},
    {imagem: capuccino , nome:"Capuccino", descricao:"O Capuccino para começar seu dia!"},
    {imagem: expresso, nome:"Expresso", descricao:"Esse expresso te dá energia!"},
    {imagem: leite, nome:"Leite", descricao:"Comece bem seu dia"},
    {imagem: suco , nome:"Suco", descricao:"Deliciosos sucos leve o seu!"}
]

/* Aqui faço a exportação de modo default da lista */
export default dadosProdutos;








