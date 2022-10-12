const app = new Vue({
    el: "#app",
    data:{
        mensaje:"Lista de Compras con Vue",
        fruta:"",
        precio:"",
        frutas:[
            {nombre:"manzana", precio:10},
            {nombre:"pera", precio:15},
        ]
    },
    methods:{
        agregar: function(){
            this.frutas.push({nombre:this.fruta, precio:this.precio})
            this.fruta = ""
            this.precio = ""
        },
        eliminar: function(indice){
            this.frutas.splice(indice, 1)
        }
    },
    computed:{
        calcularTotal:function(){
            total = 0
            this.frutas.forEach(element => {
                total += element.precio
            });
            return total
        }
    }
})