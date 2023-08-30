<template>
    <a :href="props.url"  >
    <slot></slot>
    </a>
</template>
<script setup>
const props = defineProps(['url'])
console.log(props)
</script>