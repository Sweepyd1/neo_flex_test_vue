<script setup>
import headerComponent from '@/components/headerComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import cart_in_basket from '@/components/cart_in_basket.vue';

import { useBasketStore } from '@/store/basket';
import { onMounted, ref, computed } from 'vue';

const basketStore = useBasketStore();

const cleanArray = ref([]); // Инициализируем как пустой массив

onMounted(() => {
    cleanArray.value = basketStore.getList(); // Загружаем список наушников из хранилища
});

// Функция для увеличения количества наушников
function plusOne(index) {
    cleanArray.value[index].count += 1; // Увеличиваем количество
}

// Функция для уменьшения количества наушников
function minusOne(index) {
    if (cleanArray.value[index].count > 0) { // Проверяем, чтобы количество не стало отрицательным
        cleanArray.value[index].count -= 1; // Уменьшаем количество
    }
}

// Вычисляемое свойство для итоговой цены
const totalPrice = computed(() => {
    let total_price = 0;
    for (let i = 0; i < cleanArray.value.length; i++) {
        const count = cleanArray.value[i].count; // Получаем количество
        const price = cleanArray.value[i].price; // Получаем цену
        const total_price_for_element = count * price; // Считаем общую цену для элемента

        total_price += total_price_for_element; // Суммируем общую цену
    }
    return total_price; // Возвращаем итоговую цену
});
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
                            <span>ИТОГО</span>
                            <span>₽ {{totalPrice}}</span>
                            <div class="buy_button">
                                <span>Перейти к оформлению</span>
    
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
        height: 62%;
        background-color: #FFFFFF;
        border-radius: 30px;
        position: fixed; /* Размещение внутри родительского элемента */
        top: 0; /* Верхний край */

        display: flex;
        align-items: start;
        justify-content: space-between;
        
        span{
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
        position: absolute; /* Размещение внутри родительского элемента */
        bottom: 0; /* Нижний край */
        display: flex;
        align-items: center;
        justify-content: center;

        span{
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