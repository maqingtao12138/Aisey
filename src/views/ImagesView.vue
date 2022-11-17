<template>
  <div>
    <img
      v-for="k in imagesLength"
      :src="`/src/assets/images/${k}.png`"
      :key="k"
    />
  </div>
</template>
<script>

export default {
  data() {
    return {
      imagesLength: new Array(3000).fill().map((item, index) => index),
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