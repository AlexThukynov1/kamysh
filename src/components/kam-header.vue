<template>
    <header id="header" class="header">
        <div class="nav__container container grid"> 
            <img class="logo" src="https://placehold.co/120x40" alt="Logo">
            <nav class="nav">
                <kam-nav-list :link-list="linkList"/>

                <ul class="nav__list social">
                    <li class="social__link link">
                        <a class="social__icon" href="">
                            <i class="ri-instagram-line"></i>
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li class="social__link link">
                        <a class="social__icon" href="">
                            <i class="ri-youtube-line"></i>
                            <span>Youtube</span>
                        </a>
                    </li>
                    <li class="social__link link">
                        <a class="social__icon" href="">
                            <i class="ri-youtube-line "></i>
                            <span>Tik-Tok</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import kamNavList from './layout-components/kam-nav-list.vue';

    const linkList = ref([
        {
            text: "Home",
            link: "#home",
            key: 0
        },
        {
            text: "Catalog",
            link: "#catalog",
            key: 1
        },
        {
            text: "Price",
            link: "#price",
            key: 2
        },
        {
            text: "Description",
            link: "#description",
            key: 3
        },
        {
            text: "Contacts",
            link: "#contacts",
            key: 4
        }
    ])
</script>

<style scoped>
.header {
    height: var(--header-height);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: var(--z-100);
}
.nav__container {
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    padding-block: 1rem 0;
    align-items: center;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.social {
    display: flex;
    gap: 0.75rem;
}
.social__icon {
    display: inline-flex;
    column-gap: 0.25rem;
    align-items: center;
    color: var(--first-color)
}
.social__icon i {
    font-size: 1.5rem;
}
.social__icon span {
    font-size: var(--normal-font-size)
}
/* .social__link a,
.list__link  a{
    font-size: var(--subtitle-font-size);
    color: var(--first-color);
    font-weight: var(--font-bold);
} */
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