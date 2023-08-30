<template>
    <div class="header">
        <div class="wrapper">
            <MediaLogo></MediaLogo>
            <RouterLink to="/">Anasayfa</RouterLink>
            <RouterLink to="/hakkımızda">Hakkımızda</RouterLink>
        </div>

    </div>
</template>
<script setup>
import MediaLogo from '@/components/MediaLogo.vue'
</script>



<style scoped>
.header {
    width: 100%;
    display: flex;
    justify-content: center;
    /* height: 200px; */
    background-color: antiquewhite;

}

.wrapper {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
}

.wrapper>* {
    padding: 8px;
    margin: 16px;
}
</style>