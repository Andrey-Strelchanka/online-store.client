export type priceType = {
  amount: number;
  currency: string;
};

export interface IDevice {
  _id?: string;
  full_name?: string;
  category?: string;
  isActive?: boolean;
  image?: string;
  description?: string;
  micro_description?: string;
  color_code?: string;
  prices?: priceType;
}
