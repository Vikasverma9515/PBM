// // types/Product.ts
// export interface Product {
//   slug: string;
//   name: string;
//   price: number;
//   category: string;
//   description: string;
//   shortDescription: string;
//   images: string[];
//   features: string[];
//   specifications: {
//     power?: string;
//     modules?: string;
//     sessionTime?: string;
//     warranty?: string;
//     irradiance?: string;
//     [key: string]: any;
//   };
//   benefits: string[];
//   whatsInBox: string[];
//   userGuides: {
//     title: string;
//     url: string;
//   }[];
//   videos: {
//     title: string;
//     thumbnail: string;
//     url: string;
//   }[];
//   combinedProducts?: {
//     slug: string;
//     name: string;
//     price: number;
//     image: string;
//     tags: string[];
//   }[];
// }


// types/Product.ts
export interface Product {
  id?: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  description: string;
  short_description?: string;
  images: string[];
  features: string[];
  specifications: {
    power?: string;
    modules?: string;
    sessionTime?: string;
    warranty?: string;
    irradiance?: string;
    [key: string]: any;
  };
  benefits: string[];
  whats_in_box: string[];
  user_guides: {
    title: string;
    url: string;
  }[];
  videos: {
    title: string;
    thumbnail: string;
    url: string;
  }[];
  combined_products?: {
    slug: string;
    name: string;
    price: number;
    image: string;
    tags: string[];
  }[];
  stock?: number;
  active?: boolean;
  created_at?: string;
}

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}