# Frontend Coding Challenge 🚀
Welcome to our frontend coding challenge! This is a great opportunity for you to showcase your frontend skills. We're excited to see what you come up with! 🎨🖥️

## Overview 🌐
Your task is to create a simple e-commerce-like application that fetches product data from a provided JSON file in `/public` and displays them with some interactive features.

## Data Source 📊
You will be fetching the product data from the data.json raw JSON file hosted in this repository in `/public`. Here's the link to the JSON file:

Each product in the JSON file has the following fields:

```
{
    image: URL to the product image (string, url),
    title: Name of the product (string),
    description: Brief description of the product (string),
    price: Price of the product (string),
    currency: Currency of the price (string, ISO 4217)
}
```

## Requirements 📝
1. Home Page 🏠
Display 10 products at a time.
Each product should show the image, title, description, price and currency.
Ensure the design is responsive and looks good on both desktop and mobile.

2. Pagination 📄
Implement client-side pagination for the products.
Users should be able to navigate through different pages to view all the products.

3. Client-Side Cart 🛒
Users should be able to add products to their cart.
Display a cart icon with a counter indicating the number of items and total sum of the cart.
Users should be able to view their cart and remove items if needed.

4. Client-Side Wish List 💖
Users should be able to add products to their wish list.
Display a heart or star icon indicating the wish list.
Users should be able to view their wish list and remove items if needed.

## Bonus Points 🌟
Add anything that you consider would impress us. Example:

- Add animations or transitions for better user experience.
- Write documentation how to get started with the project
- Use Conventional Commits
- Consider using Server Side Rendering (SSR)
- Use Intl API to render price and currency
- Implement a search functionality to filter products.
- Create a Dockerfile that makes the project a ready image for deploy.
- Deploy it somewhere (e.g. Vercel, Netlify) as a static website.
- Add some unit or E2E tests.
- Use a library such as CSS Modules, Styled Components, Bootstrap, Tailwind CSS, or Material-UI for styling.
- Make use of Prettier, ESLint, Stylelint or Commitlint.
- Configure git hooks to format code at commit.
