<script lang="ts" setup>
interface SocialIconProps {
  name: string
  url: string
  img: string
}

const props: SocialIconProps = defineProps<SocialIconProps>()
</script>

<template>
  <a :href="props.url" rel="noopener noreferrer" target="_blank">
    <img :alt="props.name" :src="`/src/assets/${props.img}`" class="social-img" />
  </a>
</template>

<style scoped>
.social-img {
  margin-right: 10px;
  filter: opacity(0.8);
  width: 32px;
  height: 32px;
}
</style>