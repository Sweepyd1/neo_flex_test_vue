<script setup>
import vertical_line_svg from '@/svg/vertical_line_svg.vue';
import { defineProps, ref, defineEmits } from 'vue';
import { useBasketStore } from '@/store/basket';
import { toRaw } from 'vue';
import { useRouter } from 'vue-router';

const basketStore = useBasketStore()
const count = ref(1)
const router = useRouter()

const props = defineProps({
    img: String,
    title: String,
    price: Number,
    short_description: String,
    full_description: String,
})
function addInBasket() {

const headphone = { img: props.img, title: props.title, price: props.price, rate: props.rate, count: count.value }
basketStore.addInList(headphone)
const list_of_headphones = toRaw(basketStore.getList());
router.push("/basket")
console.log(list_of_headphones)

}
const emit = defineEmits(['closeWindow'])


function closeWindow(){
    emit('closeWindow')
}
</script>


<template>
    <div class="container_window" @click="closeWindow">
        <div class="window" @click.stop>

            <div class="image">
                <img :src=props.img>

            </div>
            <div class="title">
                <span>{{ props.title }}  ({{ props.price }}₽)</span>

            </div>
            <div class="description">
                <div class="short_description">
                  <vertical_line_svg class="line-svg"></vertical_line_svg>
                  <span>{{ props.short_description }}</span>
                </div>
                <div class="full_description">
                  <vertical_line_svg class="line-svg"></vertical_line_svg>
                  <span>{{ props.full_description }}</span>
                </div>
              </div>

              <div class="buy">
                <div class="btn_by" @click="addInBasket">
                    <span>Купить</span>

                </div>

              </div>




        </div>
    </div>
</template>

<style scoped lang="scss">
span {
  font-family: 'Montserrat', sans-serif;

  
  
}

.container_window {
    position: fixed;
    width: 100%;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);


    .window {
        width: 30%;
        height: auto;
        background: white;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;

        padding-bottom: 20px;
        opacity: 1;


        @media(max-width: 1000px) {
          width: 60%;
        }
        .image {
            display: flex;
            align-items: center;
            width: 100%;
            
            justify-content: center;
            margin-top: 30px;

            img {
                height: 25vh;
              
                @media(max-width: 1100px) {
                  
                  height: 16vh;
                }
                @media(max-width: 800px) {
                  
                  height: 15vh;
                }

            }
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 25px;
            text-align: center;

            span{
              font-size: 25px;
              @media(max-width: 950px) {
                font-size: 20px;
              }
            }
        }

        .description {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 15px;
          
            .short_description,
            .full_description {
              display: flex;
              align-items: center;
          
              .line-svg {
                flex-shrink: 0; 
                width: 30px; 
                height: auto; 
              }
          
              span {
                margin-left: 8px; 
                @media(max-width: 950px) {
                  font-size: 15px;
                }
              }
            }
          }

          .buy{
            display: flex;
            align-items:center ;
            justify-content: center;
            margin-top: 10px;
            .btn_by{
                width: 50%;
                height: 5vh;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;


                span{
                    color: white;

                }
            }
        
            

          }
    }
}

</style>