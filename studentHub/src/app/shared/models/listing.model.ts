// export interface Listing {
//   id: number;
//   name: string;
//   type: ListingType
//   city?: string;
//   price?:number;
//   area?: string;
//   images?: string[];
//   active: boolean;
// }
export interface Listing {
  id: number;
  name: string;
  type: ListingType;
  city?: string;
  area?: string;
  price?: number;
  images?: string[];   // 🔑 no optional
  active: boolean;
}

export type ListingType = 'mess' | 'hostel' | 'library';