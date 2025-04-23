import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na página de login", () => {
cy.visit("/login");
});

When("inserir e-mail e senha válidos", () => {
cy.get('input[data-qa="login-email"]').type("teste@teste.com");
cy.get('input[data-qa="login-password"]').type("senha123");
});

When("clicar em Login", () => {
cy.get('button[data-qa="login-button"]').click();
});

Then("deve ser redirecionado ao dashboard", () => {
cy.url().should("include", "/account");
cy.contains("Logged in as").should("be.visible");
});

// Cenário 2: Login inválido
When("inserir e-mail e senha inválidos", () => {
cy.get('input[data-qa="login-email"]').type("invalido@teste.com");
cy.get('input[data-qa="login-password"]').type("senhaErrada");
});

Then("deve exibir uma mensagem de erro", () => {
cy.get(".login-form p").should("contain", "Your email or password is incorrect!");
});

// Cenário 3: Acesso à página de cadastro
Given("que o usuário está na página inicial", () => {
cy.visit("/");
});

When("clicar em Signup / Login", () => {
cy.contains("Signup / Login").click();
});

Then("deve ser redirecionado à página de login e cadastro", () => {
cy.url().should("include", "/login");
cy.contains("New User Signup!").should("be.visible");
});
// Cenário 4: Cadastro com Dados Válidos
Given("que o usuário está na página de cadastro", () => {
    cy.visit("/signup");
});

When("preencher todos os campos obrigatórios", () => {
    cy.get('input[data-qa="signup-name"]').type("Gabriel Ulian");
    cy.get('input[data-qa="signup-email"]').type("gabriel@teste.com");
});

When("clicar em Create Account", () => {
    cy.get('button[data-qa="signup-button"]').click();
});

Then("deve ser criada uma conta com sucesso", () => {
    cy.contains("Your Account Has Been Created!").should("be.visible");
});

  // Cenário 5: Cadastro com E-mail já Existente
Given("que o usuário está na página de cadastro com e-mail já cadastrado", () => {
    cy.visit("/signup");
});

When("preencher com e-mail já registrado", () => {
    cy.get('input[data-qa="signup-email"]').type("gabriel@teste.com");
});

Then("deve exibir uma mensagem de erro indicando e-mail já existente", () => {
    cy.contains("Email Address Already Exist!").should("be.visible");
});

  // Cenário 6: Visualizar Produtos
Given("que o usuário está na página inicial", () => {
    cy.visit("/");
});

When("clicar em Products", () => {
    cy.contains("Products").click();
});

Then("a lista de produtos deve ser exibida", () => {
    cy.get('.features_items').should("be.visible");
});

  // Cenário 7: Visualizar Detalhes do Produto
Given("que o usuário está na página de produtos", () => {
    cy.visit("/products");
});

When("clicar em View Product de qualquer item", () => {
    cy.get('.choose').first().click();
});

Then("a página de detalhes do produto deve ser exibida", () => {
    cy.url().should("include", "/product_details");
    cy.contains("Product Details").should("be.visible");
});

  // Cenário 8: Adicionar Produto ao Carrinho
Given("que o usuário está na página de detalhes do produto", () => {
    cy.visit("/product_details");
});

When("clicar em Add to cart", () => {
    cy.get('button[data-qa="add-to-cart"]').click();
});

Then("o produto deve aparecer no carrinho", () => {
    cy.get('.cart').should("contain", "1 item(s) - $50");
});

  // Cenário 9: Remover Produto do Carrinho
Given("que o usuário tem um produto no carrinho", () => {
    cy.visit("/cart");
});

When("clicar em X ao lado do produto", () => {
    cy.get('button[data-qa="remove-product"]').click();
});

Then("o produto deve ser removido do carrinho", () => {
    cy.get('.cart').should("not.contain", "Produto");
});

  // Cenário 10: Checkout como Usuário Logado
Given("que o usuário está logado e com produtos no carrinho", () => {
    cy.visit("/cart");
});

When("clicar em Proceed to Checkout", () => {
    cy.get('button[data-qa="checkout"]').click();
});

