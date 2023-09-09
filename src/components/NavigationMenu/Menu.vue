<template>
    <div class="mobile-inactive">
        <RouterList></RouterList>
    </div>
    <div class="mobile-active">
        <MenuButton @menu-toggle="callback" ref="ignoredButton" :class="isActive ? `active` : ``"></MenuButton>
        <MenuDropdown v-on-click-outside="onClickOutsideHandler" :class="isActive ? `active` : ``"></MenuDropdown>
    </div>
</template>

<script setup>
import MenuButton from './MenuButton.vue'
import RouterList from './RouterList.vue'
import MenuDropdown from './MenuDropdown.vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue';
const ignoredButton = ref(null)
const isActive = ref(false)
const callback = () => {
    isActive.value = !isActive.value
}
const onClickOutsideHandler = [
    (ev) => {
        console.log(ev)
        isActive.value = false;
    },
    { ignore: [ignoredButton] }
]
</script>