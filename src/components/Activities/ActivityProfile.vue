<template>
    <div class="activity">
        <img class="activityPhoto" loading="lazy" />
        <div class="subheader">{{ props.activityName }}</div>
        <div class="footer">{{ props.description }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
    imageURL: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/512px-Solid_red.svg.png?20150316143248"
    },
    activityName: {
        type: String,
        default: "Activity",
    },
    description: {
        type: String,
        default: "Description",
    },
})
</script>
<style scoped>
.activity {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: min-content;
}

.activityPhoto {
    background-color: var(--blue--darken-2);
    background-image: v-bind("props.imageURL");
    background-size: cover;
    background-position: center;
}

.subheader {
    font-family: "Elsie";
    padding-left: 4px;
}

.footer {
    font-weight: 600;
    text-align: left;
    padding-left: 8px;
    font-style: unset;
}


@media (min-width: 1281px) {
    .activityPhoto {
        width: 440px;
        height: 440px;
        border-radius: 44px;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .activityPhoto {
        width: 380px;
        height: 380px;
        border-radius: 40px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .activityPhoto {
        width: 300px;
        height: 300px;
        border-radius: 32px;
    }
}

@media (max-width: 767px) {
    .activityPhoto {
        width: 200px;
        height: 200px;
        border-radius: 24px;
    }
}

@media (max-width: 480px) {
    .activityPhoto {
        width: 120px;
        height: 120px;
        border-radius: 12px;
    }
}
</style>
