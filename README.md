# E-Commerce Frontend

This project is a React-based frontend for an e-commerce application for haveBreak test assessgment, built with TypeScript and powered by Vite for fast development and builds. The folder structure is designed for scalability and maintainability, supporting features like authentication, shopping cart, and product management.

## Features

- **Frontend**:

  - Component-based architecture with React.
  - State management using Redux Toolkit and Redux Persist.
  - Routing with React Router DOM.
  - Form validation with React Hook Form and Zod.
  - Modular and reusable components.
  - Animations using Lottie React and skeleton loaders.

- **Backend**:
  - Uses `json-server` and `json-server-auth` for a mock API with authentication.

---

## Folder Structure

The `src` folder is organized as follows:
├───assets
│ ├───lottieFiles
│ └───svg
├───components
│ ├───Auth
│ ├───common
│ │ ├───Footer
│ │ ├───General
│ │ ├───GridList
│ │ ├───Header
│ │ │ ├───HeaderCounter
│ │ │ └───HeaderLeftBar
│ │ └───Heading
│ ├───eCommerce
│ │ ├───CartItem
│ │ ├───CartItemList
│ │ ├───CartSubtotalPrice
│ │ ├───Category
│ │ ├───Dashboard
│ │ ├───Product
│ │ └───ProductInfo
│ ├───feedback
│ │ ├───Loading
│ │ ├───LottieHandler
│ │ ├───PageSuspenseFallback
│ │ └───skeletons
│ │ ├───CartSkeleton
│ │ ├───CategorySkeleton
│ │ └───ProductSkeleton
│ └───Form
│ └───Input
├───hooks
├───layouts
│ ├───MainLayout
│ └───ProfileLayout
├───pages
├───routes
├───services
├───store
│ ├───auth
│ │ └───act
│ ├───cart
│ │ ├───act
│ │ └───selectors
│ ├───categories
│ │ └───act
│ ├───orders
│ │ └───act
│ ├───products
│ │ └───act
│ └───wishlist
│ └───act
├───styles
├───types
├───utils
└───validations

Install dependencies:

    npm install

Running the Backend

If you want to install the backend, you can install it from [here](https://github.com/Abdullatif-K123/havebreak-backend).

Start the backend server on port 5005:

    npx json-server-auth --watch db.json --port 5005

        The API will be available at http://localhost:5005.

    Important: Ensure the backend server is running on port 5005, as the frontend is configured to use this port.

Running the Frontend

    Start the development server:

npm run dev

Open your browser and navigate to:

npm run build

The build output will be located in the dist folder.
Key Scripts

    npm run dev - Start the development server.
    npm run build - Build the app for production.
    npm run preview - Preview the production build.
    npm run lint - Lint the codebase for errors.

Dependencies
Frontend

    React: Component-based UI library.
    Redux Toolkit: State management.
    React Router DOM: Declarative routing.
    React Hook Form: Form management.
    Zod: Schema validation.
    Bootstrap: UI styling framework.

Backe
nd

    json-server: Quick mock REST API.
    json-server-auth: Authentication layer for json-server.

License

This project is licensed under the MIT License.

Let me know if you need further edits!
