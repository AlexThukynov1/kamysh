<template>
    <div class="slider">
        <div
            class="slider-item"
            v-for="(item, key) in items" 
            v-show="activeIndex === key"
            :key="key"  
        >
            <img 
            :src="item.src" 
            :alt="item.alt"
            :class="{activeSlide: 'visible-image'}"
            >
            <span class="slider-text">{{ item.text }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
    const activeIndex = ref(0)

    const indexIterator = computed(() => {

    })
    const items = ref([
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            text: "Img 1",
            key: 0,
        },
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            key: 1,
            text: "Img 2"
        },
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            key: 2,
            text: "Img 3"
        },
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            key: 3,
            text: "Img 4"
        },
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            key: 4,
            text: "Img 5"
        },
        {
            src: "https://placehold.co/600x400",
            alt: "Placeholder image",
            key: 5,
            text: "Img 6"
        },
    ])
</script>

<style scoped>
.slider {
    display: flex;
    align-items: center;
    justify-content: center;
}
/* 
.visible-image {
    display: block;
} */
.slider-item {
    position: relative;
}
.slider-text {
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color:black;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>