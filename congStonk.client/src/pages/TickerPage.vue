<template>
  <div class="row ticker flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <transaction-component v-for="(t,i) in state.tickers" :key="i" :trans-prop="t" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { transactionService } from '../services/TransactionService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'TickerPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      // trans: computed(() => AppState.transactions),
      tickers: computed(() => AppState.tickers)
    })
    onMounted(() => transactionService.getAllTickersByTicker(route.params.ticker))
    return { state }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
