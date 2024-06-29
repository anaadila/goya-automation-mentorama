class CatalogPage {
    
    visit() {
        cy.visit('https://shop.lm.mentorama.com.br/?post_type=product');
    }

    elements = {
        breadcrumb: () => cy.get('nav.woocommerce-breadcrumb'),
    }
}

export default CatalogPage;