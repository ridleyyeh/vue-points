<template>
    <div class="container">
        <div class="mission-logo">
            <img src="@/assets/mission-logo.png" alt="Mission Logo" />
        </div>
        <div class="mission">
            <div class="mission-content">
                <div class="mission-sec-1" v-for="(item, index) in 6" :key="index">
                    <h2>登入大咖App繳費任三筆</h2>
                    <div class="content">
                        <p>2023/7/1~12/31登入大咖App每月繳費任三筆不限金額、項目(限4000名)</p>
                        <img src="@/assets/coin.png" alt="Coin" />
                        <span class="reward">3,000</span>
                    </div>
                    <hr v-if="index < 5" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import StickySidebar from 'sticky-sidebar';

let sidebar = null;

onMounted(() => {
    sidebar = new StickySidebar('.mission-content', {
        containerSelector: '.mission',
        innerWrapperSelector: '.mission-content',
        topSpacing: 20,
        bottomSpacing: 20,
    });
});

onBeforeUnmount(() => {
    if (sidebar) {
        sidebar.destroy();
    }
});
</script>

<style scoped lang="scss">
.container {
    .mission-logo {

        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem 0;
    }

    .mission {
        display: flex;
        width: 100%;
        background-color: rgb(249, 244, 237);
        padding: 2rem;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        .mission-content {
            flex: 1;
            padding-right: 1rem;
            max-height: 400px;
            /* 固定高度 */
            overflow-y: auto;
            /* 垂直滾動 */

            .mission-sec-1 {
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;

                h2 {
                    color: rgb(255, 98, 79);
                    font-size: 17px;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }

                .content {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    p {
                        font-size: 12px;
                        font-weight: 600;
                        margin-right: 0.5rem;
                    }

                    img {
                        width: 25px;
                        height: 25px;
                        margin-right: 0.5rem;
                    }

                    .reward {
                        font-size: 16px;
                        font-weight: 700;
                        color: rgb(255, 98, 79);
                    }
                }
            }

            hr {
                border: none;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                margin: 1rem 0;
            }
        }
    }
}

@media (max-width:450px) {
    .container {
        max-width: 450px;

        .mission-logo {
            width: 450px;
            height: 45px;
            // border: 2px solid red;

            img {
                width: 35%;
            }
        }

        .mission {
            margin: 0 1rem;
            width: 415px;
            height: 260px;

            .mission-content {
                // border: 2px solid red;
            }
        }
    }
}
</style>