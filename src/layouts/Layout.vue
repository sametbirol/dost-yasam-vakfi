<template>
    <Header />
    <div class="layout">
        <RouterView></RouterView>
    </div>
    <Footer />
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
<style scoped>
.layout{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 auto;
    width: 100%;
    
}
</style>