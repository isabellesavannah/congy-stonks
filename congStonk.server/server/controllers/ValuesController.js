import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { congApi } from "../services/AxiosService";

export class ValuesController extends BaseController {
  constructor() {
    super("api");
    this.router
      .get("/congLive", this.getLive)
      .get("/congTicker/:ticker", this.getTickers)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req s
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getLive(req, res, next) {
    try {
      const trades = await congApi.get('live/congresstrading')
      res.send(trades.data)
    } catch (error) {
      next(error);
    }
  }
  async getTickers(req, res, next){
    try{
    const ticker = await congApi.get(`historical/congresstrading/${req.params.ticker}`)
    res.send(ticker.data)
    } catch (error){
      next(error);
    }
  }
}
