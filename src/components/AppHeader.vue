<script>
import AppSearch from './AppSearch.vue';

export default {
    name: "AppHeader",
    components: {
        AppSearch,
    },
    props: {
        message: String,
    },
    methods: {},
};
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-3 mb-3">
        <div class="brand d-flex align-items-center">
            <img src="/logo.png" />
            <h1 class="text-center d-inline-block text-light">{{ message }}</h1>
        </div>
        <AppSearch />
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    background-color: $bg-color;
    border-bottom: 1px solid rgba(28, 28, 28, .6);

    img {
        height: 50px;
        margin: 0 10px;
    }

    h1 {
        padding: 0 10px;
    }
}
</style>