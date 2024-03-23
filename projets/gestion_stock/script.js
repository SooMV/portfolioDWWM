let products = [
    {
        name: 'Produit 1',
        price: 20,
        quantity: 3,
        category: 'Categorie 1',
    },
    {
        name: 'Produit 2',
        price: 25,
        quantity: 2,
        category: 'Categorie 2',
    },
    {
        name: 'Produit 3',
        price: 50,
        quantity: 10,
        category: 'Categorie 3',
    }
]

const app = Vue.createApp({
        data() {
            return {
                produits: products,
                newValue: {},
                modal: false,
                editIndex: -1,
            };
        },
        methods: {
            addProduct(){
                if(this.newValue.name && this.newValue.price && this.newValue.quantity && this.newValue.category){
                    this.produits.push(this.newValue),
                    this.newValue = {}
                } else {
                    alert('Remplissez tous les champs !')
                }
            },
            deleteProduct(index){
                if(confirm('Etes vous sur de supprimer ce produit ?')){
                    this.produits.splice(index,1)
                }
            },
            openModal(index){
                this.modal = true
                this.editIndex = index
                this.newValue = {...this.produits[index]}
            }, 
            closeModal(){
                this.modal = false
                this.editIndex = -1;
                this.newValue = {}
            },
            editProduct(){
                if(this.newValue.name && this.newValue.price && this.newValue.quantity && this.newValue.category){
                    this.produits[this.editIndex] = this.newValue
                    this.newValue = {}
                    this.closeModal()
                } else {
                    alert('Veuillez remplir tous les champs')
                }
            }, 
            saveToLocalStorage(){
                localStorage.setItem("produits", JSON.stringify(this.produits))
            }
        },
        watch: {
            produits: {
                deep: true,
                handler(){
                    this.saveToLocalStorage()
                }
            }
        },
        created(){
            let storedProducts = localStorage.getItem('produits')
            if(storedProducts){
                this.produits = JSON.parse(storedProducts)
            } 
        }
    })
    app.mount('#app');