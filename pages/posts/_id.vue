<template >
    <div v-if="!loading" class="flex content-center abolute h-screen">
        <img class="loading mx-auto mt-30 w-1/2" src="../../static/Loading-car.gif" alt="">
    </div>
    <div v-else class="content SFDisplay">
        <div>
            <div class="route-box font-medium p-3 flex flex-col justify-center">
                <div class="container mx-auto flex flex-row justify-center sm:justify-start">
                    <div class="flex uppercase">
                        <router-link class="back-to-store justify-self-center" to="/posts">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block icon icon-tabler icon-tabler-arrow-narrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <line x1="5" y1="12" x2="9" y2="16"></line>
                            <line x1="5" y1="12" x2="9" y2="8"></line>
                        </svg>
                        volver a la tienda </router-link>
                        <p class="mt-0.5 justify-self-center mx-3"> / </p> <p class="mt-0.5 justify-self-center">{{car.model}}</p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto mt-4 mb-8">
                <div class="grid">
                    <div class="grid grid-cols-6 grid-flow-row lg:grid-flow-col gap-8">
                        <Carousel
                        @next="next"
                        @prev="prev"
                        @paginationActive="paginationActive"
                        :images="images"
                        :car="car"
                        :visibleSlide="visibleSlide"
                        />
                        <div class="col-span-6 lg:col-span-3">
                            <div class="text-2xl font-semibold SFDisplay ">INGRESÁ TUS DATOS</div>
                            <div class="text-gray-400 text-sm my-2">Por favor completá el siguiente formulario para que uno de nuestros asesores se pueda contactar contigo</div>
                            <form class="pruchase-form flex flex-col gap-4 mx-1">
                                    <input class="w-full p-4" type="text" placeholder="NOMBRE Y APELLIDO" required>
                                    <input class="w-full p-4" type="mail" placeholder=" CORREO ELECTRONICO" required>
                                    <input class="w-full p-4" type="text" placeholder="TELEFONO" required>
                                    <button class="w-full p-4">ENVIARME LA COTIZACIÓN POR MAIL</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container desc-gallery my-4 flex flex-col md:flex-row gap-2">
                <a :href='car.specs.description'><p class="desc cursor-pointer">VER TODAS LAS CARACTERÍSTICAS</p></a>
                <p class="hidden md:block"> | </p>
                <p class="gallery cursor-pointer">VER GALERÍA DE IMÁGENES</p>
            </div>
        </div>
    </div>
    
    
</template>


<script>
import Carousel from '../../components/carousel.vue'
export default {
  components: { Carousel},
    head(){
        return{
            title:this.car.model
        }
    },
    data() {
        return{
            car: [],
            images:[],
            //loading lo voy a utilizar para previsualizar una pantalla de carga mientras se generan los elementos
            loading: false,
            visibleSlide:0,
        }
    },
    methods:{
        next(){
            const distance = (this.visibleSlide+1) * (-100)
            if(this.visibleSlide < this.images.length-1){
                document.getElementById('wrapper-slide-items').style.transform = "translateX(" + distance + "%)"
                this.visibleSlide++
            }else{
                document.getElementById('wrapper-slide-items').style.transform = "translateX(0)"
                this.visibleSlide = 0
            }
        },
        prev(){
            if(this.visibleSlide > 0){
            const distance = (this.visibleSlide-1) * (-100)
                document.getElementById('wrapper-slide-items').style.transform = "translateX(" + distance + "%)"
                this.visibleSlide--
            }else{
                const distance = (this.images.length-1) * (-100) 
                document.getElementById('wrapper-slide-items').style.transform = "translateX(" + distance + "%)"
                this.visibleSlide = this.images.length-1
            }
        },
        
        paginationActive(index){
            const distance = index * (-100)
            document.getElementById('wrapper-slide-items').style.transform = "translateX(" + distance + "%)"
            this.visibleSlide = index

        }
        
    },
    async created(){
    
        try {
            const {data} = await this.$axios.get("https://4my1q6hsyo.api.quickmocker.com/product/" + this.$route.params.id)
            this.car = data
            this.images = data.gallery
            //una vez se cargan los elementos del api transformo loading a true para quitar mi pantalla de carga y mostras mis elementos
            this.loading = true
        
        } catch (error) {
            console.log(error)
        }

    }
}
</script>

<style scoped>
.content{
    min-height:610px;
}
.route-box{
    font-size: 13px;
    height:62px;
    background-color:#ccc;
    margin-top:100px;
}
.back-to-store{
    color:#c3002f;
}
.icon-tabler{
    margin-bottom:2px;
}
.pruchase-form input{
    border:solid 1px #c1c1c1;
    border-radius:10px;
}
.pruchase-form button{
    background-color:#c3002f;
    border-radius:10px;
    color: #fff;
}
.desc-gallery{
    font-size:1rem ;
    color:#c3002f;
}
</style>