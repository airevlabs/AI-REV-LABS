
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}