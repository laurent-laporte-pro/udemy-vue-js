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
