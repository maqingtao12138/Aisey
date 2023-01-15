<template>
  <div class="imagesBody" ref="imagesBody">
    <div class="fullScreenStatusSwitch" @click="fullScreenStatusSwitch">
      {{ fullScreenStatus ? "退出" : "全屏" }}
    </div>
    <img v-for="url in currentImages" :key="url" :src="url" />
    <div class="foot" ref="foot"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive, inject } from "vue";
const files = import.meta.globEager("../assets/images/*.png");
const allImages = Object.values(files)
  .map((v) => v.default)
  .sort(() => Math.random() - 0.5);
const currentImages = reactive([]);
const foot = ref(null);
const imagesBody = ref(null);
let fullScreenStatus = ref(false);
const ob = new IntersectionObserver(
  (entries) => {
    const footTarget = entries[0];
    if (footTarget.isIntersecting) {
      currentImages.push(
        ...allImages.slice(currentImages.length, currentImages.length + 10)
      );
    }
  },
  {
    thresholds: 0.01,
  }
);
onMounted(() => {
  ob.observe(foot.value);
});
function fullScreenStatusSwitch() {
  fullScreenStatus.value ? closeFullscreen() : openFullscreen(imagesBody.value);
  fullScreenStatus.value = !fullScreenStatus.value;
}

/* 全屏查看 */
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* 关闭全屏 */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}
// Mock.setup({
//   timeout: 3000
// })
// let aa = ''
// function a(){
//   // 请求数据
//    axios.get('/aaa').then(res=> {
//     // 拿到数据后渲染到页面
//     aa = res.data?.data?.aaa
//   });
//   // 计时
//   setTimeout(()=>{
//     // 计时结束判断是否拿到数据
//     if(!aa){
//       // 没拿到要做什么
//       alert('超时')
//     }
//   },5000)
// }
// a()

</script>
<style lang="scss" scoped>
.imagesBody {
  background: #000;
  overflow-y: scroll;
  position: relative;

  .fullScreenStatusSwitch {
    position: fixed;
    top: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #000;
    opacity: 0.3;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
    font-family: cursive;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
    max-width: 512px;
    margin: 0 auto;
  }
  .foot {
    height: 50px;
  }
}
.imagesBody::-webkit-scrollbar {
  display: none;
}
</style>