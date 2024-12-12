<script setup>
import headerComponent from '@/components/headerComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import cart_in_basket from '@/components/cart_in_basket.vue';
import paymentForm from '@/components/modal_window/paymentForm.vue';
import { useBasketStore } from '@/store/basket';
import { onMounted, ref, computed } from 'vue';

const basketStore = useBasketStore();
const isOpenPaymentWindow = ref(false)
const cleanArray = ref([]);

onMounted(() => {
    cleanArray.value = basketStore.getList(); 
});


function plusOne(index) {
    cleanArray.value[index].count += 1; 
}


function minusOne(index) {
    if (cleanArray.value[index].count > 0) { 
        cleanArray.value[index].count -= 1; 
    }
}
function deleteFullElement(index){
    if (index >= 0 && index < cleanArray.value.length) {
      
        cleanArray.value.splice(index, 1);
    }



}

const totalPrice = computed(() => {
    let total_price = 0;
    for (let i = 0; i < cleanArray.value.length; i++) {
        const count = cleanArray.value[i].count; 
        const price = cleanArray.value[i].price; 
        const total_price_for_element = count * price; 

        total_price += total_price_for_element; 
    }
    return total_price;
});


function openPaymentWindow(){
    isOpenPaymentWindow.value = true;

}

function closeWindow(){
    isOpenPaymentWindow.value = false
}
</script>

<template>
   
    <div class="page">
       
        <div class="overlay" v-if="isOpenPaymentWindow"></div>

        <paymentForm v-if="isOpenPaymentWindow"
        @close-window="closeWindow"
        
        />

        
        
      
        <div class="container">
            
           
            <headerComponent></headerComponent>
            <div class="main">
                <div class="title">
                    <span>Корзина</span>
                </div>
                <div class="shopping_cart">
                    <div class="list_of_headphones">
                       
                        <cart_in_basket v-for="(headphone, index) in cleanArray" :key="index"
                            :img="headphone.img" :count="headphone.count" :title="headphone.title" 
                            :price="headphone.price" :rate="headphone.rate"
                            @updateCount="plusOne(index)"
                            @minusCount="minusOne(index)"
                            @deleteFullElement="deleteFullElement(index)"
                        />
                    </div>
                
                    <div class="total_price_block">
                        <div class="total_price">
                            <div class="total_price_text">
                                <span>ИТОГО</span>
                                <span>₽ {{totalPrice}}</span>
                            </div>
                            
                            <div class="buy_button" @click="openPaymentWindow">
                                <span>Перейти к оформлению</span>
                            </div>
                            
                        </div>
                       
                    </div>
                </div>

               
                
            </div>

            <div class="botom_bar">
                <bottomBar
                :addKaz="true"
                
                />
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
    position: relative;
    
    background-color: #EAEAEA;

    .overlay {
        position: fixed; 
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999; 
    }


    .container {
        margin-left: 8%;
        flex: 1;
        z-index: 1;
       
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



    .shopping_cart {
        display: flex;
        gap: 10%; 

        @media (max-width: 1212px) {
            flex-direction: column;
           
           
    
         }
    }
    
    .list_of_headphones {
        display: flex;
        flex-direction: column; 
        gap: 20px;
        width: 40%;

        @media (max-width: 1212px) {
            width: 100%;
           
    
         }
    }
    
    .total_price_block {
        width: 23%; 
        height: 120px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;

        @media (max-width: 1212px) {
            width: 100%;
            
           
    
         }
       
    }
    
    .total_price {
        width: 100%;
    
        background-color: #FFFFFF;
        border-radius: 30px;
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;

        .total_price_text{
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        
        span {
            padding: 20px;
            color: #000000;
            font-weight: 600;
        }
    }
    
    .buy_button {
        width: 100%;
        height: 53%;
        background-color: black;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    
        span {
            color: white;
            font-weight: 600;
        }
    }
    

    .bottom_bar{
     
        position: sticky; 
        bottom: 0;
        left: 50;
        width: 100%;
        
    }

}
</style>