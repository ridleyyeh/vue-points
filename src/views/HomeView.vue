<script setup lang="ts">
import TopBar from "@/components/TopBar.vue"
import FooterBar from "@/components/FooterBar.vue"
import MissionEarnCoins from "@/components/MissionEarnCoins.vue"
import CoinExchangeGift from "@/components/CoinExchangeGift.vue"
import AdElement from "@/components/AdElement.vue"

</script>

<template>

  <div class="homeview">
    <TopBar />
    <div class="wrap">
      <div class="container">

        <MissionEarnCoins />
        <CoinExchangeGift />
        <AdElement />
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

.homeview {
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
