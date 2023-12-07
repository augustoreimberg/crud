//object
let products = [
    {
        id: 1,
        type: "car",
        brand: "Porsche",
        name: "Panamera",
        engine: "V8",
        fuel: "eletric"
    },

    {
        id: 2,
        type: "car",
        brand: "Audi",
        name: "T.T",
        engine: "V6",
        fuel: "gasoline"
    }
];

//functions
function include(newProduct){
    return products.push(newProduct);
};

function update(id, newProduct){
    for (let product of products) {
        if (product.id === id) {
            let productIndex = products.indexOf(product);
            products[productIndex] = {
                id : id,
                ...newProduct
            }
            break;
        }
    }
}

function remove(id){
    for (let product of products) {
        if (product.id === id) {
            let productIndex = products.indexOf(product);
            products.splice(productIndex,1);
            break;
        }
    }
}

function list(id, name){
    if(id){
        for(let product of products){
            if(product.id === id){
                return product;
            }
        }
    }

    if(name){
        for(let product of products){
            if(product.name === name){
                return product;
            }
        }
    }
    return products;
}


//params
include({
    id: 3,
    type: "car",
    brand: "Ferrari",
    name: "SP51",
    engine: "?",
    fuel: "?"
});

update(4, {
    type: "car",
    brand: "Ferrari",
    name: "SP51 UPDATED",
    engine: "V12",
    fuel: "gasoline"
});

remove(1);

list(2);

