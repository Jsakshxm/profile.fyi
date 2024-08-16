"use client"
import OrderPlaced from '@/app/components/OrderPlaced'
import { Provider } from 'react-redux'
import store from '@/app/utils/store'


const page = () => {
  return (
    <Provider store={store}><OrderPlaced/></Provider>
  )
}

export default page