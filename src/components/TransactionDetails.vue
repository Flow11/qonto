<template>
  <div class="container">
    <div class="header"></div>
    <div class="body" v-bind:class="{ empty: transactions.length === 0 }">
      <span v-if="transactions.length === 0">Click on one or several transactions to see details</span>
      <span v-if="transactions.length > 0">
        <ul v-for="transaction in transactions">
          <li>{{transaction.id}}</li>
          <li>{{transaction.counterparty_name}}</li>
          <li>{{transaction.debit}}</li>
          <li>{{transaction.amount}}</li>
          <li>{{transaction.currency}}</li>
          <li>{{transaction.operation_type}}</li>
          <li><img :src="transaction.attachements[0].url" /></li>
        </ul>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transactions']
}
</script>

<style scoped>
.container{
  height: 100%;
  width: 355px;
  margin-bottom: -5000px;
  padding-bottom: 5000px;
  overflow: hidden;
}
.header{
  height: 90px;
  background-color: #F6F6F6;
}
.body{
  color: #878787;
}
.body.empty{
  margin-top: 430px;
}
</style>
