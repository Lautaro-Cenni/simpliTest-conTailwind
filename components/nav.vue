<template>
    <div class="nav-container w-full">
        <div :class="[show ? 'navbar-open': 'navbar-close', 'nav', 'flex', 'flex-row', 'flex-nowrap', 'gap-4']">
            <nuxt-link to="/">
                <div class="flex-initial w-min">
                    <img  src="../static/brand.svg" alt="brand">
                </div>
            </nuxt-link>
            <div class="flex-auto flex justify-between">
                <ul class="hidden md:grid py-9 grid-flow-col ">
                    <li class="col-auto text-left">
                        <nuxt-link class="no-underline p-3" to="/posts">
                            <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">VEHÍCULOS</span>
                        </nuxt-link>
                    </li>
                    <li class="col-auto text-left">
                        <nuxt-link class="no-underline p-3" to="/">
                            <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">DESCUBRÍ NISSAN</span>
                        </nuxt-link>
                    </li>
                </ul>
                <div class="hidden md:flex flex-row-reverse py-6 mr-4">
                    <form>
                        <input class="search" placeholder="BUSCAR POR MODELO O VEHÍCULO" type="text">
                    </form>
                </div>
                <div class="md:hidden block">
                    <div class="mobile-icon">
                        <i class="ri-menu-line text-3xl" @click="showMenu"></i>
                    </div>
                    <form class="search-form">
                        <input class="search-mobile" placeholder="BUSCAR POR MODELO O VEHÍCULO" type="text">
                    </form>
                </div>
            </div>
            
        </div>
        
        <!-- menu desplegable -->
        <div :class="[show ? 'show' : 'hide',' md:hidden', 'grid', 'grid-flow-row', 'z-10', 'mobile-collapse', 'w-full', 'bg-white'] ">
            <ul v-show="show" class="mobile-nav-menu">
                <li class="pt-4 pb-3.5">
                    <span class="SFDisplay text-sm tracking-widest font-semibold text-gray-400">¿CUÁL VA A SER TU PRÓXIMO NISSAN?</span>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">Vehículos</span>
                    </nuxt-link>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">Descubrí Nissan</span>
                    </nuxt-link>
                </li>
                <hr>
                <li class="pt-4 pb-3.5">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay text-sm tracking-widest font-semibold text-gray-400">COTIZACIÓN DE VEHÍCULOS</span>
                    </nuxt-link>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800 align-bottom"><i class="ri-information-line font-300"></i> informcaión Legal</span>
                    </nuxt-link>
                </li>
                <li class="pt-4 pb-3.5">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay text-sm tracking-widest font-semibold text-gray-400">RALITOR S.A.</span>
                    </nuxt-link>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">nissan.com.uy</span>
                    </nuxt-link>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">Políticas de Cookies</span>
                    </nuxt-link>
                </li>
                <li class="pt-4 pb-3.5">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay text-sm tracking-widest font-semibold text-gray-400">AYUDA AL CLIENTE</span>
                    </nuxt-link>
                </li>
                <li class="pb-3">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay font-semibold text-sm tracking-wide text-gray-800">Políticas de Privacidad</span>
                    </nuxt-link>
                </li>
                <hr>
                <li class="py-4">
                    <nuxt-link class="no-underline" to="/">
                        <span class="SFDisplay text-sm tracking-widest font-semibold text-gray-400">NISSAN SOCIAL</span>
                    </nuxt-link>
                </li>
                <li>
                    <div class="icons-redes flex flex-row gap-6 text-gray-700 text-xl">
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-twitter-fill"></i>
                        <i class="ri-youtube-fill"></i>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
        // variable para menu desplegable en version movil
        show: false,
        }
    },
    methods: {
        showMenu(){
            if(this.show === false){
                this.show = true
                document.body.style.overflow = "hidden"
            }
            else{
                this.show = false
                document.body.style.overflow = "auto"
            }
        },

    }

}
</script>

<style scoped>
.nav-container{
    position:absolute;
    top:0;
}
.nav img{
    max-width:none;
    min-height:100px;
}
.nav{
    overflow: visible;
    max-height:100px;
}
.search{
    background-image: url("../static/search.svg");
    background-repeat: no-repeat;
    background-position: 15px;
    border: none;
    outline:none !important;
    border-radius: 10px;
    background-color: hsla(0,0%,100%,.8);
    width: 323px;
    height: 60px;
    float: right;
    padding-left: 50px;
    margin-right:1rem;
    font-size: 13px;
}
/*mobile*/

.mobile-collapse{
    position:fixed;
    top:100px;
    transition: all 0.8s;
    transition-timing-function: ease;
}

.mobile-icon{
    position:absolute;
    width:15px;
    top:20px;
    right:40px;
}
.search-form{
    width:35px;
    position:absolute;
    top:2px;
    right:65px;
    border-radius:10px;
    padding:5px;
}
.search-form input{
    position:relative;
    background:transparent;
    width:30px;
    height:60px;
    border:none;
    padding-left:40px;
    background-image: url("/search.svg");
    background-repeat: no-repeat;
    background-position: 10px;
    background-size: 24px;
}
.search-mobile:focus, .search-mobile:active{
    background-position: 10px;
    border-radius: 10px;
    outline:none !important;
    background-color: hsla(0,0%,100%,.8);
    width: 323px;
    float: right;
    font-size: 13px;
    transition: 0.3s;
}

.mobile-nav-menu li{
    padding-left: 2rem;
}
ul hr{
    border:0;
    border-top: 1px solid rgba(0,0,0,.1);
    margin-top:0.5rem !important;
    margin-bottom:0.5rem !important;
}
/*mobile animations*/
.navbar-open{
    background-color: #fff;
    width: 100%;
    top: 0;
    left: 0;
    transition: background-color;
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;
}
.navbar-close{
    background-color: transparent;
    transition: background-color;
    transition-property: background-color;
    background-position-y: 0;
    transition-duration: 0.8s;
    transition-timing-function: ease;
}
.show{
    height: 100vh;
    overflow: scroll;
}
.hide{
    height:0;
    overflow: hidden;
}
/* query */
@media screen and (max-width:570px){
    .search-mobile:focus, .search-mobile:active{
        width:200px;
        height: 45px;
        top:7px;
    }
}


</style>

