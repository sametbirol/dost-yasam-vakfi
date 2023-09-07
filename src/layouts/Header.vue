<template>
    <div class="wrapper">
        <div class="header">
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
.wrapper {
    background-color: var(--blue-lighten-2);
    padding: 0;
}

.header {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
}

.header>* {
    padding: 8px;
    margin: 16px;
}

@media (min-width: 1025px) and (max-width: 1280px) {

    .header {
        gap: 10px;
    }

}

@media (min-width: 768px) and (max-width: 1024px) {

    .header {
        gap: 0;
        width:95%;
    }

    .header>a {
        padding:4px;
        margin: 0;
    }

}

@media (max-width: 767px) {

    .header {
        gap: 0;
        width:99%;
    }

    .header>a {
        padding:4px;
        margin: 0;
    }

}</style>