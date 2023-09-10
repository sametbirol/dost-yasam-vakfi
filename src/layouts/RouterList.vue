<template>
    <div class="routers">
        <RouterLink active-class="exact-active" to="/">Anasayfa</RouterLink>
        <RouterLink active-class="exact-active" to="/hakkimizda">Hakkımızda</RouterLink>
        <RouterLink active-class="exact-active" to="/etkinlikler">Etkinlikler</RouterLink>
        <RouterLink active-class="exact-active" to="/bilgi-kosesi">Bilgi Köşesi</RouterLink>
        <RouterLink active-class="exact-active" to="/bagis-yap">Destek / Bağış</RouterLink>
    </div>
</template>
<style scoped>
.routers>a {
    padding: 8px;
    margin: 16px;
    min-width: 100px;
}

.routers {
    display: flex;
    gap: 16px;
    align-items: center;
}
.exact-active{
    background-color: var(--blue-darken-3);
    color:var(--blue-lighten-2);
    padding: 12px;
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