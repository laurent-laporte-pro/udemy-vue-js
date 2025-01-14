import { Country, type GroupedMonetizationData } from '@/types/monetization'

export const formatDollar = (value: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

export const formatPercent = (x: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(x)
}

export const getBestCountryRevenue = (item: GroupedMonetizationData): string => {
  const countries = Object.values(Country)
  const revenues = countries.map((country) => item[`totalRevenues${country}`])
  const bestCountryIndex = revenues.indexOf(Math.max(...revenues))
  const bestCountry = countries[bestCountryIndex]
  const bestRevenue = revenues[bestCountryIndex]
  return `${bestCountry} with a total of ${formatDollar(bestRevenue)}`
}
