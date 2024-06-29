import data from "../../fixtures/data.json";

class HomePage {

    visit() {
        cy.visit('https://shop.lm.mentorama.com.br/');
    }

    click(opcao) {
        if (opcao == 'logo') {
            this.elements.logo().click();
        } else if (opcao == 'entrar') {
            this.elements.entrar().click();
        } else if (opcao == 'search') {
            this.elements.search().click();
        }
    }

    login(credentials) {
        if (credentials == 'not registered credentials') {
            this.elements.loginModalEmail().type(data.emailNotRegistered, {force: true});
            this.elements.loginModalPassword().type(data.password, {force: true});
            this.elements.loginModalSubmit().click();
        } else if (credentials == 'empty credentials') {
            this.elements.loginModalSubmit().click();
        }
    }

    search(product) {
        if (product != "") {
            this.elements.searchInput().type(product);
        }
        this.elements.searchInput().type('{enter}');
    }

    select(category) {
        this.elements.searchSelect().select(category);
    }

    elements = {
        logo: () => cy.get("div[class='logo-holder']").first(),
        entrar: () => cy.get('span[class="icon-text"'),
        loginModal: () => cy.get('#et-login-popup-wrap'),
        loginModalEmail: () => cy.get('#username'),
        loginModalPassword: () => cy.get('#password'),
        loginModalSubmit: () => cy.get('button[name="login"]'),
        search: () => cy.get('a[class*="quick_search"]'),
        searchInput: () => cy.get('#woocommerce-product-search-field-1'),
        searchSelect: () => cy.get('#product_cat-1'),
    }

}

export default HomePage;