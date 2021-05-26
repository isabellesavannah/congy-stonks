<template>
  <div class="transactionComponent col-5 card">
    <h2>
      {{ transProp.Representative }}
    </h2>
    <router-link :to="{ name: 'TickerPage', params: { ticker: transProp.Ticker } }" class="nav-link">
      <h2>
        {{ transProp.Ticker }}
      </h2>
    </router-link>
    <h4>
      <span v-if="transProp.Transaction.includes('Sale')" class="text-danger">Sale</span>
      <span v-else class="text-success">Purchase</span>
    </h4>
    <p>
      {{ transProp.Range }}
    </p>
    <p>
      {{ new Date (transProp.TransactionDate).toDateString() }}
    </p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { transactionService } from '../services/TransactionService'
export default {
  name: 'TransactionComponent',
  props: {
    transProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      transProp: computed(() => AppState.transactions),
      rep: computed(() => AppState.rep)
    })
    // onMounted(() => transactionService.getAllTickersByTicker())
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
