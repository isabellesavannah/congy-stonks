import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TransactionService {
  async getTrans() {
    try {
      const res = await api.get('')
      AppState.transactions = res.data
      console.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const transactionService = new TransactionService()
