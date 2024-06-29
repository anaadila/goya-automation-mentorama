class LoginPage {
    
    visit() {
        cy.visit('https://shop.lm.mentorama.com.br/?page_id=18');
    }

    elements = {
        email: () => cy.get('#username'),
        password: () => cy.get('#password'),
        submit: () => cy.get('button[name="login"]'),
        alert: () => cy.get('ul[class="woocommerce-error"]').then(($el) => {const errorMsg = $el.text()}),
    }
}

export default LoginPage;