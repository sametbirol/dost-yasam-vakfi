<template>
    <div class="wrapper">
        <div class="container">
            <MediaLogo></MediaLogo>
            <Menu></Menu>
            
        </div>
    </div>
</template>
<script setup>
import MediaLogo from '@/components/MediaLogo.vue'
import Menu from '../components/NavigationMenu/Menu.vue';
</script>



<style scoped>
.wrapper {
    background-color: var(--blue-lighten-2);
    min-height: 9vh;
    padding: 0;
}

.container {
    justify-content: space-between;
    gap: 20px;
    flex-wrap: nowrap;
}


</style>