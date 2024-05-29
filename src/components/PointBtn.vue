<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToRewardPoint = () => {
    router.push('/rewardpoints')
}


const navigateToRedeemPoint = () => {
    router.push('/redeempoints')
}

</script>



<template>
    <div class="btns">
        <div class="active">
            <a class="creditPoint" @click="navigateToRewardPoint">
                <img src="@/assets/creditpoint.png" alt="">
                <p>累點</p>

            </a>

            <a class="redeemPoint" @click="navigateToRedeemPoint">
                <img src="@/assets/redeempoint.png" alt="">
                <p>兌點</p>

            </a>
        </div>
    </div>
</template>


<style scoped lang="scss">
.btns {

    margin: 3rem auto;

    .active {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;



        .creditPoint {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                background-color: white;
            }

            img {
                margin-right: 5px
            }

            p {
                color: rgb(255, 98, 78);
                font-size: 20px;
                font-weight: 900;
            }
        }

        .redeemPoint {
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: white;
                cursor: pointer;
            }

            img {
                margin-right: 5px
            }

            p {
                color: rgb(255, 98, 78);
                font-size: 20px;
                font-weight: 900;
            }
        }
    }
}
</style>