class HomePage {
    visit() {
        cy.visit('https://shop.lm.mentorama.com.br/');
    }

    click(opcao) {
        if (opcao == 'logo') {
            this.elements.logo().click();
        } else if (opcao == 'entrar') {
            this.elements.entrar().click();
        }
    }

    login(credentials) {
        if (credentials == 'not registered credentials') {
            this.elements.loginModalEmail().type('not-registered@email.com', {force: true});
            this.elements.loginModalPassword().type('123456', {force: true});
            this.elements.loginModalSubmit().click();
        } else if (credentials == 'empty credentials') {
            this.elements.loginModalSubmit().click();
        }
    }

    elements = {
        logo: () => cy.get("div[class='logo-holder']").first(),
        entrar: () => cy.get('span[class="icon-text"'),
        loginModal: () => cy.get('#et-login-popup-wrap'),
        loginModalEmail: () => cy.get('#username'),
        loginModalPassword: () => cy.get('#password'),
        loginModalSubmit: () => cy.get('button[name="login"]'),
    }

    /*fillUsername(name) {
        cy.get('#username').type(name);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('#login-form').submit();
    }*/
}

export default HomePage;