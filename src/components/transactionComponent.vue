<template>
  <div class="transactionComponent col-5 card">
    <h3 class="text-white">
      {{ transProp.name }}
    </h3>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
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
      transProp: computed(() => AppState.transaction)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
