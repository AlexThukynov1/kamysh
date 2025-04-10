<template>
    <header 
        id="header" 
        class="header"
        :class="{'blur-header': blurVisible }"
    >
        <div class="nav__container container grid"> 
            <img class="logo" src="https://placehold.co/120x40" alt="Logo">
            <nav class="nav">
                <kam-nav-list :link-list="linkList"/>
                <kam-social-list/>
                
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import kamNavList from './layout-components/kam-nav-list.vue';
import kamSocialList from './layout-components/kam-social-list.vue';

const scrollY = ref(window.scrollY);
const blurVisible = ref(false);
const linkList = ref([
    {
        text: "Home",
        link: "/",
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

const updateScrollY = () => {
  scrollY.value = window.scrollY;
  if(scrollY.value >= 50) {
    blurVisible.value = true
  }else {
    blurVisible.value = false
  }
//   if(scrollY.value >= 50) {
//     blurVisible.value = true
//   }esle{
//     
//   }
};
onMounted(() => {
  window.addEventListener('scroll', updateScrollY);
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollY);
});
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
    padding-block: 0.5rem;
    align-items: center;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.blur-header::after {
  content: '';
  position: absolute;
  width: 1000%;
  height: 100%;
  background-color: hsla(var(--hue), 70%, 4%, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  top: 0;
  left: 0;
  z-index: -1;
}
</style>