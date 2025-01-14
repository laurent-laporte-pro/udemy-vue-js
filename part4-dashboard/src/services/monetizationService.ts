// services/monetizationService.ts
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import type { GroupedMonetizationData, MonetizationData, MonetizationResponse } from '@/types/monetization'

export class MonetizationService {
  public headers: Array<Record<string, string>> = [
    { title: 'App & Platform', align: 'start', key: 'app' },
    { title: 'AU', align: 'end', key: 'totalRevenuesAU' },
    { title: 'CN', align: 'end', key: 'totalRevenuesCN' },
    { title: 'FR', align: 'end', key: 'totalRevenuesFR' },
    { title: 'JP', align: 'end', key: 'totalRevenuesJP' },
    { title: 'UK', align: 'end', key: 'totalRevenuesUK' },
    { title: 'US', align: 'end', key: 'totalRevenuesUS' },
    { title: 'Total', align: 'end', key: 'totalRevenues' },
    { key: 'data-table-expand' }
    // { title: 'Views', align: 'end', key: 'views' },
    // { title: 'Conversions', align: 'end', key: 'conversions' },
    // { title: 'Rewarded', align: 'end', key: 'rewarded' },
    // { title: 'Banner', align: 'end', key: 'banner' },
    // { title: 'Fullscreen', align: 'end', key: 'fullscreen' },
    // { title: 'Video', align: 'end', key: 'video' },
  ]
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

  /**
   * Group monetization data by app and platform.
   *
   * It calculates total revenues and revenues by country.
   * It also counts the number of views, conversions, and revenues by ad format.
   *
   * @param data Monetization data extracted from the API.
   * @returns Grouped monetization data as list of objects.
   */
  getDataByAppPlatform (data: MonetizationData[]): GroupedMonetizationData[] {
    const reducer = (acc: Record<string, GroupedMonetizationData>, entry: MonetizationData) => {
      const key = `${entry.app} ${entry.platform}`
      const value = acc[key] || {
        app: key,
        totalRevenues: 0,
        totalRevenuesAU: 0,
        totalRevenuesCN: 0,
        totalRevenuesFR: 0,
        totalRevenuesJP: 0,
        totalRevenuesUK: 0,
        totalRevenuesUS: 0,
        views: 0,
        conversions: 0,
        rewarded: 0,
        banner: 0,
        fullscreen: 0,
        video: 0,
      }

      // Extract previous values
      const totalRevenuesCountryKey = `totalRevenues${entry.country}`
      const prevTotalRevenues = value['totalRevenues']
      const prevTotalRevenuesCountry = value[totalRevenuesCountryKey] as number
      const prevViews = value['views']
      const prevConversions = value['conversions']
      const prevRewarded = value['rewarded']
      const prevBanner = value['banner']
      const prevFullscreen = value['fullscreen']
      const prevVideo = value['video']

      // Update values
      value['totalRevenues'] = prevTotalRevenues + entry.revenue
      value[totalRevenuesCountryKey] = prevTotalRevenuesCountry + entry.revenue
      value['views'] = prevViews + entry.views
      value['conversions'] = prevConversions + entry.conversions
      // value['platform'] = entry.platform
      value['rewarded'] = entry.format === 'REWARDED' ? prevRewarded + entry.revenue : prevRewarded
      value['banner'] = entry.format === 'BANNER' ? prevBanner + entry.revenue : prevBanner
      value['fullscreen'] = entry.format === 'FULLSCREEN' ? prevFullscreen + entry.revenue : prevFullscreen
      value['video'] = entry.format === 'VIDEO' ? prevVideo + entry.revenue : prevVideo

      acc[key] = value
      return acc
    }

    const map = data.reduce(reducer, {})
    return Object.values(map)
  }
}
