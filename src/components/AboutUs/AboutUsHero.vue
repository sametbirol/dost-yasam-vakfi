<template>
    <div class="container">
        <!-- <div class="content-wrapper"> -->
        <img src="../../assets/media/handshakelight.svg" width="64" height="64" />
        <p class="text">Dost Yaşam Vakfı, Yardım Eli
        </p>
        <RouterLink to="/bagis-yap" class="inline">
            <DonationButton>Bağış Yap</DonationButton>
        </RouterLink>
    </div>
    <!-- </div> -->
</template>
<script setup>
import DonationButton from '../Donation/DonationButton.vue';
</script>
<style scoped>

.text {
    font-size: var(--header-size-xl);
    font-family: 'Electrolize', sans-serif;
}

.container {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: var(--blue-darken-1);
    color: var(--blue-lighten-1)
}

.inline {
    background-color: transparent;
}</style>