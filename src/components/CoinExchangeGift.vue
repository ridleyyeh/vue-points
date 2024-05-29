<template>
    <div class="container">
        <div class="gift-logo">
            <img src="@/assets/gift.png" alt="Gift Logo">
        </div>
        <div class="gift">
            <div class="gift-pic-container">
                <div class="gift-pic">
                    <img src="@/assets/food-voucher1.png" alt="Food Voucher 1">
                    <img src="@/assets/food-voucher2.png" alt="Food Voucher 2">
                    <img src="@/assets/food-voucher1.png" alt="Food Voucher 1">
                    <img src="@/assets/food-voucher2.png" alt="Food Voucher 2">
                    <img src="@/assets/food-voucher1.png" alt="Food Voucher 1">
                    <img src="@/assets/food-voucher2.png" alt="Food Voucher 2">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import StickySidebar from 'sticky-sidebar';

onMounted(() => {
    setTimeout(() => {
        const container = document.querySelector('.gift');
        const innerWrapper = document.querySelector('.gift-pic-container');


        if (container && innerWrapper) {
            const sidebar = new StickySidebar(innerWrapper, {
                containerSelector: '.gift',
                innerWrapperSelector: '.gift-pic-container',
                topSpacing: 20,
                bottomSpacing: 20
            });

            if (!sidebar.isSidebarInitialized) {
                console.error('StickySidebar initialization failed');
            }
        } else {
            console.error('Container or inner wrapper not found');
        }
    }, 100); // 延遲 100 毫秒解決問題的原因主要是與 DOM 渲染和資源加載順序有關。在 onMounted 生命週期中立即執行初始化代碼時，可能會在 DOM 尚未完全渲染或資源尚未完全加載完畢的情況下執行，導致初始化失敗。延遲 100 毫秒給予瀏覽器足夠的時間完成這些操作，從而保證 StickySidebar 初始化時能夠找到並正確處理需要的元素。
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
            max-height: 400px;
            overflow-y: auto;
            margin-right: 20px;
            position: relative;


            .gift-pic {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 15px;
                margin: 1rem 0;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>
