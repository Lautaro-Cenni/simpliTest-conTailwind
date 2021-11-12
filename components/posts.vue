<template>
        <NuxtLink class="card" :to="'./posts/' + id">
            <div class="w-full">
                <img class="mx-auto" :src="`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${img}`" alt="imagen ilustrativa del automovil">
            </div>
            <div class="info SFDisplay-medium">
                <p class="model my-2">{{model}}</p>
                <div class="divider"></div>
                <div class="w-full mt-4 mb-4">
                    <div class="price-box flex flex-row justify-between mx-auto ">
                        <p class="price-text self-end">PRECIO DESDE</p>
                        <p class="price">${{precio}} USD</p>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="detalle-box flex flex-row justify-between justify-items-center w-full mt-4 mb-2">
                    <p class="ver-detalle">VER DETALLES DEL MODELO</p><i class="ri-arrow-right-line"></i>
                </div>
                <p class="aclaraciones">
                Imágenes meramente ilustrativas no reportando la realidad exacta,
                pudiendo existir variaciones en la percepción.
                </p>
            </div>
        </NuxtLink>
</template>

<script>
export default {
    name:"Cards",
    props:['precio', 'name', 'desc','img','model','id',],
    
}
</script>

<style scoped>
.card{
    max-height:400px;
    position:relative;
    max-width:350px;
    padding:10px;
    transition:150ms;
    border: solid transparent 1px;
}
.card:hover{
    transform:translateY(-10px);
    transition:300ms;
    border: solid rgba(150, 146, 146, 0.336) 1px;
    border-radius:10px;
    cursor: pointer;
}
.card img{
    height:160px;
}
.model{
    font-size: 25px;
    color: #343434;
    text-align: center;
    text-transform: uppercase;
}
.divider{
    border-top: 1px solid #e3e2e2;
}
.price-text{
    color: #c1c1c1;
    font-size: 12.8px;
}
.detalle-box{
    color: #c3002f;
}
.ver-detalle{
    font-size: 16px;
    text-align: left;
}
.aclaraciones{
    color: #c1c1c1;
    font-size: 12.8px;
}
</style>