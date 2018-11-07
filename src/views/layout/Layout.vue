<template>
 <div class="app-wrapper">
     <topbar class="top-bar"></topbar>
     <sidebar class="sidebar-container"></sidebar>
     <div class="main-container">
         <navbar/>
         <app-main/>
     </div>
</div>
</template>
<script>
import {Navbar, Sidebar, AppMain, Topbar} from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Topbar
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
