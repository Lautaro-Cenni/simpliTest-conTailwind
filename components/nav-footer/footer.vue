<template>
    <footer class="bg-black SFDisplay text-white">
        <div class="flex flex-wrap md:justify-center flex-direction-row">
            <div class="md:w-10/12 xl:w-9/12 py-8 px-3 text-xl text-left footer-top gap-4  ml-8 md:mx-0">
                <div class="flex flex-wrap flex-direction-row md:block py-6 text-2xl ">
                    <span class="w-full md:w-max font-black SFDisplay-heavy leading-6">Nissan.</span>
                    <span class="w-full md:w-max "> Innovation that excites.</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <ul class="grid-span-1">
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class=" tracking-widest font-semibold text-gray-400">COTIZACIÓN DE VEHÍCULOS</span>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class="font-semibold tracking-wide align-bottom"><i class="ri-information-line font-300"></i> informcaión Legal</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <ul>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class=" tracking-widest font-semibold text-gray-400">RALITOR S.A.</span>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class="font-semibold tracking-wide ">nissan.com.uy</span>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class="font-semibold tracking-wide ">Políticas de Cookies</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <ul>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class="tracking-widest font-semibold text-gray-400">AYUDA AL CLIENTE</span>
                            </nuxt-link>
                        </li>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class="font-semibold tracking-wide ">Políticas de Privacidad</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <ul>
                        <li class="">
                            <nuxt-link class="no-underline" to="/">
                                <span class=" tracking-widest font-semibold text-gray-400">NISSAN SOCIAL</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <div class="icons-redes flex flex-row gap-3 text-white text-lg">
                                <i class="ri-facebook-fill"></i>
                                <i class="ri-instagram-line"></i>
                                <i class="ri-twitter-fill"></i>
                                <i class="ri-youtube-fill"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pb-10 rights-divider w-screen"></div>
            <div class=" md:w-10/12 xl:w-9/12 footer-copyright ml-8 md:mx-0">
                <p class="text-gray-400 w-full  text-left">© 2020 SIMPLICAR. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>

footer {
    position:static;
    width: 100%;
    height:585px;
}
.rights-divider{
    border-top: 1px solid #272727;
}
.footer-top div ul{
    color: #fff;
    font-size: 13px;
    font-weight: 400;
}
@media screen and (min-width: 768px){
    footer {
    height: 315px;
    }
}

</style>