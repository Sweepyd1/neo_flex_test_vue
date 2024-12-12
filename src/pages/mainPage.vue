<script setup>
import cart_Component from '@/components/cartComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import headerComponent from '@/components/headerComponent.vue';
import AboutHeadphone from '@/components/modal_window/AboutHeadphone.vue';

import {  ref } from 'vue';

const isOpenModalWindow = ref(false);
const selectedHeadphone = ref({});


function openWindow(headphone) {
  selectedHeadphone.value = headphone;
  isOpenModalWindow.value = true;
}

function closeWindow(){
    isOpenModalWindow.value = false;


}
let wired_headphones_list = ref([
    {
        img: "/images/image_1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        isChanged: true,
        oldPrice: 3527,
        short_description: "High-quality wired headphones with excellent sound.",
        full_description: "The Apple BYZ S852I headphones provide an immersive audio experience with deep bass and clear treble. Designed for comfort, they are perfect for long listening sessions."
    },
    {
        img: "/images/image_2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0,
        short_description: "Classic EarPods with a comfortable fit.",
        full_description: "Apple EarPods are designed to fit comfortably in your ears while delivering high-quality sound. Their unique design allows for a more natural audio experience."
    },
    {
        img: "/images/image_3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0,
        short_description: "Classic EarPods with a comfortable fit.",
        full_description: "Apple EarPods are designed to fit comfortably in your ears while delivering high-quality sound. Their unique design allows for a more natural audio experience."
    },
    {
        img: "/images/image_4.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0,
        short_description: "High-quality wired headphones with excellent sound.",
        full_description: "The Apple BYZ S852I headphones provide an immersive audio experience with deep bass and clear treble. Designed for comfort, they are perfect for long listening sessions."
    },
    {
        img: "/images/image_5.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0,
        short_description: "Classic EarPods with a comfortable fit.",
        full_description: "Apple EarPods are designed to fit comfortably in your ears while delivering high-quality sound. Their unique design allows for a more natural audio experience."
    },
    {
        img: "/images/image_6.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        isChanged: false,
        oldPrice: 0,
        short_description: "Classic EarPods with a comfortable fit.",
        full_description: "Apple EarPods are designed to fit comfortably in your ears while delivering high-quality sound. Their unique design allows for a more natural audio experience."
    },
]);

let wireless_headphones_list = ref([
    {
        img: "/images/image_7.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0,
        short_description: "Wireless earbuds with seamless connectivity.",
        full_description: "Apple AirPods offer a truly wireless experience, providing high-quality sound and easy connectivity to all your Apple devices. Enjoy music and calls without the hassle of wires."
    },
    {
        img: "/images/image_8.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0,
        short_description: "Affordable wireless headphones with great sound.",
        full_description: "The GERLAX GH-04 headphones deliver impressive sound quality at an affordable price, making them perfect for everyday use. Enjoy your favorite music without the hassle of wires."
    },
    {
        img: "/images/image_9.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        isChanged: false,
        oldPrice: 0,
        short_description: "Stylish wireless headphones with powerful bass.",
        full_description: "BOROFONE BO4 headphones combine style and performance, featuring powerful bass and a sleek design that makes them perfect for any occasion. Experience music like never before."
    },
]);

</script>

<template>
    <AboutHeadphone 
    v-if="isOpenModalWindow"
    :img="selectedHeadphone.img"
    :title="selectedHeadphone.title"
    :price="selectedHeadphone.price"
    :short_description="selectedHeadphone.short_description"
    :full_description="selectedHeadphone.full_description"
    @close-window="closeWindow"
    
    
    />
    <div class="page">
        


        <div class="container">
            <headerComponent
            
            
            
            />
            <div class="main">
                <div class="title">
                    <span>Наушники</span>
                </div>

                <div class="headphones">
                    <cart_Component v-for="(headphone, index) in wired_headphones_list" :key="index"
                        :img="headphone.img" 
                        :title="headphone.title" 
                        :price="headphone.price" 
                        :rate="headphone.rate" 
                        :oldPrice="headphone.oldPrice" 
                        :isChanged="headphone.isChanged" 
                        @open-modal="openWindow(headphone)"
                        />





                </div>

                <div class="wireless_headphones_title">
                    <span>Беспроводные Наушники</span>
                    <div class="headphones">

                        <cart_Component v-for="(headphone, index) in wireless_headphones_list" :key="index"
                            :img="headphone.img" 
                            :title="headphone.title" 
                            :price="headphone.price"
                            :rate="headphone.rate" 
                            :oldPrice="headphone.oldPrice" 
                            :isChanged="headphone.isChanged"
                            @open-modal="openWindow(headphone)" />


                    </div>

                </div>



            </div>
            <bottomBar
            :addKaz="false"
            
            />

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

        
        @media (max-width: 1000px) {
            margin-left:2% ;
            width: 97%;
            
        }
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