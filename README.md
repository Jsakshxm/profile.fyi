This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Profile.fyi E-Commerce Web Application
This is an E-Commerce web application built using React and Redux Toolkit for efficient state management. The app provides a complete shopping experience, including a home page with a product list, a cart page for managing items, and a checkout process for placing orders.

Features
Product listing and search functionality.
Shopping cart with coupon discounts and summary of total price.
Checkout page that collects user information and payment method.
Order placement confirmation page.
Efficient state management using Redux Toolkit with slices for products, cart, and search query.
Project Structure
1. Home Route (/)
The home route is composed of two main components: Header and Body.
Header Component
The Header component contains:
A profile logo whose URL is stored in constant.js (located in the utils folder).
A shopping cart icon from the react-icons library.
A Searchbar that allows users to search for products, integrated with the search slice of the Redux store.
Body Component
The Body component contains the list of product cards.
A Card component represents each product.
Product data is fetched from an API and dispatched to the Redux Toolkit's product slice.
The products are mapped over to render individual Card components.
2. Cart Route (/cart)
The cart route displays the user's cart and includes the Header component and the CartPage component.
CartPage Component
Displays all distinct items that have been added to the cart, along with their quantities and prices.
Contains the CartSummary component where users can apply coupon codes for discounts.
CartSummary Component
Allows users to apply coupons and calculates the discount based on fixed or percentage-based discounts.
The discount logic is handled via the coupon.js file in the utils folder.
3. Checkout Route (/cart/checkout)
The checkout route includes the CheckoutPage component and the OrderSummary component.
CheckoutPage Component
Collects buyer information such as name, address, and payment method.
Uses the payment.js file (located in the utils folder) to handle payment methods.
OrderSummary Component
Displays the subtotal, discount, and total price for the order.
4. Order Placed Route (/cart/checkout/orderPlaced)
Displays a confirmation message thanking the user for their order after a successful checkout.
Redux Toolkit for State Management
The application uses Redux Toolkit for efficient state management. The Redux store is created inside the utils folder and includes the following slices:

1. Product Slice
Manages the state of all products displayed in the Body component and the products added to the cart.
2. Search Slice
Manages the state of the search query in the Header's search bar.
Filters the product list in the Body component based on the search query.
3. Cart Slice
Manages the state of items in the cart, including the subtotal, discounts, and total amount.
Handles coupon logic through the coupon.js file, which defines two categories of discounts: fixed amount and percentage-based discounts.
Utils Folder
1. constant.js
Stores constant values, such as the profile image URL used in the Header component.
2. coupon.js
Defines the logic for applying coupons, including fixed and percentage-based discounts.
3. payment.js
Defines the available payment methods used during the checkout process.

