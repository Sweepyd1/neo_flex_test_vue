<script setup>
import lang_svg from '@/svg/lang_svg.vue';
import vk_svg from '@/svg/vk_svg.vue';
import telegram_svg from '@/svg/telegram_svg.vue';
import viber_svg from '@/svg/viber_svg.vue';

</script>

<template>
    <div class="bottom_bar">
        <div class="inside">
    
    
    
            <div class="logo">
                <span>QPICK</span>
    
            </div>
    
            <div class="actions">
    
               
                <div >
                    <span>Избранное</span>
                </div>
                <div >
                    <span>Корзина</span>
                </div>
                <div >
                    <span>Контакты</span>
                </div>
    
            </div>
            <div class="terms">
                <span>Условия сервиса</span>
                <div class="language">
                    <lang_svg></lang_svg>
                    <span>Рус</span>
                    <span>Eng</span>
    
                </div>
            </div>
    
            <div class="social_network">
                <vk_svg></vk_svg>
                <telegram_svg></telegram_svg>
                <viber_svg></viber_svg>
            </div>
    
        </div>
    
    </div>
</template>


<style scoped lang="scss">
span{
    font-family: 'Montserrat', sans-serif;
}
.bottom_bar {
    margin-top: 20px;
    width: 100%;
    border-radius: 30px 30px 0px 0px;
    background-color: white;
    height: 15vh;
   
    

    .inside {
        padding-left: 30px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
      
   
    }

    .logo span{
        font-size: 25px;
        font-weight: 700;
        color: #101010;
        
    }

 
    .actions{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .terms{
        display: flex;
        flex-direction: column;
        gap: 35px;

        .language{
            display: flex;
            gap: 17px;
        }
    }

    .social_network{
        display: flex;
        gap: 18px;
      
        height: 3vh;
        align-items: center;
        margin-right:26px ;
       
    }
  
   
}
</style>
