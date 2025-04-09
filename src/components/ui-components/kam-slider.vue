<template>
    <div class="slider">
        <div
            class="slider-item"
            v-for="(item, key) in items" 
            :class="{'lazy-visible': activeIndex === key}"
            :key="key"  
        >
            <div
            v-if="activeIndex === key"
            >
                <img 
                :src="item.src" 
                :alt="item.alt"
                
                >
                <span class="slider-text">{{ item.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted, onUnmounted} from 'vue';

interface ISliderData {
    src: string;
    alt: string;
    text: string;
    key: number;
}
    
const activeIndex = ref<number>(0);
let intervalId: number | null = null

const items = ref<ISliderData[]>([
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        text: "Img 1",
        key: 0,
    },
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        key: 1,
        text: "Img 2"
    },
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        key: 2,
        text: "Img 3"
    },
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        key: 3,
        text: "Img 4"
    },
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        key: 4,
        text: "Img 5"
    },
    {
        src: "https://placehold.co/1000x400",
        alt: "Placeholder image",
        key: 5,
        text: "Img 6"
    },
])
 function indexIterator(): void {
    activeIndex.value = activeIndex.value + 1
    if(items.value.length === activeIndex.value) {
        activeIndex.value = 0
    }
 }

onMounted(() => {
    intervalId = setInterval(indexIterator, 5000);
})

onUnmounted(() => {
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
})
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
    opacity: 0;
    transition: opacity 2s ease-out;
}
.lazy-visible {
    opacity: 1;
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