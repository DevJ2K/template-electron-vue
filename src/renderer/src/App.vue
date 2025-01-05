<script setup lang="ts">
import Versions from './components/Versions.vue'


window.electron.ipcRenderer.on('pong', () => {
  console.log("Receive pong from backend...")
})

const ipcHandle = () => {
  console.log("UI sending ping...")
  window.electron.ipcRenderer.send('ping')
}
// window.addEventListener('resize', () => {
//     console.log(`Window width: ${window.innerWidth}, Window height: ${window.innerHeight}`);
// });
</script>

<template>
  <img alt="logo" class="logo" src="./assets/electron.svg" />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
    and
    <span class="ts">TypeScript</span>
  </div>
  <h1 class="font-bold">Tailwind is <span class="font-bold text-green-500">working</span> !</h1>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
  <Versions />
</template>