Then("o pedido deve ser realizado com sucesso", () => {
    cy.contains("Order Placed!").should("be.visible");
});

  // Cenário 11: Checkout como Convidado
Given("que o usuário está na página de checkout", () => {
    cy.visit("/checkout");
});

When("preencher as informações e finalizar compra", () => {
    cy.get('input[data-qa="guest-name"]').type("Convidado");
    cy.get('input[data-qa="guest-email"]').type("convidado@teste.com");
    cy.get('button[data-qa="submit-order"]').click();
});

Then("o pedido deve ser realizado com sucesso", () => {
    cy.contains("Order Placed!").should("be.visible");
});

  // Cenário 12: Contato via Formulário
Given("que o usuário está na página de Contato", () => {
    cy.visit("/contact_us");
});

When("preencher o formulário de contato", () => {
    cy.get('input[data-qa="contact-name"]').type("Gabriel");
    cy.get('input[data-qa="contact-email"]').type("gabriel@teste.com");
    cy.get('textarea[data-qa="contact-message"]').type("Testando o formulário.");
    cy.get('button[data-qa="contact-submit"]').click();
});

Then("a mensagem de contato deve ser enviada com sucesso", () => {
    cy.contains("Success! Your details have been submitted successfully.").should("be.visible");
});

  // Cenário 13: Pesquisa de Produto
Given("que o usuário está na página inicial", () => {
    cy.visit("/");
});

When("inserir um termo no campo de busca", () => {
    cy.get('input[data-qa="search-product"]').type("Camiseta");
});

Then("produtos compatíveis devem ser listados", () => {
    cy.get('.product-widget').should("contain", "Camiseta");
});

  // Cenário 14: Inscrição na Newsletter
Given("que o usuário está na página inicial", () => {
    cy.visit("/");
});

When("inserir e-mail no rodapé e clicar em Subscribe", () => {
    cy.get('input[data-qa="newsletter-email"]').type("newsletter@teste.com");
    cy.get('button[data-qa="newsletter-submit"]').click();
});

Then("deve exibir uma mensagem de confirmação", () => {
    cy.contains("Thank you for subscribing to our newsletter!").should("be.visible");
});

  // Cenário 15: Exclusão de Conta
Given("que o usuário está logado", () => {
    cy.visit("/account");
});

When("clicar em Delete Account e confirmar a exclusão", () => {
    cy.get('button[data-qa="delete-account"]').click();
});

Then("a conta deve ser excluída com sucesso", () => {
    cy.contains("Account Deleted!").should("be.visible");
});

  // Cenário 16: Logout do Sistema
Given("que o usuário está logado", () => {
    cy.visit("/account");
});

When("clicar em Logout", () => {
    cy.get('button[data-qa="logout"]').click();
});

Then("deve ser redirecionado para a página de login", () => {
    cy.url().should("include", "/login");
    cy.contains("Login to your account").should("be.visible");
});

  // Cenário 17: Visualizar Categorias de Produtos
Given("que o usuário está na página de produtos", () => {
    cy.visit("/products");
});

When("visualizar o painel lateral", () => {
    cy.get('.sidebar').should("be.visible");
});

Then("as categorias devem ser listadas corretamente", () => {
    cy.get('.category-list').should("contain", "Camisetas");
});

  // Cenário 18: Filtro por Marca ou Categoria
Given("que o usuário está na página de produtos", () => {
    cy.visit("/products");
});

When("selecionar uma marca ou categoria", () => {
    cy.get('select[data-qa="filter-by-brand"]').select("Adidas");
});

Then("os produtos devem ser filtrados conforme a seleção", () => {
    cy.get('.product-widget').should("contain", "Adidas");
});

  // Cenário 19: Visualizar Produtos Recomendados
Given("que o usuário está na página de produtos ou carrinho", () => {
    cy.visit("/products");
});

When("visualizar os produtos recomendados", () => {
    cy.get('.recommended-products').should("be.visible");
});
Then("os produtos recomendados devem ser exibidos corretamente", () => {
    cy.get('.recommended-products').should("have.length", 5);
});