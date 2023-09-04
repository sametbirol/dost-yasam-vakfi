<template>
    <div class="wrapper">
        <div class="container">
            <div class="header">Sıkça Sorulan Sorular</div>
            <div class="questions">
                <FAQProfile v-for="obj in objs" v-bind="obj"></FAQProfile>
            </div>
        </div>
    </div>
</template>
<style scoped>
.wrapper{
    width: 100%;
    background-color: var(--blue-lighten-2);
    display: flex;
    justify-content: center;
    padding: 120px;
}
.container{
    width: 80%;
}
.header {
    width: 100%;
    font-family: 'Spline Sans Mono', monospace;
    font-size: var(--base-subheader-size);
}

.questions {
    display: flex;
}
</style>
<script setup>
import FAQProfile from './FAQProfile.vue';
const objs = [
    {
        question: "Vakıf kimlerle çalışır?",
        answer: "Vakfımız Down sendromlu bireylerle ve aileleriyle birlikte çalışmaktadır."
    },
    {
        question: "Yardım nasıl sağlanıyor?",
        answer: "Eğitim, sosyal etkinlikler, kültürel faaliyetler ve maddi desteklerle sağlarız."
    },
    {
        question: "Nasıl destek olabilirim?",
        answer: "Üye olarak, bağış yaparak ve etkinliklerimize katılarak destek olabilirsiniz."
    },

]
</script>