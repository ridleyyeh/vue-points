<template>
    <div class="advertisement">
        <img src="@/assets/advertisement.png" alt="">
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.advertisement {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
}

@media (max-width:450px) {
    .advertisement {
        margin-bottom: 2rem;

        img {
            width: 75%;
        }
    }
}
</style>