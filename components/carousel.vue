<template>
    <div class=" carousel relative flex flex-col col-span-full lg:col-span-3">
        <div class="text-center text-xl uppercase">{{car.model}} {{car.name}}</div>
        <div class="wrapper-slide-pagination flex flex-col">
            <div class="relative overflow-hidden flex flex-row">
                <div id="wrapper-slide-items" class="wrapper-slide-items relative flex mx-auto">
                    <img class="slide-item" v-for="(image, index) in images"
                    :key="image.id"
                    :index="index" :src="'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/' +image.large" alt="asd">
                </div>
                <button @click="prev" class="prev my-auto"><i class="ri-arrow-left-s-line w-10"></i>
                </button>
                <button @click="next" class="next my-auto"><i class="ri-arrow-right-s-line w-10"></i>
                </button>
            </div>
            <div class="pagination flex flex-row mx-auto h-auto w-full my-4 gap-x-6 justify-between">
                <label @click="paginationActive(index)"  :class="['bg-white','pagination-item', 'w-full', {activated:visibleSlide===index}]" v-for="(image,index) of images" :key="image.id"  :for="index">
                    <img class="mx-auto h-auto" :src="`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${image.thumbnail}`">
                </label>
            </div>
        </div>
        <div class="characteristics grid grid-cols-1 grid-rows-4 md:grid-cols-5 md:grid-rows-2 gap-3 SFDisplay">
                <div class="flex flex-row md:col-span-2"> <div class="icon engine"> </div> <p>{{car.detail.characteristics.engine}}</p></div>
                <div class="flex flex-row md:col-span-3"> <div class="icon warranty"> </div> <p>{{car.detail.characteristics.warranty}}</p></div>
                <div class="flex flex-row md:col-span-2"> <div class="icon gas-type"> </div> <p>{{car.detail.characteristics.gas_type}}</p></div>
                <div class="flex flex-row md:col-span-3"> <div class="icon car"> </div> <p>{{car.detail.characteristics.body}}</p></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['images', 'car', 'visibleSlide', 'paginatioValue'],
    methods: {
        next(){
            this.$emit('next')            
        },
        prev(){
            this.$emit('prev')
        },
        paginationActive(index){
            this.$emit('paginationActive', index)
        }
    }
}
</script>

<style scoped>

.wrapper-slide-items{
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    transition:all 0.4s;
}
.slide-item{
    position:relative;
    display:flex;
    flex-shrink:0;
    width:100%;
    height:100%;
}
.prev, .next{
    font-size: 65px;
    position:absolute;
    height:80%;
    top: calc(10%);
}
.next{
    right:calc(10% - 40px);
}
.prev{
    left:calc(10% - 40px);
}
.pagination-item{
    max-width: 140px;
    border:1px solid #eaeaea;
    border-radius:10px;
    overflow:hidden;
}
.pagination-item:hover{
    transform: scale(1.3);
    border-color: rgba(221, 4, 4, 0.685);
    cursor: pointer;
}
.activated {
    transform: scale(1.1);
    border-color: rgba(221, 4, 4, 0.685);
}
.characteristics{
    font-size:13px;
    color:#666;
}
.icon{
    background:cover;
    background-repeat:no-repeat;
    width:30px;
    height:30px;
}
.engine{
    background-image: url("../static/icons/icon-tachometer.svg");
}
.warranty{
    background-image: url("../static/icons/icon-file.svg");
}
.gas-type{
    background-image: url("../static/icons/icon-branch.svg");
}
.car{
    background-image: url("../static/icons/icon-car.svg");
}

</style>