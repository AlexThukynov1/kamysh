<template>
    <main id="main" class="main">
        <kam-section class="section__slider section" id="catalog">
            <h1 class="section__title">Catalog</h1>
            <kam-slider/>
            <kam-button>Call to action</kam-button>
        </kam-section>
        <kam-section id="price" class="section">
            <h2 class="section__title">Price</h2>
            <div class="price__section grid">
                <div class="price__text-side">
                    <p class="text-side__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem blanditiis fugiat eligendi est aspernatur sit esse, ducimus voluptates at reprehenderit autem praesentium! Est, beatae.</p>
                    <p class="text-side__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem blanditiis fugiat eligendi est aspernatur sit esse, ducimus voluptates at reprehenderit autem praesentium! Est, beatae.</p>
                    <p class="text-side__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem blanditiis fugiat eligendi est aspernatur sit esse, ducimus voluptates at reprehenderit autem praesentium! Est, beatae.</p>
                </div>
                <img class="price__img-side" src="https://placehold.co/600x400" alt="Placeholder image">
            </div>
            <kam-button>Call to action</kam-button>
        </kam-section>
        <kam-section id="description" class="section">
            <h2 class="section__title">Description</h2>
            <div class="description__section grid">
                <img class="description__img-side" src="https://placehold.co/600x400" alt="Placeholder image">
                <p class="text-side__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quas, vitae ex temporibus perspiciatis molestias possimus maxime? Tenetur sed optio ut tempore at? Blanditiis odit voluptas, doloribus sapiente delectus autem! Autem distinctio inventore ipsum eos facere. Qui animi iusto rerum!</p>
            </div>
            <kam-button>Call to action</kam-button>
        </kam-section>
        <kam-section id="contacts">
            <h2 class="section__title">Contacts</h2>
            <div class="contacts__section grid">
            <kam-form></kam-form>
            </div>    
        </kam-section>
    </main>
</template>

<script setup lang="ts">
    import kamSection from './layout-components/kam-section.vue';
    import kamSlider from './ui-components/kam-slider.vue';
    import kamButton from './ui-components/kam-button.vue';
    import kamForm from './layout-components/kam-form.vue';
</script>

<style scoped>
.main {
    padding-top: var(--header-height);
}
.section__slider {

}
.description__section,
.price__section {
    grid-template-columns: 1fr 1fr;
}
.price__text-side {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.text-side__text {
    font-size: var(--normal-font-size);
}
.price__img-side {

}
</style>