<script setup>
import headerComponent from '@/components/headerComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import cart_in_basket from '@/components/cart_in_basket.vue';

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
                    <cart_in_basket></cart_in_basket>
                    <cart_in_basket></cart_in_basket>
                    <cart_in_basket></cart_in_basket>
                    <cart_in_basket></cart_in_basket>
                    <cart_in_basket></cart_in_basket>
                    <cart_in_basket></cart_in_basket>

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

    .total_price_block{
            background-color: red;
            position: absolute;
            left: 50%;
            width: 350px; 
            height: 120px;
            margin-top: 25px;

            .total_price{
                width: 100%;
                height: 100%;
                background-color: white;
                border-radius: 30px;

                .buy_button{
                    width: 100%;
                   
                    height: 50%;
                    background-color: black;
                    border-radius: 20px;
                 

                }
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