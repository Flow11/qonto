<template>
  <div id="app">
    <SideMenu />
    <MainHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
import MainHeader from './components/MainHeader'
export default {
  components: {
    SideMenu,
    MainHeader
  },
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
}

ul, li {
  list-style: none;
  margin: 0;
	padding: 0;
}

a:visited {
 color: inherit;
}
</style>
