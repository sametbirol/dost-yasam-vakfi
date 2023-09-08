<template>
    <div class="routers">
        <RouterLink to="/">Anasayfa</RouterLink>
        <RouterLink to="/hakkimizda">Hakkımızda</RouterLink>
        <RouterLink to="/etkinlikler">Etkinlikler</RouterLink>
        <RouterLink to="/bilgi-kosesi">Bilgi Köşesi</RouterLink>
        <RouterLink to="/bagis-yap">Destek / Bağış</RouterLink>
    </div>
    <div class="menu">
        <i class="fa fa-bars" width="30" height="30"></i>
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

.menu {
    display: none;
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

@media (max-width: 767px) {

    .routers {
        display: none;
    }

    .menu {
        display: block;
    }

}
</style>