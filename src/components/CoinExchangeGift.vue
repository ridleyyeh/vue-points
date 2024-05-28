<template>
    <div class="container">
        <div class="gift-logo">
            <img src="@/assets/gift.png" alt="">
        </div>
        <div class="gift">
            <div class="gift-pic-container">
                <div class="gift-pic">
                    <img src="@/assets/food-voucher1.png" alt="">
                    <img src="@/assets/food-voucher2.png" alt="">
                    <img src="@/assets/food-voucher1.png" alt="">
                    <img src="@/assets/food-voucher2.png" alt="">
                    <img src="@/assets/food-voucher1.png" alt="">
                    <img src="@/assets/food-voucher2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import StickySidebar from 'sticky-sidebar';

onMounted(() => {
    new StickySidebar('.gift-pic-container', {
        containerSelector: '.gift',
        innerWrapperSelector: '.gift-pic-container',
        topSpacing: 20,
        bottomSpacing: 20
    });
});
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .gift-logo {
        margin: 2rem 0;
    }

    .gift {
        background-color: rgb(249, 244, 237);
        padding: 2rem;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 800px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .gift-pic-container {
            width: 100%;
            /* 确保容器宽度适合内容 */
            max-height: 400px;
            overflow-y: auto;
            /* 启用纵向滚动 */
            margin-right: 20px;

            .gift-pic {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                /* 每行显示三张图片 */
                grid-gap: 15px;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>