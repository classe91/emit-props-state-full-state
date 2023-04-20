<script>
import { store } from '../store'
import GameCard from './GameCard.vue';
import AppLoader from './AppLoader.vue'
import ResultsMessage from './ResultsMessage.vue'

export default {
    name: "AppMain",
    components: {
        GameCard,
        AppLoader,
        ResultsMessage
    },
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <main class="container p-2 border border-dark border-1 rounded">
        <div v-if="!store.loading" class="row">
            <div class="col-12 mb-5">
                <ResultsMessage />
            </div>
            <div class="col-12 card-container d-flex flex-wrap justify-content-between">
                <GameCard v-for="(game, index) in store.gamesList" :key="index" :game="game" />
            </div>
        </div>
        <AppLoader v-else label="Free Games API" />
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: #3c4146;
}
</style>