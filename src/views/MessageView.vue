<template>
  <div class="home">
    <input v-model="inputEle" type="text" />
    <button @click="sendMessage">send</button>
    <div v-for="k in messagelist" :key="k">
      {{ k.usersName }}:{{ k.message }}
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const messagelist = reactive([]);
const inputEle = ref("");
const username = prompt("请输入昵称") || '游客';
const ws = new WebSocket(`ws://localhost:9911?username=${username}`);
function sendMessage() {
  ws.send(JSON.stringify(inputEle.value));
  inputEle.value = "";
}
ws.addEventListener("open", (m) => {
  console.log("成功链接");
});
ws.addEventListener("message", (m) => {
  console.log(m.data);
  const message = JSON.parse(m.data);
  console.log(message);
  if (Array.isArray(message)) {
    messagelist.push(...message);
  } else if (typeof message === "object") {
    messagelist.push(message);
  }
});
</script>
<style lang="scss" scoped>
</style>
