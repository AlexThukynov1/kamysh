<template>
    <button class="button">
        <span>
            <slot/>
        </span>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.button {
    padding: 1rem;
    border-radius: 15px;
    color: var(--text-color);
    background-color: var(--first-color) ;
    transition: border-radius 0.3s, background-color 0.3s, color 0.3s;

}
.button:hover {
    background-color: var(--text-color-light) ;
    border-radius: 5px;
    color: var(--body-color);
}
.button  span {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>