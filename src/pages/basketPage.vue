<script setup>
import headerComponent from '@/components/headerComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import cart_in_basket from '@/components/cart_in_basket.vue';

import { useBasketStore } from '@/store/basket';
import { onMounted, ref, toRaw } from 'vue';
const basketStore = useBasketStore()

const cleanArray = ref()

onMounted(()=>{
    console.log(basketStore.getCount())
    cleanArray.value = toRaw(basketStore.getList());
    console.log(cleanArray.value)
})

function plusOne(index) {
  cleanArray.value[index].count +=1 ;
}
function minusOne(index) {
  cleanArray.value[index].count -=1 ;
}


console.log(basketStore.getTotalPrice())

</script>

<template>
    <div class="page">
        <div class="container">
            <headerComponent></headerComponent>
            <div class="main">
                <div class="title">
                    <span>Корзина</span>
                </div>
                <div class="list_of_headphones">
                    <cart_in_basket v-for="(headphone, index) in cleanArray" :key="index"
                    :img="headphone.img" :count="headphone.count" :title="headphone.title" :price="headphone.price" :rate="headphone.rate"
                    @updateCount="plusOne(index)"
                    @minusCount="minusOne(index)"
                    
                    
                    />
                   

                    <div class="total_price_block">
                        <div class="total_price">
                            <div class="buy_button">
    
                            </div>
                        </div>
    
                    </div>
                  
                    
                </div>

               
                
            </div>

            <div class="botom_bar">
                <bottomBar></bottomBar>
                </div>

          
         
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
   min-height: 98vh;
    height: auto;
    
    background-color: #EAEAEA;

    .container {
        margin-left: 8%;
        flex: 1;
       
        width: 85%;
        

        .main{
           
            display: flex;
            flex-direction: column;
            min-height: 77vh;
            height: auto;
          
        }


        .title {
            margin-top: 30px;
        }

        .title span {
            color: #1C1C27;
            font-weight: 600;
            font-size: 20px;
        }
    }



    .list_of_headphones {
      
        display: grid;
        grid-template-columns: 1fr; 
        gap: 20px; 

        
  
       
       
        
    
       
    }

    .total_price_block {
        position: absolute;
        left: 60%;
        width: 350px; 
        height: 180px;
        margin-top: 25px;
        transform: translateX(-50%); /* Центрирование по горизонтали */
    }
    
    .total_price {
        width: 100%;
        height: 58%;
        background-color: #FFFFFF;
        border-radius: 30px;
        position: absolute; /* Размещение внутри родительского элемента */
        top: 0; /* Верхний край */
    }
    
    .buy_button {
        width: 100%;
        height: 58%;
        background-color: black;
        border-radius: 30px;
        position: absolute; /* Размещение внутри родительского элемента */
        bottom: 0; /* Нижний край */
    }
    

    .bottom_bar{
     
        position: sticky; 
        bottom: 0;
        left: 50;
        width: 100%;
        
    }

}
</style>