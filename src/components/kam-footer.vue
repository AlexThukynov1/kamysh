<template>
    <footer id="footer" class="footer">
        <div class="footer__container container grid">
            <kam-social-list/>
            <span class="footer__copy"> &#169 All Rights Reserved By OT-SERVICES</span>
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
.footer__copy {
  color: var(--title-color);
  font-size: var(--small-font-size);
  text-align: center;
}
</style>