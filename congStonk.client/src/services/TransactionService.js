import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

// Amount: 1001
// House: "Senate"
// Range: "$1,001 - $15,000"
// ReportDate: "2021-05-19"
// Representative: "Shelley Moore Capito"
// Ticker: "WFC"
// Transaction: "Sale"
// TransactionDate: "2021-04-26"
class TransactionService {
  async getTrans() {
    try {
      const res = await api.get('api/congLive')
      AppState.transactions = res.data
      // console.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async getAllTickersByTicker(rep) {
    try {
      const res = await api.get('api/congTicker/' + rep)
      AppState.rep = res.data
      // console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const transactionService = new TransactionService()
