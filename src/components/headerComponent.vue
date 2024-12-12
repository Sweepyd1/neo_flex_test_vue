<template>
    <div class="header">
        <div class="logo" @click="goHome">
            <span>QPICK</span>

        </div>

        <div class="header_right">


            <div class="favourities">
                <favourities_svg></favourities_svg>
                <div class="notification-badge">3</div>

            </div>
            <div class="basket" @click="goBasket">
                <basket_svg></basket_svg>
                <div class="notification-badge">
                    {{ countHeadphone }}
                </div>

            </div>

        </div>





    </div>
</template>

<script setup>

import basket_svg from '@/svg/basket_svg.vue';
import favourities_svg from '@/svg/favourities_svg.vue';
import { useRouter } from 'vue-router';
import { useBasketStore } from '@/store/basket';
import {  computed } from 'vue';

const basketStore = useBasketStore()
const router = useRouter()

function goHome(){
    router.push("/")
}

function goBasket(){
    router.push("/basket")
}

const countHeadphone = computed(() => {
    return basketStore.getCountFromList();
});


</script>

<style scoped lang="scss">
span{
    font-family: 'Montserrat', sans-serif;
}
.header {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    .logo span{
        font-size: 25px;
        font-weight: 700;
        color: #101010;
        
    }
    .logo:hover{
        cursor: pointer;
    }


}

.header_right {
    display: flex;
    gap: 25px;

 
}

.favourities {
    position: relative;
  
    display: inline-block;
  
    cursor: pointer;


    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }


    :hover {
        animation: bounce 1s;
    }

    
    

    
}
.basket{
    position: relative;
    display: inline-block;
    cursor: pointer;


    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }


    :hover {
        animation: bounce 1s;
    }


}
.notification-badge {
    position: absolute;
   
    top: 0;
   
    right: 0;
   
    width: 20px;
   
    height: 20px;
    
    background-color: #FFA542;
    color: white;
  
    border-radius: 50%;
   
    display: flex;
   
    justify-content: center;
   
    align-items: center;
   
    transform: translate(50%, -50%);
    
    font-size: 12px;
  
    font-weight: bold;
    pointer-events: none;

   
   
}


</style>