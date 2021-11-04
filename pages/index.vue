<template>
  <div id="container"  class="content">
  <div class="grid grid-cols-2 w-11/12 lg:w-4/5 mx-auto">
      <div class="description-wrapper col-span-2 lg:col-span-1">
          <div>
              <p class="text-5xl sm:text-6xl title SFDisplay-black">AHORA ES ONLINE</p>
          </div>
          <div class="description-text SFDisplay"><p>Con Nissan Store, podés acceder a tu nuevo 0km con todos los servicios asociados desde la comodidad de tu sofá. Probanos!</p></div>
          <nuxt-link to="/posts"><div class="align-text-bottom description-button SFDisplay text-sm sm:text-base">INGRESAR A NISSAN STORE</div></nuxt-link>
      </div>
  </div>
  </div>
</template>

<script>
export default {



  head(){
    return{
      title: 'Nissan Store',
      meta: [
        {
          name: "description",
          content: "webSite TestPasantias"
        }
      ],
      htmlAttrs:{
        lang:'es'
      }
    }
  }
  
}
</script>

<style>
.content{
  background-image: url("../static/Banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  width: 100%;
  height: 810px;
}
.contentPosts{
  min-width: 810px;
}
@media (max-width: 991px){
    .content {
        background-position-x: left;
        background-size: cover;
    }
}
.description-wrapper{
  margin-top:215px;
  max-width: 620px;
}
.title{
  color: #c3002f;
  line-height: 61px;
}
.description-text{
  font-size: 25px;
  color: #343434;
  font-weight: 300;
}
.description-button{
  background-color: #c3002f;
  background-image: url("../static/arrow-right-line.svg");
  background-repeat: no-repeat;
  background-position: 260px;
  color: #fff;
  width:300px;
  height: 60px;
  border-radius: 10px;
  margin-top: 53px;
  text-align: left;
  padding-left: 40px;
  padding-top:20px;
}
@media screen and (min-width: 640px) {
  .description-button{
  width:350px;
  background-position: 300px;
  padding-top:1.075rem;
}
}

</style>


