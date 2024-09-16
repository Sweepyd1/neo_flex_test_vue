<template>
    <div class="header">
        <div class="logo">
            <span>QPICK</span>

        </div>

        <div class="header_right">


            <div class="favourities">
                <favourities_svg></favourities_svg>
                <div class="notification-badge">3</div>

            </div>
            <div class="basket">
                <basket_svg></basket_svg>

            </div>

        </div>





    </div>
</template>

<script setup>
import basket_svg from '@/svg/basket_svg.vue';
import favourities_svg from '@/svg/favourities_svg.vue';
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;

    .logo span{
        font-size: 25px;
        font-weight: 700;
        color: #101010;
        
    }


}

.header_right {
    display: flex;
    gap: 25px;
}

.favourities {
    position: relative;
    /* Устанавливаем относительное позиционирование для родителя */
    display: inline-block;
    /* Чтобы обернуть содержимое */
}

.notification-badge {
    position: absolute;
    /* Абсолютное позиционирование для круга */
    top: 0;
    /* Позиционируем в верхней части */
    right: 0;
    /* Позиционируем в правой части */
    width: 20px;
    /* Ширина круга */
    height: 20px;
    /* Высота круга */
    background-color: #FFA542;
    /* Цвет круга */
    border-radius: 50%;
    /* Делаем круг */
    display: flex;
    /* Для центрирования текста */
    justify-content: center;
    /* Центрируем текст по горизонтали */
    align-items: center;
    /* Центрируем текст по вертикали */
    transform: translate(50%, -50%);
    /* Сдвигаем круг немного вправо и вверх для перекрытия */
    font-size: 12px;
    /* Размер шрифта для цифр */
    font-weight: bold;
    /* Жирный шрифт для цифр */
}


</style>