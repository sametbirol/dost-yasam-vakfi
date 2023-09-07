<template>
    <div class="activity">
        <div class="activityPhoto"></div>
        <div class="activityName subheader">{{ props.activityName }}</div>
        <div class="description footer">{{ props.description }}</div>
    </div>
</template>
<script setup>
const props = defineProps({
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
    background-color: black;
    border-radius: 40px;
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
