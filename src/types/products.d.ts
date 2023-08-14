export interface Image {
  path: string;
  fileName: string;
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  images: Image[];
  categories: string[];
  price: number;
  netto: number;
  unit: string;
  pricePerUnit: number;
  store: string;
  pinned: boolean;
  author: string;
  created: string;
  __v: number;
}

export interface ProductCardProps {
  data: Product;
}

export interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export interface ProductEditProps {
  params: {
    id: string;
  };
}
