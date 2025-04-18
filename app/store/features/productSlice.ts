import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  badge: string;
  msrpAsShown: string;
  year: number;
  mpg: string;
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
