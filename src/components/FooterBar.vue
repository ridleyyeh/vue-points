<script setup>
</script>



<template>
    <div class="footer">
        <img src="@/assets/footer.png" alt="">
    </div>
</template>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.footer {

    img {
        width: 100%;
        display: block;

    }

}


@media (max-width:450px) {

    .footer {
        width: 450px;

        img {
            transform: scale(2);
        }
    }
}
</style>
