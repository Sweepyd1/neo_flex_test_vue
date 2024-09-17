<script setup>


import cart_Component from '@/components/cartComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import headerComponent from '@/components/headerComponent.vue';



const wireless_headphones_list = [
    {
        img:"/images/image_7.png",
        title:"Apple AirPods",
        price:9527,
        rate:4.7
    },
    {
        img:"/images/image_8.png",
        title:"GERLAX GH-04",
        price:6527,
        rate:4.7
    },
    {
        img:"/images/image_9.png",
        title:"BOROFONE BO4",
        price:7527,
        rate:4.7
    },

] 

const wired_headphones_list = [
    {
        img:"/images/image_1.png",
        title:"Apple BYZ S852I",
        price:2927,
        rate:4.7
    },
    {
        img:"/images/image_2.png",
        title:"Apple EarPods",
        price:2327,
        rate:4.5
    },
    {
        img:"/images/image_3.png",
        title:"Apple EarPods",
        price:2327,
        rate:4.5
    },
    {
        img:"/images/image_4.png",
        title:"Apple BYZ S852I",
        price:2927,
        rate:4.7
    },
    {
        img:"/images/image_5.png",
        title:"Apple EarPods",
        price:2327,
        rate:4.5
    },
    {
        img:"/images/image_6.png",
        title:"Apple EarPods",
        price:2327,
        rate:4.5
    },
   
]
</script>

<template>
    <div class="page">


        <div class="container">
           <headerComponent></headerComponent>
            <div class="main">
                <div class="title">
                    <span>Наушники</span>
                </div>

                <div class="headphones">
                    <cart_Component
                    v-for="(headphone, index) in wired_headphones_list"
                    :key="index"
                    :img="headphone.img"
                    :title="headphone.title"
                    :price="headphone.price"
                    :rate="headphone.rate"
                    
                    
                    
                    />
                    




                </div>

                <div class="wireless_headphones_title">
                    <span>Беспроводные Наушники</span>
                    <div class="headphones">

                        <cart_Component
                    v-for="(headphone, index) in wireless_headphones_list"
                    :key="index"
                    :img="headphone.img"
                    :title="headphone.title"
                    :price="headphone.price"
                    :rate="headphone.rate"
                    
                    
                    
                    />
                     

                    </div>

                </div>


               
            </div>
            <bottomBar></bottomBar>

        </div>




    </div>
</template>



<style scoped lang="scss">
span{
    font-family: 'Montserrat', sans-serif;
}

.page {
    width: 100%;
    height: auto;

    background-color: #EAEAEA;

    .container {
        margin-left: 8%;

        width: 85%;





       


    }

    .main {
        margin-left: 10px;
        margin-top: 20px;

        .title{
            margin-top: 27px;
           

            span{
                color:#838383;
                font-weight: 600;
            }
        }

        .headphones {
            display: grid;
            /* Включаем grid */
            grid-template-columns: repeat(3, 1fr);
            /* 3 колонки одинаковой ширины */
            gap: 30px;
            margin-top: 20px;
            /* Промежуток между элементами */


        }

        .wireless_headphones_title{
            
            margin-top: 27px;
            
           

            span{
                color:#838383;
                font-weight: 600;
                

            }

        }


       

    }
}
</style>