<template>
  <div class="container">
    <table>
      <tr>
        <td>DD-MM-YYYY</td>
        <td>Counterparty Name</td>
        <td>Payment type</td>
        <td>Amount</td>
      </tr>
      <tr v-for="transaction in transactions">
        <td>{{transaction.created_at}}</td>
        <td>{{transaction.counterparty_name}}</td>
        <td>{{transaction.operation_type}}</td>
        <td>{{transaction.amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'transactions',
  data: () => {
    return {
      transactions: []
    }
  },
  mounted: function () {
    fetch('http://private-5d708-interviewfront.apiary-mock.com/transactions')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
    .then((response) => {
      this.transactions = response.transactions
      console.log(this.transactions)
    })
  }
}
</script>

<style>
.container{
}
</style>
