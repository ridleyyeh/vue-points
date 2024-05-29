<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path) => {
    router.push(path);
};


</script>

<template>

    <div class="header">
        <div class="logo">
            <a href="#" @click="navigateTo('/')">
                <img src="@/assets/logo.png" alt="">
            </a>

        </div>
        <img src="../assets/topbar.png" alt="">

        <div class="btns">
            <div class="btn-1" @click="navigateTo('/MyCredit')">
                <img src="@/assets/dollar_sign.png" alt="">
                <p>我的點數</p>
            </div>
            <div class="btn-2" @click="navigateTo('/CreditRecord')">
                <img src="@/assets/paper_sign.png" alt="">
                <p>點數紀錄</p>
            </div>
            <div class="btn-3" @click="navigateTo('/RulesandPolicy')">
                <img src="@/assets/paper.png" alt="">
                <p>規則與條款</p>
            </div>
        </div>
    </div>

</template>


<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
}

.header {
    width: 100%;
    // border: 2px solid red;

    .logo {
        padding: 1rem;
        width: 185px;

        a {
            &:hover {
                background-color: white;
            }
        }


    }

    img {
        width: 100%;
        position: relative;
    }

    .btns {
        width: 600px;
        height: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        left: 35%;
        top: 51%;

        .btn-1 {
            background-color: rgb(255, 98, 79);
            border: 1px solid rgb(255, 98, 79);
            border-radius: 10px;
            width: 180px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 40px;
                margin-right: 1rem
            }

            p {
                color: white;
                font-weight: 900;
                font-size: 23px;
            }


        }

        .btn-2 {
            background-color: rgb(255, 98, 79);
            border: 1px solid rgb(255, 98, 79);
            border-radius: 10px;
            width: 180px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }


            img {
                width: 40px;
                margin-right: 1rem
            }

            p {
                color: white;
                font-weight: 900;
                font-size: 23px;
            }


        }

        .btn-3 {
            background-color: rgb(255, 98, 79);
            border: 1px solid rgb(255, 98, 79);
            border-radius: 10px;
            width: 180px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 30px;
                margin-right: 1rem
            }

            p {
                color: white;
                font-weight: 900;
                font-size: 23px;
            }


        }

    }
}
</style>