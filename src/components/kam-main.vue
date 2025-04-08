<template>
    <main id="main" class="main">
        <kam-section class="section" id="catalog">
            <kam-slider/>
        </kam-section>
        <kam-section id="price"></kam-section>
        <kam-section id="description"></kam-section>
        <kam-section id="contacts"></kam-section>
    </main>
</template>

<script setup lang="ts">
    import kamSection from './layout-components/kam-section.vue';
    import kamSlider from './ui-components/kam-slider.vue';
</script>

<style scoped>
.main {
    padding-top: var(--header-height);
}
</style>