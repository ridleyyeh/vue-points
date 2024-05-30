<template>
    <div class="description">
        <h2>豐點一點=金Bee1點</h2>
        <p>金幣與五泰點得合併兌換商品，以先獲得之金幣優先扣除，當金幣不足時，才會扣至五泰點。</p>
        <p>(限五泰點數計畫之指定兌換專區商品)</p>
    </div>
</template>



<script setup></script>


<style scoped lang="scss">
.description {
    width: 644px;
    height: 400px;
    border: 2px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 0px 10px lightgrey;
    padding: 2rem;
    margin-top: 2rem;

    h2 {
        color: rgb(254, 99, 79);
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1rem;

    }

    p {
        font-size: 17px;
        font-weight: 600;
    }
}


@media (max-width:450px) {
    .description {
        width: 420px;
        margin: 2rem auto
    }
}
</style>