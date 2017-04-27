<template>
  <div class="container">
    <h1 class="title">FINPAL</h1>
    <ul class="menuLinks">
      <li>Overview</li>
      <li><router-link to="transactions">Transactions (3)</router-link></li>
      <hr />
      <li>Transfers (3)</li>
      <li>Invoices (1)</li>
      <hr />
      <li>Manage cards</li>
      <li>Manage accounts</li>
      <hr />
      <li>Team</li>
      <li>Integrations</li>
      <li>Settings</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidemenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  float: left;
  width: 291px;
  background-color: #414851;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
  overflow: hidden;
}

.title{
  display: flex;
  align-items: center;
  height: 90px;;
  text-align: left;
  padding-left: 58px;
  color: #FFFFFF;
  background-color: #393F47;
}

.menuLinks {
  padding: 16px 0 16px 0;
}

.menuLinks li{
  color: #8D94A0;
  text-align: left;
  margin: 18px 32px 18px 32px;
}

.menuLinks hr{
  border-color: #8D94A0;
}
</style>
