<template>
    <div class="header">
        <div class="wrapper">
            <MediaLogo></MediaLogo>
            <RouterLink to="/">Anasayfa</RouterLink>
            <RouterLink to="/hakkimizda">Hakkımızda</RouterLink>
            <RouterLink to="/bilgi-kosesi">Bilgi Köşesi</RouterLink>
            <RouterLink to="/bagis-yap">Destek / Bağış</RouterLink>
            <RouterLink to="/etkinliklerimiz">Etkinlik</RouterLink>
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
    background-color: var(--blue-lighten-2);

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

@media (min-width: 1025px) and (max-width: 1280px) {

    .wrapper {
        gap: 10px;
    }

}

@media (min-width: 768px) and (max-width: 1024px) {

    .wrapper {
        gap: 0;
        width:95%;
    }

    .wrapper>a {
        font-size: 16px;
        margin: 0;
    }

}

@media (max-width: 767px) {

    .wrapper {
        gap: 0;
        width:99%;
    }

    .wrapper>a {
        font-size: 12px;
        margin: 0;
    }

}</style>