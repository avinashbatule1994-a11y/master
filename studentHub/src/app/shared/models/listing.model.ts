export interface Listing {
  id: number;
  name: string;
  type: ListingType
  city?: string;
  price?:number;
  area?: string;
  images?: string[];
  active: boolean;
}
export type ListingType = 'mess' | 'hostel' | 'library';