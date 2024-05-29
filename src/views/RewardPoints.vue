<script setup>
import TopBar from "@/components/TopBar.vue"
import FooterBar from "@/components/FooterBar.vue"
import PointBtn from "@/components/PointBtn.vue"


</script>


<template>

    <div class="rewardPoints">
        <div class="wrap">
            <div class="container">
                <div class="rewardPointsInfo">
                    <h2>*以下僅顯示近一年明細</h2>
                    <div class="rewardPointItems">
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                        <div class="item1">
                            <div class="content">
                                <p>2023/03/15</p>
                                <p>專案名稱建議十個字</p>
                                <p>任務名稱建議十個字</p>
                            </div>
                            <div class="point">
                                <img src="@/assets/coin.png" alt="">
                                <span>3000</span>
                            </div>

                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
.rewardPoints {

    .wrap {
        min-height: 100vh;

        .container {
            max-width: 800px;
            margin: auto;
        }

        .rewardPointsInfo {
            h2 {
                font-size: 16px;
                font-weight: 900;
            }

            .item1 {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
                width: 380px;

                .content {
                    display: flex;
                    flex-direction: column;

                    p {
                        font-size: 14px;
                        font-weight: 800;
                        color: grey;
                    }
                }

                .point {
                    display: flex;
                    justify-content: center;
                    align-items: center;


                    span {
                        color: rgb(255, 98, 78);
                        font-weight: 700;
                        margin-left: 5px;
                    }
                }
            }

            hr {
                margin-bottom: 0.5rem;
            }
        }
    }
}
</style>