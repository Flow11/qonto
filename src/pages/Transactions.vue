<template>
  <div class="container">
    <div class="mainSection">
      <MainHeader />
      <table class="transactionsTable">
        <tr class="transactionsRow pointer">
          <td v-on:click="setSort('created_at')">DD-MM-YYYY</td>
          <td v-on:click="setSort('counterparty_name')">Counterparty Name</td>
          <td v-on:click="setSort('operation_type')">Payment type</td>
          <td v-on:click="setSort('amount')">Amount</td>
        </tr>
        <tr
          class="transactionsRow"
          v-bind:class="{ active: selectedRows.indexOf(index) !== -1 }"
          @click="toggleRow(index, $event)"
          v-for="(transaction, index) in sortedTransactions"
          >
          <td>{{transaction.created_at}}</td>
          <td>{{transaction.counterparty_name}}</td>
          <td>{{transaction.operation_type}}</td>
          <td>{{transaction.amount}}</td>
        </tr>
      </table>
    </div>
    <TransactionDetails :transactions="selectedTransactions"/>
  </div>
</template>

<script>
import _ from 'lodash'
import MainHeader from '../components/MainHeader'
import TransactionDetails from '../components/TransactionDetails'

export default {
  name: 'transactions',
  components: {
    MainHeader,
    TransactionDetails
  },
  data: () => {
    return {
      transactions: [],
      sortType: '',
      sortAsc: false,
      selectedRows: []
    }
  },
  methods: {
    toggleRow: function (index, event) {
      if (event.shiftKey) {
        this.selectedRows.push(index)
      } else {
        this.selectedRows = [index]
      }
    },
    setSort: function (sortType) {
      this.sortAsc = this.sortType === sortType ? !this.sortAsc : !this.sortAsc
      this.sortType = sortType
    }
  },
  computed: {
    sortedTransactions: function () {
      if (this.sortType !== '') {
        return this.sortAsc
          ? _.sortBy(this.transactions, [this.sortType])
          : _.sortBy(this.transactions, [this.sortType]).reverse()
      }

      return this.transactions
    },
    selectedTransactions: function () {
      return this.transactions.filter((transaction, index) => {
        return this.selectedRows.indexOf(index) > -1
      })
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
    })
  }
}
</script>

<style>
.container {
  float:left;
}
.mainSection {
  float: left;
}
.transactionsTable {
  margin-top: 90px;
  margin-left: 240px;
  margin-right: 100px;
  border-spacing : 0;
}

.transactionsRow {
  height: 80px;
}

.transactionsRow td {
  padding-right: 30px;
  border-bottom: 1px solid #CBCBCB;
}

.pointer {
  cursor: pointer;
}

.active{
  background-color: #f9f7f7;
}
</style>
