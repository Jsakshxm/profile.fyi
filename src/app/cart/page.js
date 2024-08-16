"use client"
import { Provider } from 'react-redux'
import store from '../utils/store'
import Header from '../components/CartHeader'
import CartPage from '../components/cart'

const page = () => {
  return (
    <Provider store={store}>
        <Header />
<CartPage/>
    </Provider>
  )
}

export default page