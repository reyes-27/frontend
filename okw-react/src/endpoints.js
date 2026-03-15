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
        'product-detail': (slug) => domain + `api/ecommerce/products/${slug}`,
    },
    'orders':{
        'cart-detail': domain + 'api/orders/cart/',
        'cart-items': domain + 'api/orders/cart/items/',
        'cart/checkout': domain + 'api/orders/cart/checkout/',
        'order-detail': (id) => domain + `api/orders/${id}`,
    },
}

export default endpoints;