
const products = {
    name : 'Avocado',
    qty  : 3,
    price: 500
}

const productsString = JSON.stringify(products)

localStorage.setItem('products', productsString)
