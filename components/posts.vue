<template>
    <div class="card">
        <NuxtLink :to="'./posts/' + id">
            <div class="">
                <img class="" :src="`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${img}`" alt="imagen ilustrativa del automovil">
            </div>
            <div class="">
                <p class="">{{model}}</p>

                <div class=" ">
                <p class="">PRECIO DESDE</p>
                <p class="">${{precio}} USD</p>
                </div>

                <div class="" >VER DETALLES DEL MODELO</div>

                <p>{{name}}</p>
                <p class="">
                Imágenes meramente ilustrativas no reportando la realidad exacta,
                pudiendo existir variaciones en la percepción.
                </p>

                <p></p>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name:"Cards",
    props:['precio', 'name', 'desc','img','model','id',],
    
}
</script>

<style>
.card{
    height: 400px;
    width:340px;
    border: black solid 1px;
}
</style>