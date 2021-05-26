<template>
  <div class="row home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <transaction-component v-for="(t,i) in state.trans" :key="i" :trans-prop="t" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { transactionService } from '../services/TransactionService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      trans: computed(() => AppState.transactions.splice(0, 10))
    })
    onMounted(() => transactionService.getTrans())
    return { state }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
