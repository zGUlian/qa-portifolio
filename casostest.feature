Funcionalidade: Login na plataforma KaBuM

Contexto: Usuário acessa a página de login
    Dado que o usuário acessa a URL "https://www.kabum.com.br/login"

Cenário: Login com credenciais válidas
    Quando o usuário preenche o campo "E-mail" com um e-mail válido
    E preenche o campo "Senha" com a senha correta
    E clica no botão "Entrar"
    Então o usuário deve ser redirecionado para a página inicial da KaBuM
    E deve visualizar seu nome de usuário no topo da página

Cenário: Login com e-mail inválido
    Quando o usuário preenche o campo "E-mail" com um e-mail inválido
    E preenche o campo "Senha" com a senha correta
    E clica no botão "Entrar"
    Então uma mensagem de erro deve ser exibida informando "E-mail inválido"

Cenário: Login com senha incorreta
    Quando o usuário preenche o campo "E-mail" com um e-mail válido
    E preenche o campo "Senha" com uma senha incorreta
    E clica no botão "Entrar"
    Então uma mensagem de erro deve ser exibida informando "Usuário ou senha incorretos"
