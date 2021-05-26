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
      // TODO Sort res.data res.data.sort((a,b)=> new Date(a.transacitionDate).getTime() - new Date(b.transactionDate).getTime)

      AppState.transactions = res.data.sort((a, b) => new Date(b.TransactionDate).getTime() - new Date(a.TransactionDate).getTime())
      // console.log(res.data)
    } catch (err) {
      logger.error(err)
    }
  }

  async getAllTickersByTicker(Ticker) {
    try {
      const res = await api.get('api/congTicker/' + Ticker)
      AppState.tickers = res.data
      // console.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const transactionService = new TransactionService()
