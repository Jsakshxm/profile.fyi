"use client"
import CheckoutPage from "@/app/components/Checkout"
import store from "@/app/utils/store"
import { Provider } from "react-redux"

const page = () => {
  return (

<Provider store={store}>
        <CheckoutPage /> </Provider>

  )
}

export default page