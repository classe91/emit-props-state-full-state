<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store'

export default {
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    created() {
        this.store.getGames();
    }
};
</script>

<template>
    <AppHeader message="Free Games API" />
    <AppMain />
</template>


<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss';

body {
    background-color: $bg-color;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
