<template>
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
                <i class="ri-tiktok-line"></i>
                <span>Tik-Tok</span>
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
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