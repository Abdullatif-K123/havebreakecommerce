import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";
import { RootState } from "@store/index";

type TDataType = "productsFullInfo" | "ProductIds";
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );
      console.log(auth.user?.id)
      if (!userWishlist.data.length) {
     
        return { data: [], dataType: "empty" };
      }

      if (dataType === "ProductIds") {
        console.log("wishlist", userWishlist)
        const concatenatedItemsId = userWishlist.data.map((el) => el.productId);
        return { data: concatenatedItemsId, dataType: "productsIds" };
      } else {
        const concatenatedItemsId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        const response = await axios.get<TResponse>(
          `/products?${concatenatedItemsId}`
        );
        return { data: response.data, dataType: "ProductsFullInfo" };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;