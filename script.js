const app = Vue.createApp({
   
    data() {
        return{
            productos: [
                {tipo: "consola", cantidad: 100},
                {tipo: "juegos", cantidad: 200},
                {tipo: "control", cantidad: 100},
            ],
            producto: ""
        }
    },

    methods: {
        agregarProducto(){
           
            this.productos.push(
                {tipo: this.producto, cantidad: 0}
            )
            this.producto = "";
        }
    }
})

const vm = app.mount(`#app`)