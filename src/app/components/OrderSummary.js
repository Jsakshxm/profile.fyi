"use client"
import { useSelector } from 'react-redux'

const OrderSummary = () => {
    const { subtotal, discount, total } = useSelector((state) => state.cart);
  return (
    <div>
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
          <div className="p-4 border rounded-lg">
            <p className="mb-2 text-gray-700">
              Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span>
            </p>
            <p className="mb-2 text-gray-700">
              Discount: <span className="font-medium">-${discount?.toFixed(2)}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Total: <span>${total.toFixed(2)}</span>
            </p>
          </div>
        </div>
  )
}

export default OrderSummary