<template>
  <div class="transactionComponent col-5 card">
    <h3>
      <!-- {{ transProp.Ticker }} -->
      {{ transProp.Representative }}
      {{ transProp.Ticker }}
      {{ ticker }}
    </h3>
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
      ticker: computed(() => AppState.tickers)
    })
    onMounted(() => transactionService.getTicker())
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
