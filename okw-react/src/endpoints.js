const DEBUG = false

let domain

if (DEBUG){
    domain = 'http://localhost:81/'
}else{
    domain = ''
}
const endpoints = {
    'auth':{
        'get_csrf': domain + 'api/accounts/csrf/',
        'login': domain + 'api/accounts/login/',
    },
    'ecommerce':{
        'product-list': domain + 'api/ecommerce/products/',
        'product-detail': domain + 'api/ecommerce/products/',
    },
    'orders':{
        'cart-detail': domain + 'api/orders/cart/',
        'cart-items': domain + 'api/orders/cart/items/',
    },
}

export default endpoints;