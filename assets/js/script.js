const divPaginaToda = document.querySelector('.pagina-toda');

document.addEventListener('click', function(e) {
const evento = e.target
if (evento.classList.contains('imagem')) {
addPaginaToda();
addTexteAndImage(todosProdutos, evento);
}
if (evento.classList.contains('close') || (evento.classList.contains('pagina-toda'))) {
    divPaginaToda.style.display = 'none';
    const divsLogos = document.querySelectorAll('.logo-foto-ampliada');
    for (const div of divsLogos){
        div.style.display = 'none'
    }
}
});

function addPaginaToda (){
    divPaginaToda.style.display = 'block';
}

function addTexteAndImage (produtos, evento){
for (let produto of produtos) {
    produto.captandoLink()
const [elemento, arquivo, titulo, descricao, vegano, vegetariano, livreAcucar, livreLactose] = [produto.product, 
    produto.link, produto.nome, produto.description, produto.vegan, produto.vegetarian, produto.sugarFree, produto.lactoseFree]
if (evento.classList.contains(elemento)) {
    const linkImagem = document.querySelector('.imagem-ampliada');
    const tituloProduto = document.querySelector('.titulo-produto');
    const descricaoProduto = document.querySelector('.descricao-produto');
    linkImagem.setAttribute('src', arquivo)
    tituloProduto.innerText = titulo
    descricaoProduto.innerText = descricao
    const logos = [vegano, vegetariano, livreAcucar, livreLactose]
    for (let logo of logos) {
        console.log(logo)
        if (logo) {
            const divLogo = document.querySelector(logo);
            divLogo.style.display = 'flex'
        }
    }
}
}
}

class Produto {
    constructor (product, nome, description, link, vegan=false, vegetarian=false, sugarFree=false, lactoseFree=false) { 
    this.product = product;
    this.nome = nome;
    this.description = description;
    this.vegan = vegan;
    this.vegetarian = vegetarian;
    this.sugarFree = sugarFree;
    this.lactoseFree = lactoseFree;
    this.link = link
}
    captandoLink () {
        if (this.vegetarian) {
            this.vegetarian = '.logo-vegano'
        }
        if (this.vegan) {
            this.vegan = '.logo-vegetariano'
        }
        if (this.sugarFree) {
            this.sugarFree = '.logo-sugarfree'
        }
        if (this.lactoseFree) {
            this.lactoseFree = '.logo-lactosefree'
        }
    }

}

const paoAzeitona = new Produto ('azeitona', 'Pão de Azeitona', 'Feito com azeitona preta, manjericão e cúrcuma.', 'assets/img/pao_azeitona.jpeg',
 true, true, true, true);
const paoCacau = new Produto ('cacau', 'Pão de Cacau', 'Pão adocicado com cacau, chocolate e frutas cristalizadas.', 
'assets/img/pao_cacau.jpeg', true, true, true, true);
const paoIntegral = new Produto ('integral', 'Pão Integral', '100% farinha integral.', 'assets/img/pao_integral.jpeg', true, true, true, true);
const paoMultigraos = new Produto ('multigraos', 'Pão Multigrãos', 'Quinoa, chia, linhaça, gergelim, semente de girassol.',
 'assets/img/pao_multigraos.jpeg',  true, true, true, true);
const paoRustico = new Produto ('rustico', 'Pão Rústico', 'Uma mistura de farinhas branca e integral, água e sal.',
 'assets/img/pao_rustico.jpeg',  true, true, true, true);
const paoExotico = new Produto ('exotico', 'Pão Exótico', 'Tâmara, gengibre e castanha do pará.',
 'assets/img/pao-exotico.jpeg',  true, true, true, true);
const focaccia = new Produto ('focaccia', 'Focaccia de tomate', 'Pão clássico italiano leve com azeite, tomate cereja, alecrim e flor de sal.',
  'assets/img/focaccia.jpeg', true, true, true, true);
const grissini = new Produto ('grissini', 'Grissini', 'Palitos crocantes com sementes e azeite (assados). Feito com levain.', 'assets/img/grissini.jpeg',
true, true, true, true);
const quiche = new Produto ('quiche', 'Quiche Lorraine', 'Farinha, manteiga, ovo, sal,  pimenta do reino, noz moscada, queijo, bacon creme de leite.', 
'assets/img/quiche.jpeg');
const granola = new Produto ('granola', 'Granola', 'Com oleaginosas(castanhas), chia, linhaça, açúcar mascavo e mel de abelha.',
 'assets/img/granola2.jpg');
const broa = new Produto ('broa', 'Broa Caxambu', 'Broas com fubá e um perfume de erva doce.',
 'assets/img/broa-caxambu.jpeg');
const cookie = new Produto ('cookie', 'Cookie', 'Com chocolate callebaut e açúcar orgânico.',
 'assets/img/cookie.jpeg');
const tortaChocolate = new Produto ('torta-chocolate', 'Torta de Chocolate',
'Torta de chocolate meio amargo com uma cobertura de chocolate e amêndoas, e uma massa crocante envolvendo tudo isso.',
 'assets/img/torta-chocolate.jpg');

const todosProdutos = [paoAzeitona, paoCacau, paoIntegral, paoMultigraos, paoRustico, paoExotico, focaccia, 
    grissini, quiche, granola, broa, cookie, tortaChocolate];