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

# E-Commerce Web Application

This is an E-Commerce web application built using **React** and **Redux Toolkit** for efficient state management. The app provides a complete shopping experience, including a home page with product listings, a cart page for managing items, and a checkout process for placing orders.

## Features

- 🛍️ **Product Listing** and **Search Functionality**.
- 🛒 **Shopping Cart** with coupon discounts and a total price summary.
- 💳 **Checkout Page** that collects user information and payment method.
- 🎉 **Order Placement Confirmation** page.
- 🚀 **Efficient State Management** using Redux Toolkit with slices for products, cart, and search queries.

## Project Structure

### 1. **Home Route (`/`)**
   The home route is composed of two main components:
   
   - **Header**
   - **Body**
   
   #### **Header Component**
   - Displays a profile logo whose URL is stored in `constant.js` (located in the `utils` folder).
   - Includes a shopping cart icon from the `react-icons` library.
   - Contains a `Searchbar` integrated with the search slice of the Redux store.

   #### **Body Component**
   - Contains the product list rendered as `Card` components.
   - Product data is fetched from an API and dispatched to the Redux product slice.
   - Dynamically maps over the fetched products to display them.

### 2. **Cart Route (`/cart`)**
   The cart route contains:
   
   - **Header**
   - **CartPage**

   #### **CartPage Component**
   - Displays distinct items added to the cart, with their quantities and prices.
   - Contains the `CartSummary` component where users can apply coupon codes.

   #### **CartSummary Component**
   - Allows users to apply coupons and calculates discounts based on fixed or percentage-based rules defined in `coupon.js`.

### 3. **Checkout Route (`/cart/checkout`)**
   The checkout route includes:
   
   - **CheckoutPage**
   - **OrderSummary**

   #### **CheckoutPage Component**
   - Collects buyer information (name, address, payment method).
   - Uses `payment.js` from `utils` to handle available payment methods.

   #### **OrderSummary Component**
   - Displays the subtotal, discount, and total price for the order.

### 4. **Order Placed Route (`/cart/checkout/orderPlaced`)**
   - Displays a confirmation message thanking the user after successful checkout.

## State Management with Redux Toolkit

The application uses Redux Toolkit for efficient state management. The Redux store includes three slices:

- **Product Slice**: Manages the state of all products in the `Body` component and cart.
- **Search Slice**: Manages the search query state in the `Header`'s search bar and filters the product list.
- **Cart Slice**: Manages cart items, subtotal, discounts, and the total price.

## Utils Folder

### 1. **constant.js**
   - Stores constants like the profile image URL used in the `Header`.

### 2. **coupon.js**
   - Defines coupon logic for fixed and percentage-based discounts.

### 3. **payment.js**
   - Handles the payment methods available during checkout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
