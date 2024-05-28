<template>
    <div class="warning">
        <div class="logo">
            <img src="@/assets/warning.png" alt="">
        </div>
        <div class="paragraph">
            <p>您即將離開Wutai&nbsp;Point行動網站，</p>
            <p>請確認是否執行。</p>
            <span>&nbsp;</span>
            <p class="disagree">如不同意前往，請點選「取消」。</p>
        </div>

        <div class="btns">
            <button class="cancel">取消</button>
            <button class="confirm">確定</button>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped lang="scss">
.warning {
    width: 377px;
    height: 171px;
    border: 2px solid lightgrey;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    .logo {
        display: flex;
        justify-content: center;
    }

    .paragraph {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
            font-weight: 700;
        }

        .disagree {
            margin-top: -10px;
        }

    }

    .btns {
        display: flex;
        justify-content: center;
        margin-top: 5px;

        .cancel {
            width: 176px;
            border: rgb(219, 219, 219);
            border-radius: 5px;
            background-color: rgb(219, 219, 219);
            color: black;
            font-weight: 900;
            font-size: 15px;
            margin-right: 10px;
        }

        .confirm {
            width: 176px;
            border: rgb(30, 91, 109);
            border-radius: 5px;
            background-color: rgb(30, 91, 109);
            color: white;
            font-weight: 900;
            font-size: 15px;
        }
    }
}
</style>