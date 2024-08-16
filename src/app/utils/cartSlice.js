import { createSlice } from "@reduxjs/toolkit";
import { coupons } from "./coupon";
import { ApplyConfetti } from "../components/confetti";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    subtotal: 0,
    discount: 0,
    total: 0,
    couponCode: ""
  },
  reducers: {
    updateSubtotal: (state, action) => {
      state.subtotal = action.payload;
      state.total = state.subtotal - state.discount;
    },
    applyCoupon: (state, action) => {
      const couponCode = action.payload;
      const coupon = coupons.find(c => c.code === couponCode);

      if (coupon) {
        state.couponCode = couponCode;
        if (coupon.type === "fixed") {
          state.discount = coupon.value;
          ApplyConfetti();
        } else if (coupon.type === "percentage") {
          state.discount = (state.subtotal * coupon.value) / 100;
          ApplyConfetti();
        }
        state.total = state.subtotal - state.discount;
      } else {
        state.couponCode = "";
        state.discount = 0;
        state.total = state.subtotal;
      }
    },
    clearCartSummary: (state) => {
      state.subtotal = 0;
      state.discount = 0;
      state.total = 0;
      state.couponCode = "";
    }
  }
});

export const { updateSubtotal, applyCoupon, clearCartSummary } = cartSlice.actions;
export default cartSlice.reducer;
