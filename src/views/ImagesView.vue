<template>
  <div>
    <img
      v-for="url in imagesLength"
      :key="url"
      :src='url'
    />
  </div>
</template>
<script>
let files = import.meta.globEager('../assets/images/*.png');
let imagesLength = Object.values(files).map((v) => v.default);

export default {
  data() {
    return {
      imagesLength,
    };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  display: block;
}
</style>