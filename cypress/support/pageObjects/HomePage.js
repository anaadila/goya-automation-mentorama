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
        } else if (opcao == 'wishlist') {
            this.elements.wishlistIcon().click();
        } else if (opcao == 'cart') {
            this.elements.cartIcon().click();
        } else if (opcao == 'catalog') {
            this.elements.catalog().click();
        } else if (opcao == 'menu') {
            this.elements.menu().click();
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

    wishlistAProdut() {
        this.elements.mainProducts().find('li').eq(0).find('a[class*="add_to_wishlist"]').click();
    }

    addAProductToCart() {
        this.elements.mainProducts().find('li').eq(1).find('a[class*="add_to_cart_button"]').first().click();
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
        wishlistIcon: () => cy.get('a[class*="quick_wishlist"]'),
        mainProducts: () => cy.get('ul[class*="et-main-products"]'),
        withlistCount: () => cy.get('span[class*="et-wishlist-counter"]').invoke('text'),
        cartIcon: () => cy.get('a[class*="quick_cart"]').first(),
        cartNav: () => cy.get('#side-cart'),
        cartCount: () => cy.get('span[class*="minicart-counter"]').invoke('text'),
        cartX: () => cy.get('a[class*="et-close"]').first(),
        cartProductList: () => cy.get('ul[class*="cart_list"]'),
        cartEmpty: () => cy.get('div[class="et-cart-empty"]'),
        freeShippingMessage: () => cy.get('div[class="progress-bar-message"]'),
        checkoutButton: () => cy.get('a[class*="checkout"]'),
        cartButton: () => cy.get('a[class="button wc-forward wp-element-button"]'),
        catalog: () => cy.get('#menu-item-4084'),
        hoverMenuMulher: () => cy.get('#menu-item-4087').find('a').first(),
        hoverMenuHomem: () => cy.get('#menu-item-4085').find('a').first(),
        hoverMenuCaixas: () => cy.get('#menu-item-4086').find('a').first(),
        catalogMenu: () => cy.get('#menu-main-2').find('li').first().find('a').first(),
        menuMulher: () => cy.get('li[class*="menu-item-4087"]').find('a').last(),
        menuHomem: () => cy.get('li[class*="menu-item-4085"]').find('a').last(),
        menuCaixa: () => cy.get('li[class*="menu-item-4086"]').find('a').last(),
        menu: () => cy.get('button[class*="menu-toggle"]').first(),
    }

}

export default HomePage;