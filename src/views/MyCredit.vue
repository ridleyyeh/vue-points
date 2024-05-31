<script setup lang="ts">
import TopBar from "@/components/TopBar.vue"
import FooterBar from "@/components/FooterBar.vue"
import CreditRecord from "@/components/CreditRecord.vue"
import DescriptionSign from "@/components/DescriptionSign.vue"
import AdElement from "@/components/AdElement.vue"

import { useRouter } from 'vue-router'

const router = useRouter()
const navigateToIndex = () => {
    router.push('/')

}
</script>

<template>

    <div class="homeview">

        <!--     rwd  pseudo elements starts here -->

        <div class="rwdHeader" style="display: none;">
            <h1 @click="navigateToIndex">點數專區</h1>
            <div class="toolbar">
                <img src="@/assets/toolbar.png" alt="">
            </div>

        </div>
        <div class="rwdHeader-part2" style="display: none;">
            <img src="@/assets/rwd-header.png" alt="">
        </div>

        <!--     rwd  pseudo elements ends here -->

        <TopBar />
        <div class="wrap">
            <div class="container">
                <CreditRecord />
                <DescriptionSign />
                <AdElement />
            </div>
        </div>
        <FooterBar />
    </div>

</template>

<style scoped lang="scss">
.homeview {
    display: flex;
    flex-direction: column;
    width: 200%;

}

.wrap {
    min-height: 100vh;
    // height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.container {
    max-width: 800px;
    margin: auto;
}



@media(max-width:450px) {
    .homeview {
        max-width: 450px;

        .rwdHeader {
            display: flex !important;
            align-items: center;
            background-color: rgb(30, 91, 109);
            height: 50px;

            h1 {
                color: white;
                font-size: 20px;
                font-weight: 900;
                width: 320px;
                // border: 2px solid red;
                text-align: end;
                padding-right: 3.5rem;

            }

            .toolbar {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-left: 5rem;
                cursor: pointer;
            }

        }

        .rwdHeader-part2 {
            width: 100%;
            display: flex !important;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;

            img {
                width: 100%;
            }
        }
    }
}
</style>
