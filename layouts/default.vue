<template>
<div id="app">
  <Nav/>
  <Nuxt/>
  <Footer/>
</div>
</template>

<script>
import Nav from "../components/nav-footer/nav.vue"
import Footer from "../components/nav-footer/footer.vue"

export default {
  components: {
    Nav,Footer,
  },
}
</script>

<style>
@import '../assets/css/fonts.css';
</style>
