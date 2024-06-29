class HomePage {
    visit() {
        cy.visit('https://shop.lm.mentorama.com.br/');
    }

    click(opcao) {
        if (opcao == 'logo') {
            cy.get("div[class='logo-holder']").first().click();
        }
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