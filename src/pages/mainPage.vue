<script setup>


import cart_Component from '@/components/cartComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import headerComponent from '@/components/headerComponent.vue';
import {  ref } from 'vue';




let wired_headphones_list = ref([
    {
        img: "/images/image_1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        isChanged: true,
        oldPrice: 3527
    },
    {
        img: "/images/image_2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_4.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_5.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_6.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0
    },
]);


let wireless_headphones_list = ref([
    {
        img: "/images/image_7.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_8.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0
    },
    {
        img: "/images/image_9.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0
    },
]);



</script>

<template>
    <div class="page">


        <div class="container">
            <headerComponent></headerComponent>
            <div class="main">
                <div class="title">
                    <span>Наушники</span>
                </div>

                <div class="headphones">
                    <cart_Component v-for="(headphone, index) in wired_headphones_list" :key="index"
                        :img="headphone.img" :title="headphone.title" :price="headphone.price" :rate="headphone.rate" :oldPrice="headphone.oldPrice" :isChanged="headphone.isChanged" />





                </div>

                <div class="wireless_headphones_title">
                    <span>Беспроводные Наушники</span>
                    <div class="headphones">

                        <cart_Component v-for="(headphone, index) in wireless_headphones_list" :key="index"
                            :img="headphone.img" :title="headphone.title" :price="headphone.price"
                            :rate="headphone.rate" :oldPrice="headphone.oldPrice" :isChanged="headphone.isChanged" />


                    </div>

                </div>



            </div>
            <bottomBar></bottomBar>

        </div>




    </div>
</template>



<style scoped lang="scss">
span {
    font-family: 'Montserrat', sans-serif;
}

.page {
    width: 100%;
    height: auto;

    background-color: #EAEAEA;
    .container {
        margin-left: 8%;
        width: 85%;
    }
    .main {
        margin-left: 10px;
        margin-top: 20px;

        .title {
            margin-top: 27px;


            span {
                color: #838383;
                font-weight: 600;
            }
        }

        .headphones {
            display: grid;
          
            grid-template-columns: repeat(3, 1fr);
          
            gap: 30px;
            margin-top: 20px;

            @media (max-width: 1070px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 700px) {
                grid-template-columns: repeat(1, 1fr); 
            }
            
        }
        .wireless_headphones_title {

            margin-top: 27px;
            span {
                color: #838383;
                font-weight: 600;
            }
        }
    }
}



</style>