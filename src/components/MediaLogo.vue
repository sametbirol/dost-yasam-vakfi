<template>
    <div class="logos">
        <a href="https://twitter.com/dostyasamvakfi" target="_blank">
            <img src="@/assets/header/x.svg" />
        </a>
        <a href="https://www.instagram.com/dostyasamvakfi/" target="_blank">
            <img src="@/assets/header/instagram.svg" />
        </a>
        <a href="https://www.facebook.com/groups/144062549012802/" target="_blank">
            <img src="@/assets/header/facebook.svg" />
        </a>
    </div>
</template>
<script setup>
</script>
<style scoped>
.logos {
    display: flex;
    gap: 20px;
    flex: 1;
}

.logos>img {
    width: 24px;
    height: 24px;
}

.logos>a {
    padding: 0;
    margin: 0;
    display: flex;
}

.logos>a:hover {
    background: none;
}

@media (min-width: 768px) and (max-width: 1024px) {

    .logos>a>img {
        width: 18px;
        height: 18px;
    }

}

@media (max-width: 767px) {

    .logos>a>img {
        width: 12px;
        height: 12px;
    }

}</style>