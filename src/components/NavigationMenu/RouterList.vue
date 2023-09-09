<template>
    <div class="routers">
        <RouterLink exact-active-class="exact-active" to="/">Anasayfa</RouterLink>
        <RouterLink exact-active-class="exact-active" to="/hakkimizda">Hakkımızda</RouterLink>
        <RouterLink exact-active-class="exact-active" to="/etkinlikler">Etkinlikler</RouterLink>
        <RouterLink exact-active-class="exact-active" to="/bilgi-kosesi">Bilgi Köşesi</RouterLink>
        <RouterLink exact-active-class="exact-active" to="/bagis-yap">Destek / Bağış</RouterLink>
    </div>
</template>
<style scoped>
.routers>* {
    padding: 8px;
    margin: 16px;
}

.routers {
    display: flex;
    gap: 16px;
}
.excat-active{
    background-color: red;
}


@media (min-width: 1025px) and (max-width: 1280px) {

    .routers {
        gap: 12px;
    }

    .routers>a {
        padding: 4px;
        margin: 8px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {

    .routers {
        gap: 8px;
    }

    .routers>a {
        padding: 4px;
        margin: 4px;
    }

}

@media (max-width: 768px) {

    .routers {
        gap: 8px;
    }

    .routers>a {
        padding: 4px;
        margin: 4px;
    }

}
</style>