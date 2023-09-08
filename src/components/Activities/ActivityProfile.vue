<template>
    <div class="activity">
        <img class="activityPhoto" loading="lazy"/>
        <div class="activityName subheader">{{ props.activityName }}</div>
        <div class="description footer">{{ props.description }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
    imageURL : {
        type : String,
        default : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/512px-Solid_red.svg.png?20150316143248"
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
.activity{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 500px;
}
.activityPhoto {
    width: 500px;
    height: 500px;
    background-color: var(--blue--darken-2);
    border-radius: 48px;
    background-image: v-bind("props.imageURL");
    background-size: cover;
    background-position: center;
}
.activityName{
    width: 80%;
    font-family: "Elsie";
    padding-left: 8px;
}
.description{

    font-weight: 600;
    text-align:left ;
    padding-left: 16px;
    font-style: unset;
}
</style>
