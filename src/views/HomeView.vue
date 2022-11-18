<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <div>{{ age }}{{ data1.getCompany("age") }}</div>
    <div>{{ shengao }}{{ data1.getCompany("shengao") }}</div>
    <div>{{ tizhong }}{{ data1.getCompany("tizhong") }}</div>
    <img class="imgs" :src="photo" @click="toImages" />
  </div>
</template>
<script setup>
// defineProps：子组件接收父组件中传来的props
// defineEmits：子组件调用父组件中的方法
// defineExpose：子组件暴露属性，可以在父组件中拿到
import { useData1Store } from "@/stores/counter";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const data1 = useData1Store();
const router = useRouter();
const { name, age, tizhong, shengao, photo } = storeToRefs(data1);
function toImages() {
  router.push("/images");
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  color: pink;
  background-color: rgb(106, 185, 238);
  div {
    text-align: center;
  }
  h1 {
    text-align: center;
    margin: 0px;
    padding-top: 75px;
    color: pink;
  }
  .imgs {
    display: block;
    margin: 0 auto;
    margin-top: 22px;
    width: 350px;
    cursor: pointer;
    border-radius: 50%;
    border: 15px solid pink;
  }
}
</style>
