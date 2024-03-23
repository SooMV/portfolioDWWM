let products = [
    {
        id: 1,
        name: "Bic Mac",
        image: "img/big-mac.png",
        price: 5.99,
        quantity: 0,
        active: false,
    },
    {
        id: 2,
        name: "Mc Chicken",
        image: "img/mc-chicken.png",
        price: 4.99,
        quantity: 0,
        active: false,
    },
    {
        id: 3,
        name: "Doucle Cheese Burger",
        image: "img/double-cb.png",
        price: 2.99,
        quantity: 0,
        active: false,
    },
    {
        id: 4,
        name: "Fries",
        image: "img/fries.png",
        price: 2.99,
        quantity: 0,
        active: false,
    },
    {
        id: 5,
        name: "Mc Nuggets",
        image: "img/nuggets.png",
        price: 3.49,
        quantity: 0,
        active: false,
    },
    {
        id: 4,
        name: "Salad",
        image: "img/salad.png",
        price: 2.79,
        quantity: 0,
        active: false,
    },
    {
        id: 7,
        name: "Coke",
        image: "img/cola.png",
        price: 1.99,
        quantity: 0,
        active: false,
    },
    {
        id: 8,
        name: "Ice Tea",
        image: "img/lipton.png",
        price: 1.99,
        quantity: 0,
        active: false,

    },
    {
        id: 9,
        name: "Water",
        image: "img/water.png",
        price: 1.49,
        quantity: 0,
        active: false,
    }

];



const app = Vue.createApp({

    data() {
        return {

            compteur: 0,
            prods: products,

        }
    }, 
    
    methods: {
        ToggleEvent(item){
            item.active =!item.active
            item.quantity = 1
        },
        increm(item){
            if(item){
                item.quantity++
            }
        },
        decrem(item){
            if(item.quantity > 1){
                item.quantity--
            }
        }, 
        TotalProduit(prod){
            return (prod.price * prod.quantity).toFixed(2)
        }, 
        TotalNote(){
            return this.prods.reduce(
                (acc, prod) => {
                    if(prod.active){
                        return acc + parseFloat(this.TotalProduit(prod))
                    } else {
                        return acc
                    }
                },0).toFixed(2)
        }
    }


});


app.mount('#app')