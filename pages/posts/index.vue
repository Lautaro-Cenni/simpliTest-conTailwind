<template>
    <div v-if="!loading" class="flex content-center abolute h-screen">
        <img class="loading mx-auto mt-30 w-1/2" src="../../static/Loading-car.gif" alt="">
    </div>
    <div v-else class="posts w-screen">
        <div class="title-pag-box">
            <div class="flex flex-row content-center title-pag w-4/5 mx-auto text-center SFDisplay-black h-full">
                <p class="self-center w-full">¿CUÁL VA A SER TU PRÓXIMO NISSAN?</p>
            </div>
        </div>
        <div class="container-cards mt-12 grid justify-center justify-items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row ">
            <Cards  v-for="post of posts" 
                :key="post.id"
                :id="post.id"
                :precio="post.detail.price.amount"
                :desc="post.detail.main_description"
                :name="post.name"
                :img="post.detail.main_image.large"
                :model="post.model"
            />
        </div>
        <div class="w-full sm:w-4/5 flex flex-row content-center mx-auto text-left SFDisplay">
            <p class="self-center w-full bottom-text">*Los precios expuestos en este catalogo son expresados en dólares americanos. Los mismos incluyen IVA y podrán variar en función al modelo y/o versión elegida. El precio por unidad reflejado en este catálogo refiere a la unidad de versión más económica por cada modelo. RALITOR SA se reserva el derecho de modificar y actualizar los mismos en cualquier momento. Es responsabilidad del cliente confirmar al momento de su compra, el precio final que aparece en el catálogo. No se incluyen Gastos de empadronamiento ni cualquier tipo de costo municipal, así como tampoco gastos de traslados, fletes o seguro del vehículo. No incluye costos de instalación de accesorios.</p>
        </div>
    </div>
</template>


<script>
//cards genera mi pag que enlista los productos
import Cards from "../../components/posts"

export default {
    head(){
        return{
            title:"Nissan Store"
        }
    },
    //components va a tener los componentes que voy a utilizar
    components:{
        Cards
    },
    data() {
        return{
            posts: [],
            //loading lo voy a utilizar para previsualizar una pantalla de carga mientras se generan los elementos
            loading: false
        }
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
    async created(){
    
        try {
            const {data} = await this.$axios.get('https://4my1q6hsyo.api.quickmocker.com/product')
            this.posts = data.results
            //una vez se cargan los elementos dedl api transformo loading a true para quitar mi pantalla de carga y mostras mis elementos
            this.loading = true
        
        } catch (error) {
            console.log(error)
        }

  }
}
</script>

<style>
.loading{
    image-rendering: 100%;
}
.posts{
    position:relative;
    margin-top: 100px;
    margin-bottom: 50px;
    min-height: 810px;
}
.title-pag-box{
    background-color: #ccc;
    height:104px;
}
.title-pag{
    font-weight: 900;
    color: #fff;
    font-size: 17px;
}
.container-cards{
    max-width:1200px;
}
@media screen and (min-width:560px) {
    
.title-pag-box{
    top:100px;
    height:178px;
}
.title-pag{
    font-size: 49px;
    letter-spacing: -1px!important;
}
.bottom-text{
    font-size: 13px;
    line-height: 17px;
    color: #c1c1c1;
}
}
</style>