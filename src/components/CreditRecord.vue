<template>
    <div class="container">
        <div class="record">
            <div class="coin">
                <img src="@/assets/coinRecord.png" alt="">
            </div>
            <div class="wutai">
                <img src="@/assets/wutaiRecord.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup></script>



<style scoped lang="scss">
.container {

    .record {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem
    }
}


@media(max-width:450px) {

    .container {
        max-width: 450px;

        .record {
            max-width: 450px;
            width: 450px;

            .coin {

                img {
                    width: 100%;
                }
            }

            .wutai {


                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>