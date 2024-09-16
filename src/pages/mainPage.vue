<script setup>


import cart_Component from '@/components/cartComponent.vue';
import bottomBar from '@/components/bottomBar.vue';
import headerComponent from '@/components/headerComponent.vue';
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
                    <cart_Component></cart_Component>
                    <cart_Component></cart_Component>
                    <cart_Component></cart_Component>
                    <cart_Component></cart_Component>
                    <cart_Component></cart_Component>
                    <cart_Component></cart_Component>



                </div>

                <div class="wireless_headphones_title">
                    <span>Беспроводные Наушники</span>
                    <div class="headphones">
                        <cart_Component></cart_Component>
                        <cart_Component></cart_Component>
                        <cart_Component></cart_Component>

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