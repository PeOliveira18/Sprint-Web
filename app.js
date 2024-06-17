var id = 0
var imgs = document.getElementById('imgs')
var img = imgs.getElementsByTagName('img')
const locais = ['Circuito de Monaco - França','Circuito de Berlin - Alemanha', 'Circuito de Missano - Italia', 'Circuito de Portland - Estados Unidos', 'Circuito de Shangai - China']
const ranking = [{
        nome: 'Nick Cassidy',
        nacionalidade: 'Reino Unido',
        equipe: 'Jaguar tos Racing',
        ranking: '1º'
    },
    {
        nome: 'Pascal Wehrlen',
        nacionalidade: 'Alemanha',
        equipe: 'TAG Heuer Porsche',
        ranking: '2º'
    },
    {
        nome: 'Mitch Evans',
        nacionalidade: 'Reino Unido',
        equipe: 'Jaguar tos Racing',
        ranking: '3º'
    },
    {
        nome: 'Oliveir Rowland',
        nacionalidade: 'Reino Unido',
        equipe: 'Nissan Formula E Team',
        ranking: '4º'
    },
    {
        nome: 'Jake Dennis',
        nacionalidade: 'Reino Unido',
        equipe: 'Andretti Formula E',
        ranking: '5º'
    }
]

document.addEventListener('DOMContentLoaded',function(){
    let txtCadastro = document.getElementById('btnCadastro')
    let txtLogin = document.getElementById('btnLogin')

    txtCadastro.innerHTML = 'Cadastro'
    txtLogin.innerHTML = 'Login'
})

function realizarCadastro(){
    let novoUsuario = document.getElementById('txtUsuario').value
    let novaSenha = document.getElementById('txtSenha').value

    sessionStorage.setItem('Usuario', novoUsuario)
    sessionStorage.setItem('Senha', novaSenha)

    var pergunta = prompt('Deseja ver suas credencias para anota-las?[sim/nao]').toLowerCase()
    if (pergunta === 'sim'){
        alert(`Nome de usuario: ${novoUsuario} `)
        alert(`Senha: ${novaSenha} `)
    }else{
        alert('Tenha uma boa experiencia!')
    }
}

function realizarLogin(){
    let loginUsuario = document.getElementById('txtUsuario').value
    let loginSenha = document.getElementById('txtSenha').value
    let usuarioRegistrado = sessionStorage.getItem('Usuario')
    let senhaRegistrada = sessionStorage.getItem('Senha')
    
    if(loginUsuario === usuarioRegistrado && loginSenha === senhaRegistrada){
        alert('Login efetuado com sucesso')
    }else if(!usuarioRegistrado || !senhaRegistrada){
        alert('E necessario criar uma conta')
    }else{
        alert('Nome de usuario ou senha incorretos. Tente novamente')
        
    }
    
}

function apareceForm(tipo){
    let secao = document.getElementsByClassName('cadastro')[0]
    secao.classList.remove('cadastro')
    secao.classList.add('secaoCadastroLogin')
    if(tipo === 'cadastro'){
        document.getElementById('salvarDados').setAttribute('onclick', 'realizarCadastro()');
        document.getElementById('salvarDados').setAttribute('value', 'Salvar dados');
    } else {
        document.getElementById('salvarDados').setAttribute('onclick','realizarLogin()')
        document.getElementById('salvarDados').setAttribute('value', 'Login');
    }
}

function carrosel(){
    id++

    if(id >img.length -1){
        id = 0
    }

    imgs.style.transform = `translateX(${-id *1440}px)`
    atualizarDescricao(id)
}
setInterval(carrosel,3000) 
