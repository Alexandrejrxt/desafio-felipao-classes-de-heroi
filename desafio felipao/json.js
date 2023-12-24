// json - javaScript object Notation
// chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Alexandre",
    age: 29,
    products: {
        0:["mouse 2xwm", 29.99],
        1:["Teclado mecânico", 129.99],
        2:["Monitor", 899.99],
        3:["Headset", 158.66]
    }
}
taxes: 98.90

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("----------------")

    for(const index in invoice.products){
        let [productName, productPrice] = invoice.products [index]
        console.log(`-${productName}: R$ ${productPrice}`)
    }

}







