<template>
    <Header />
    <RouterView></RouterView>
    <Footer />
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
    align-items: center;
    flex: 1 0 auto;
    width: 80%;

}
</style>