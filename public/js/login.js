document.querySelector('#registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirmPassword').value;

    // Validação básica de senha
    if (password !== confirmPassword) {
         alert('As senhas não correspondem!');
       return;
     }



    

    // Redirecionar para a página de login
    window.location.href = './site-institucional/index.html';
});

function entrar() {

    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if (user == "" || senha == "") {
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        return false;
    }


    var userVar = document.getElementById('user').value;
    var senhaVar = document.getElementById('senha').value;


    fetch("/usuarios/autenticar",{
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userServer: userVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                // Armazenar email e senha no localStorage
                localStorage.setItem('registeredEmail', user);
                alert('login realizado com sucesso!');

                setTimeout(function () {
                    window.location = "./dashboard/Tela.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            alert("Login ou senha incorretos!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}


