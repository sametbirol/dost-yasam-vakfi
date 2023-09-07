<template>
    <div class="wrapper">
        <div class="container">
            <div class="subheader">Sıkça Sorulan Sorular</div>
            <div class="questions">
                <FAQProfile v-for="obj in objs" v-bind="obj"></FAQProfile>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    flex-direction: column;
}
.wrapper{
    background-color: var(--blue-lighten-2);
}
.subheader {
    font-family: 'Spline Sans Mono', monospace;
}

.questions {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
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