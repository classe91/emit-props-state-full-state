<script>
export default {
    name: "GameCard",
    props: {
        game: Object,
    },
}
</script>
    
<template>
    <div class="character-card text-center mb-3">
        <div>
            <img class="img-fluid mb-3" :src="game.thumbnail" :alt="game.title" />
            <p class="name text-uppercase fw-bold text-light">{{ game.title }}</p>
            <p class="category lead mb-0">{{ game.platform }}</p>
            <p class="status">{{ game.genre }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.character-card {
    flex-basis: calc(100% / 5 - 20px);

    div {
        background-color: $bg-color;
        height: 100%;
    }

    .category,
    .status {
        color: #7d7977;
    }
}
</style>