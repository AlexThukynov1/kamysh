<template>
    <footer id="footer" class="footer">
        <div class="footer__container container grid">
            <kam-social-list/>
        </div>
    </footer>
</template>

<script setup lang="ts">
import kamSocialList from './layout-components/kam-social-list.vue';
</script>

<style scoped>
#footer {
    padding-block: 1.5rem;
}
.footer__container {
    justify-content: center;
}
</style>