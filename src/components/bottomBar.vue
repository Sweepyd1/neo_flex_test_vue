<script setup>
import lang_svg from '@/svg/lang_svg.vue';
import vk_svg from '@/svg/vk_svg.vue';
import telegram_svg from '@/svg/telegram_svg.vue';
import viber_svg from '@/svg/viber_svg.vue';
import { ref,defineProps } from 'vue';
import { useRouter } from 'vue-router';


const isRussian = ref(true)
const isEnglish = ref(false)
const isKaz = ref(false)

const router = useRouter()

function goBasket(){
    router.push("/basket")
}


const props = defineProps({
    addKaz:Boolean,
})

function changeLanguage(lang) {
      if (lang === 'ru') {
        isRussian.value = true;
        isEnglish.value = false;
        isKaz.value = false;
      } else if (lang === 'en') {
        isRussian.value = false;
        isEnglish.value = true;
        isKaz.value = false;
      }
      else if(lang==='kaz'){
        isKaz.value = true;
        isRussian.value = false;
        isEnglish.value = false;
        
      }
    }



function openSocialNetwork(socialNetwork){
    if (socialNetwork === 'vk'){
        window.open("https://vk.com/neoflex_ru")
    }
    else if(socialNetwork === 'tg'){
        window.open("https://t.me/neoflex_neostudy_bot")
    }
    else if(socialNetwork === 'viber'){
        window.open("https://vk.com/neoflex_ru")

    }

    

    
}

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
                <div @click="goBasket">
                    <span >Корзина</span>
                </div>
                <div >
                    <span>Контакты</span>
                </div>
    
            </div>
            <div class="terms">
                <span>Условия сервиса</span>
                <div class="language">
                    <lang_svg></lang_svg>
                    <span :class="{ active: isKaz }" @click="changeLanguage('kaz')" v-if="props.addKaz">Kaз</span>
                    <span :class="{ active: isRussian }" @click="changeLanguage('ru')">Рус</span>
                    <span :class="{ active: isEnglish }" @click="changeLanguage('en')">Eng</span>
    
                </div>
            </div>
    
            <div class="social_network">
                <div class="vk" @click="openSocialNetwork('vk')">
                    <vk_svg></vk_svg>
                </div>
                <div class="tg" @click="openSocialNetwork('tg')">
                    <telegram_svg></telegram_svg>
                </div>
                <div class="viber"  @click="openSocialNetwork('viber')">
                    <viber_svg></viber_svg>
                </div>
               
               
               

               
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

    @media (max-width: 700px) {
        padding-bottom: 35%;

     }
    

    .inside {
        padding-left: 30px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        
       
        @media (max-width: 700px) {
           flex-direction: column;
           align-items: center;
           gap: 10px;
        }
   
    }

    .logo span{
        font-size: 25px;
        font-weight: 700;
        color: #101010;
        cursor: pointer;
        
    }

 
    .actions{
        display: flex;
        flex-direction: column;
        gap: 10px;
        cursor: pointer;

        @media (max-width: 700px) {
            flex-direction: row;
            
         }
        
       
    }

    .terms{
        display: flex;
        flex-direction: column;
        gap: 35px;

        .language{
            display: flex;
            gap: 17px;
            
            span{
                cursor: pointer;
            }

            .active {
                color: #FFA542;
              }
        }
    }

    .social_network{
        display: flex;
        gap: 18px;
      
        height: 3vh;
        align-items: center;
        margin-right:26px ;


         .vk, .tg, .viber{
         
            :hover {
                transform: translateY(-5px); 
               cursor: pointer;
            }
        }
        
       

     
       
    }
  
   
}
</style>
