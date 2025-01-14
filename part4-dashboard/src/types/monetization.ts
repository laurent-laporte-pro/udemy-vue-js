export enum Country {
  AU = 'AU',
  CN = 'CN',
  FR = 'FR',
  JP = 'JP',
  UK = 'UK',
  US = 'US'
}

export enum Platform {
  Android = 'Android',
  iOS = 'iOS'
}

export enum AdFormat {
  BANNER = 'BANNER',
  FULLSCREEN = 'FULLSCREEN',
  REWARDED = 'REWARDED',
  VIDEO = 'VIDEO'
}

export interface MonetizationData {
  id: number;
  date: string;
  country: Country;
  platform: Platform;
  app: string;
  format: AdFormat;
  revenue: number;
  views: number;
  conversions: number;
}

export interface MonetizationResponse {
  data: MonetizationData[];
}

export interface GroupedMonetizationData {
  app: string;
  totalRevenues: number;
  totalRevenuesAU: number;
  totalRevenuesCN: number;
  totalRevenuesFR: number;
  totalRevenuesJP: number;
  totalRevenuesUK: number;
  totalRevenuesUS: number;
  views: number;
  conversions: number;
  rewarded: number;
  banner: number;
  fullscreen: number;
  video: number;

  [key: string]: number | string | undefined;
}
