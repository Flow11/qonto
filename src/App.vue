<template>
  <div id="app">
    <SideMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  components: {
    SideMenu
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
  height: 100%;
}

html,
body {
  height: 100%;
  padding: 0;
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

a, a:visited {
 color: inherit;
}
</style>
