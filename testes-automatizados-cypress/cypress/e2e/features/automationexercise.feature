Feature: Testes do site Automation Exercise

Scenario: Teste de Login Válido
    Given que o usuário está na página de login
    When ele insere e-mail e senha válidos
    And clica em "Login"
    Then ele deve ser redirecionado ao dashboard

Scenario: Teste de Login Inválido
    Given que o usuário está na página de login
    When ele insere e-mail e senha inválidos
    And clica em "Login"
    Then uma mensagem de erro deve ser exibida

Scenario: Acesso à Página de Cadastro
    Given que o usuário está na página inicial
    When ele clica em "Signup / Login"
    Then ele deve ser redirecionado à página de cadastro

Scenario: Cadastro com Dados Válidos
    Given que o usuário não possui cadastro
    When ele preenche todos os campos obrigatórios no formulário de cadastro
    And clica em "Create Account"
    Then a conta deve ser criada com sucesso

Scenario: Cadastro com E-mail já Existente
    Given que o e-mail já está cadastrado
    When o usuário tenta se cadastrar com o mesmo e-mail
    Then uma mensagem de erro deve ser exibida

Scenario: Visualizar Produtos
    Given que o usuário está na página inicial
    When ele clica em "Products"
    Then a lista de produtos deve ser exibida

Scenario: Visualizar Detalhes do Produto
    Given que um produto está listado
    When o usuário clica em "View Product"
    Then os detalhes do produto devem ser exibidos

Scenario: Adicionar Produto ao Carrinho
    Given que um produto está disponível
    When o usuário adiciona o produto ao carrinho
    Then o produto deve aparecer no carrinho

Scenario: Remover Produto do Carrinho
    Given que há um produto no carrinho
    When o usuário clica em "X" para remover o produto
    Then o produto deve ser removido do carrinho

Scenario: Checkout como Usuário Logado
    Given que o usuário está logado com produtos no carrinho
    When ele acessa o checkout e finaliza a compra
    Then o pedido deve ser realizado com sucesso

Scenario: Checkout como Convidado
    Given que o carrinho possui produtos
    When o usuário preenche os dados no checkout como convidado e finaliza a compra
    Then o pedido deve ser realizado com sucesso

Scenario: Contato via Formulário
    Given que o usuário está na aba "Contact Us"
    When ele preenche o formulário e envia
    Then uma mensagem de sucesso deve ser exibida

Scenario: Pesquisa de Produto
    Given que o usuário está na página inicial
    When ele pesquisa por um termo
    Then os produtos compatíveis devem ser listados

Scenario: Inscrição na Newsletter
    Given que o usuário está na página inicial
    When ele insere o e-mail no rodapé e clica em "Subscribe"
    Then uma mensagem de confirmação deve ser exibida

Scenario: Exclusão de Conta
    Given que o usuário está logado
    When ele acessa as configurações e exclui a conta
    Then a conta deve ser excluída com sucesso

Scenario: Logout do Sistema
    Given que o usuário está logado
    When ele clica em "Logout"
    Then ele deve ser redirecionado para a página de login

Scenario: Visualizar Categorias de Produtos
    Given que o usuário está na página "Products"
    When ele visualiza o painel lateral
    Then as categorias devem estar listadas corretamente

Scenario: Filtro por Marca ou Categoria
    Given que há categorias e marcas cadastradas
    When o usuário seleciona uma categoria ou marca
    Then os produtos devem ser filtrados conforme a seleção

Scenario: Visualizar Produtos Recomendados
    Given que há produtos relacionados
    When o usuário acessa a página de produto ou carrinho
    Then os produtos recomendados devem ser exibidos corretamente