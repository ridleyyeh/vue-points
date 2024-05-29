<script setup lang="ts">
import TopBar from "@/components/TopBar.vue"
import FooterBar from "@/components/FooterBar.vue"
import PointBtn from "@/components/PointBtn.vue"

</script>

<template>

    <div class="creditRecord">
        <TopBar />
        <PointBtn />
        <div class="wrap">
            <div class="container">

                <router-view></router-view>
            </div>
        </div>
        <FooterBar />
    </div>

</template>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.creditRecord {
    display: flex;
    flex-direction: column;
    width: 200%;

}

.wrap {
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
}

.container {
    max-width: 800px;
    margin: auto;
}
</style>
