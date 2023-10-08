const adm = [
    {
        login: 'cath',
        pass: 'cath'
    },
    {
        login: 'Lary',
        pass: 'Lary'
    }
]


const cuidador = [
    {
        login: 'adm',
        pass: 'adm'
    }
]


let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let acessarUsuario = document.getElementById('usuario').value
    let acessarSenha = document.getElementById('senha').value
    let loginAdm = false
    
    for(let i in adm){

        if(acessarUsuario == adm[i].login && acessarSenha == adm[i].pass){
            loginAdm = true
            break
        } 
    }

    if (loginAdm == true) {
        location.href =  '/front-end/todoList.html'
        
    } else {

      
        acessoCuidador(acessarUsuario , acessarSenha)

        
    }
})

function acessoCuidador(acessarUsuario , acessarSenha){
    let loginCuidador = false

    for(let i in cuidador){
        if(acessarUsuario == cuidador[i].login && acessarSenha == cuidador[i].pass){
            loginCuidador = true
            break
        }
    }

    if (loginCuidador == true) {
        location.href = '/telaGerenciada.html'
        
    } else {
        alert('erro de acesso')
    }
}



