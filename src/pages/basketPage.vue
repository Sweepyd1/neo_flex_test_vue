<script setup>
import headerComponent from '@/components/headerComponent.vue';
// import bottomBar from '@/components/bottomBar.vue';
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







                </div>
              





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
    height: 98vh;
    background-color: #EAEAEA;

    .container {
        margin-left: 8%;

        width: 85%;


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
        display: flex;
        flex-direction: column;
        height: 50vh;





    }
}
</style>