<template>
    <div class="headphone">
        <div class="trash">
            <trash_svg></trash_svg>
        </div>
        <div class="image">
            <img :src="props.img">


            <div class="info">
                <div class="name">
                    <span>{{props.title}}</span>

                </div>
                <div class="price">
                    <span>{{props.price}}</span>
                </div>

            </div>

        </div>
        <div class="count_of_headphone_and_total_price">

            <div class="count_of_headphone">
                <div class="minus">
                    <minus_svg></minus_svg>

                </div>
                <div class="count">
                    <span>{{props.count}}</span>

                </div>
                <div class="plus" @click="plusOne" >
                    <plus_svg></plus_svg>

                </div>
            </div>

            <div class="total_price">
                <span> 2 927 ₽</span>

            </div>

        </div>
    </div>

</template>

<script setup>
import minus_svg from '@/svg/minus_svg.vue';
import plus_svg from '@/svg/plus_svg.vue';
import trash_svg from '@/svg/trash_svg.vue';
import { useBasketStore } from '@/store/basket';
import { defineProps, defineEmits } from 'vue';

const basketStore = useBasketStore()

const props = defineProps(
    {
        img:String,
        title:String,
        price:Number,
        count:Number,
      

    }
)
const emit = defineEmits(['updateCount']);
function plusOne() {
  emit('updateCount', props.count + 1); 
  const headphone = {img:props.img,title:props.title, price:props.price, rate:props.rate, count:props.count}
  basketStore.addInList(headphone)
}
</script>

<style scoped lang="scss">
span {
    font-family: 'Montserrat', sans-serif;
}

.headphone {
    width: 40%;
    height: auto;
    background-color: white;
    border-radius: 30px;
    position: relative;
    margin-top: 20px;
    padding-bottom: 10px;

    .trash {
        position: absolute; 
        top: 10px; 
        right: 10px;
        width: 35px; 
        height: 35px;
        background-color: transparent; 
        display: flex;
        align-items: center;
        justify-content: center;

      
        trash_svg {
            width: 100%; 
            height: auto; 
        }
    }



    .image {
        display: flex;
        align-items: center;
        gap: 20px;
        padding-left: 18px;
        padding-top: 10px;

        .info{
            display: flex;
            flex-direction: column;
            gap: 12px;

            .name span{
                font-size: 17px;
                font-weight: 500;
                color: #1C1C27;
            }


            .price span{
                color: #AAAAAA;
                font-weight: 600;
                font-size: 15px;


            }
        }

        
      


       




        img {
            width: 20%;
            height: 15vh;


         
        }

    }


    .count_of_headphone_and_total_price {
        display: flex;
        justify-content: space-between;

        .count_of_headphone {
            display: flex;
            padding-left: 25px;
            gap: 25px;
            align-items: center;

            .count{
                color: black;
                font-weight: 600;
                font-size: 17px;
            }

            .minus,
            .plus {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                background-color: #FFCE7F;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .total_price {
            margin-right: 30px;

            span{
                color: #1C1C27;
                font-size: 15px;
                font-weight: 600;

            }
        }


    }








}

</style>