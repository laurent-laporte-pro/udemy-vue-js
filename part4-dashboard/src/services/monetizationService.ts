// services/monetizationService.ts
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { MonetizationData, MonetizationResponse } from '@/types/monetization'

export class MonetizationService {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({
      baseURL: 'https://www.anthony-cardinale.fr/_placeholder',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  async getMonetizationData (): Promise<MonetizationData[]> {
    try {
      const response = await this.api.get<MonetizationResponse>('/monetization-api.json',)
      return response.data.data
    } catch (error) {
      console.error('Erreur lors de la récupération des données de monétisation:', error)
      throw error
    }
  }

  // getRevenueByCountry (data: MonetizationData[]): Record<Country, number> {
  //   const reducer = (acc: Record<Country, number>, item: MonetizationData) => {
  //     acc[item.country] = (acc[item.country] || 0) + item.revenue
  //     return acc
  //   }
  //   return data.reduce(reducer, {} as Record<Country, number>)
  // }

}
