const myNum = [10, 20, 30 ,40]

const total = myNum.reduce( (acc, currVal)=> {
    console.log(`Acc: ${acc} CurrVal: ${currVal}`)    
    return acc + currVal
    }, 0
)

console.log(total)



const shoppingCart = [
    {
        productName: 'Mobile Phone',
        price: 999
    },
    {
        productName: 'Charger',
        price: 49
    },
    {
        productName: 'Mobile Cover',
        price: 9
    },
    {
        productName: 'Earbuds',
        price: 99
    }
]

const totalCartValue = shoppingCart.reduce( (acc, product)=> acc + product.price, 0)
console.log(`Total cart value: $${totalCartValue}`)