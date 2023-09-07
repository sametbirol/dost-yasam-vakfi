<template>
    <div class="media">
        <div class="header" v-html="props.header">
        </div>
        <!-- <div class="routers" ref="hello">
            <slot name="router"></slot>
        </div> -->
    </div>
</template>
<script setup>
const props = defineProps({
    image: String,
    header : String
})
</script>
<style scoped>
/* :slotted(.inline) {
    transition: 300ms;
    border-radius: 0;
    border-bottom: 1px solid transparent;
}

:slotted(.inline):hover {
    background-color: transparent;
    color: white;
    border-color: white;
}

:slotted(.disabled) {
    pointer-events: none;
}

:slotted(.disabled),
:slotted(.inline) {
    font-size: 20px;
    margin: 5px;
    color: var(--blue-lighten-1);
} */



.media {
    color: #fff;
    position: relative;
    width: 100%;
    height: 300px;
    padding: 10px;
    background-size: cover;
    background-position: center;
    background-image: v-bind("props.image");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.media:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    /* transition: all .2s linear; */
}
.header {
    color: white;
    font-family: 'Electrolize', sans-serif;
}

/* .routers {
    background: black;
    border-radius: 5px;
    color: white;
} */
.header,.routers{
    z-index: 2;
}

@media (min-width: 1025px) and (max-width: 1280px) {

    /* :slotted(.disabled),
    :slotted(.inline) {
        font-size: 16px;
    }

    :slotted(.title) {
        font-size: 26px;
    } */

    .media {
        height: 180px;
    }

}

@media (min-width: 768px) and (max-width: 1024px) {

    /* :slotted(.disabled),
    :slotted(.inline) {
        font-size: 12px;
    }

    :slotted(.title) {
        font-size: 20px;
    } */

    .media {
        height: 160px;
    }



}

@media (max-width: 767px) {

    /* :slotted(.disabled),
    :slotted(.inline) {
        font-size: 12px;
    }

    :slotted(.title) {
        font-size: 16px;
    } */

    .media {
        height: 140px;
    }

}
</style>