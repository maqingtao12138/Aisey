<template>
  <div>{{ name }}</div>
  <div>{{ age }}{{ data1.getCompany("age") }}</div>
  <div>{{ shengao }}{{ data1.getCompany("shengao") }}</div>
  <div>{{ tizhong }}{{ data1.getCompany("tizhong") }}</div>
</template>
<script setup>
import { useData1Store } from "@/stores/counter";
import { storeToRefs } from "pinia";
const data1 = useData1Store();
const { name, age, tizhong, shengao } = storeToRefs(data1);
</script>
