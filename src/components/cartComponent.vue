<template>
    <div class="headphone">
        <div class="image">
            <img :src="img">
        </div>

        <div class="title_and_price">
            <div class="title">
                <span>{{ props.title }}</span>

            </div>
            <div class="price">
                <span>{{ props.price }} ₽</span>
                <div class="old_price" v-if="props.isChanged">
                    <span>{{props.oldPrice}}₽</span>

                </div>


            </div>
        </div>

        <div class="stars_and_buy">
            <div class="count_stars">
                <stars_svg></stars_svg>

                <span>{{ props.rate }}</span>

            </div>


            <div class="buy" @click="addInBasket">
                <span>Купить</span>
            </div>


        </div>



    </div>

</template>

<script setup>
import stars_svg from '../svg/stars_svg.vue';
import { defineProps, ref } from 'vue';
import { useBasketStore } from '@/store/basket';
import { toRaw } from 'vue';
import { useRouter } from 'vue-router';

const basketStore = useBasketStore()
const count = ref(1)
const router = useRouter()

function addInBasket() {

    const headphone = { img: props.img, title: props.title, price: props.price, rate: props.rate, count: count.value }
    basketStore.addInList(headphone)
    const cleanArray = toRaw(basketStore.getList());
    router.push("/basket")

    console.log(cleanArray);




}



const props = defineProps(
    {
        img: String,
        title: String,
        price: Number,
        rate: Float32Array,
        count: Number,
        oldPrice:Number,
        isChanged:Boolean,


    }
)

</script>

<style scoped lang="scss">
.headphone {
    background: white;
    width: 100%;
    height: 40vh;
    border-radius: 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        padding-bottom: 30px;
    }



    .image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 5px;




        img {
            margin-top: 20px;
            height: 23vh;



        }

        .image:hover {
            margin-bottom: 20px;
        }




    }

    .title_and_price {
        margin-top: 45px;

        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        width: 90%;
        height: 2vh;

        .title span {
            font-family: 'Montserrat', sans-serif;
            color: #1C1C27;
            font-weight: bold;
        }

        .price {
            display: flex;
            flex-direction: column;


            span {
                font-family: 'Montserrat', sans-serif;
                color: #FFA542;
                font-weight: bold;
                font-size: 17px;




            }

            .old_price {
                span{
                    font-size: 13px;
                    color: #FFCE7F;
                    text-decoration: line-through;
                    text-decoration-color: #FFCE7F;
                    display: flex;
                    align-items: center;
                    justify-content: center;
    
                }
            }
        }
    }

    .stars_and_buy {
        
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        width: 90%;
        align-items: center;



        .count_stars {
            display: flex;
            align-items: center;

            gap: 10px;







            span {
                font-family: 'Montserrat', sans-serif;

                color: #838383;
                line-height: 25px;
                font-size: 17px;
                font-weight: 600px;
                margin-top: 2px;
            }





        }

        .buy {
            cursor: pointer;
        }

        .buy span:hover {

            color: gray;
        }

        .buy span {
            font-family: 'Montserrat', sans-serif;
            color: black;
            font-weight: 600;

        }

    }


}
</style>