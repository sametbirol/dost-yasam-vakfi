<template>
    <div class="wrapper">
        <div class="container">

            <div class="header">Kurucular</div>
            <div class="footer">"Dost Yaşam Vakfı'nın başarılı ve tecrübeli kurucu ekibi, fark yaratmayı hedefliyor."</div>

            <div class="founders">
                <FounderProfile v-for="founder in founders" v-bind="founder"></FounderProfile>
            </div>

            <div class="header">Mütevelli Heyetimiz</div>
            <div class="founders">
                <TrusteesProfile v-for="trustee in trustees" v-bind="trustee"></TrusteesProfile>
            </div>
        </div>
    </div>
</template>
<script setup>
import FounderProfile from './FounderProfile.vue';
import TrusteesProfile from './TrusteesProfile.vue';

const founders = [
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        image: "https://freerangestock.com/sample/120140/business-man-profile-vector.jpg",
        founderName: "Samet Birol",
        role: "Sekreter"
    },
]

const trustees = [
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
    {
        founderName: "Samet Birol",
        role: "Sekreter"
    },
]
</script>
<style scoped>
.header {
    font-family: "Elsie", cursive;
}

.footer {
    font-style: italic;
}

.container {
    justify-content: space-evenly;
    flex-direction: column;
    color: var(--blue-lighten-1);
    color: var(--blue-darken-1);
    padding: 100px 0 100px 0;
    gap: 20px;
}

.wrapper {
    background-color: var(--blue-lighten-1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.founders {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
    padding-bottom: 50px;
}

</style>