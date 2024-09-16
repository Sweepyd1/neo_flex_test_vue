<template>
    <div class="headphone">
        <div class="image">
            <img src="/images/image.png">
        </div>

        <div class="title_and_price">
            <div class="title">
                <span>Apple BYZ S852I</span>

            </div>
            <div class="price">
                <span>2927 ₽</span>

            </div>
        </div>

        <div class="stars_and_buy">
            <div class="count_stars">
                <stars_svg></stars_svg>
           
                <span>4.7</span>

            </div>
          
         
            <div class="buy">
                <span>Купить</span>
            </div>


        </div>


        
    </div>

</template>

<script setup>
import stars_svg from '../svg/stars_svg.vue';
</script>

<style scoped lang="scss">

.headphone{
    background: white;
    width: 100%;
    height: 40vh;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
   


    .image{
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .title_and_price{
        margin-top: 45px;
      
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        width: 90%;

        .title span{
            font-family: 'Montserrat', sans-serif;
            color: #1C1C27;
            font-weight: bold;
        }

        .price span{
            font-family: 'Montserrat', sans-serif;
            color: #FFA542;
            font-weight: bold;

        }
    }

    .stars_and_buy{
        margin-top: 30px;
      
        display: flex;
        justify-content: space-between;
        padding-left: 15px;
        width: 90%;
        align-items: center;
     
      

        .count_stars{
            display: flex;
            align-items: center;
            
            gap: 10px;
            
         

            
            span {
                font-family: 'Montserrat', sans-serif;
               
                color: #838383;
                line-height: 25px;
                font-size: 17px;
                font-weight: 600px;
            }

           
           

          
        }

        .buy span{
            font-family: 'Montserrat', sans-serif;
            color:black;
            font-weight: 600;

        }

    }

  
}

</style>