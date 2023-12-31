import { Product as ProductItem } from './products.d.ts';

export interface Product {
  product: ProductItem;
  amount: number;
  _id: string;
}

export interface Note {
  _id: string;
  title: string;
  description: string;
  products: Product[];
  price: number;
  author: string;
  created: string;
  __v: number;
}

export interface NoteDetailsProps {
  params: {
    id: string;
  };
}

export interface NoteEditProps {
  params: {
    id: string;
  };
}
