<template>
    <ul class="nav__list list">
        <li v-for="(item, key) in linkList" :key="key"  class="list__link link">
            <a href="{{item.link}}">{{item.text}}</a>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IlinkList {
    text: String,
    link: String,
    key: Number
}
const props = defineProps({
    linkList: {
        type: Array as () => IlinkList[],
        required: true 
    } 
});

</script>

<style scoped>
.nav__list {
    display: flex;
    gap: 0.75rem;
}
.link a {
    position: relative;
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    transition: color .4s;
    font-size: var(--subtitle-font-size);
}
.link a::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: var(--title-color);
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    transform: scaleX(0);
    transition: transform .3s
}
.link a:hover {
    color: var(--first-color-light)
}
.link a:hover::after  {
    transform: scaleX(1);
}
</style>