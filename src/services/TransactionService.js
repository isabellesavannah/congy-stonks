import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { congApi } from './AxiosService'

class TransactionService {
  async getTrans() {
    try {
      const res = await congApi.get('')
      AppState.transactions = res.data
      console.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const transactionService = new TransactionService()
