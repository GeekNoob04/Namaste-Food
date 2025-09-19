# Namaste React 🍜

A food ordering web application built with React, Redux, and Tailwind CSS. This project allows users to browse restaurants, view menus, add items to their cart, and place orders. It showcases modern web development practices, including component-based architecture, state management with Redux, and responsive design with Tailwind CSS.

🚀 **Key Features**

*   **Restaurant Listings:** Browse a wide variety of restaurants with detailed information.
*   **Menu Display:** View restaurant menus with categories and item details.
*   **Cart Management:** Add, remove, and manage items in your shopping cart.
*   **Online Status:** Real-time indicator of your internet connection status.
*   **Lazy Loading:** Optimized performance with lazy loading of components.
*   **Redux State Management:** Centralized state management for cart and user data.
*   **Contact Form:** A functional contact form to send messages via email.
*   **User Context:** Manages user-related information across the application.

🛠️ **Tech Stack**

*   **Frontend:**
    *   React
    *   React Router
    *   Redux Toolkit
    *   Tailwind CSS
    *   EmailJS
*   **Bundler:**
    *   Parcel
*   **Testing:**
    *   Jest
    *   @testing-library/react
*   **Other:**
    *   Babel
    *   PostCSS
    *   autoprefixer

📦 **Getting Started**

### Prerequisites

*   Node.js (version >= 14)
*   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd namaste-react
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:1234`.

💻 **Project Usage**

The application provides a user-friendly interface for browsing restaurants and ordering food. You can:

*   Search for restaurants by name or cuisine.
*   View detailed restaurant information, including menus and ratings.
*   Add items to your cart and manage your order.
*   See your online status in the header.
*   Use the contact form to send messages.

📂 **Project Structure**

```
namaste-react/
├── src/
│   ├── app.js               # Main entry point for the React application
│   ├── components/          # React components
│   │   ├── About.js         # About page component
│   │   ├── Body2.js         # Restaurant listing component
│   │   ├── Cart.js          # Shopping cart component
│   │   ├── Contact.js       # Contact form component
│   │   ├── Error.js         # Error page component
│   │   ├── Header.js        # Header component
│   │   ├── ResCard.js       # Restaurant card component
│   │   ├── ResMenu.js       # Restaurant menu component
│   │   ├── ResMenuShimmer.js# Shimmer UI for restaurant menu
│   │   └── Shimmer.js       # Shimmer UI component
│   ├── util/              # Utility functions and constants
│   │   ├── appStore.js      # Redux store configuration
│   │   ├── cartSlice.js     # Redux slice for cart management
│   │   ├── constants.js     # Constants (API URLs, etc.)
│   │   ├── useOnlineStatus.js # Custom hook for online status
│   │   ├── useResMenu.js    # Custom hook for fetching restaurant menu
│   │   └── UserContext.js   # React Context for user information
│   ├── index.css            # Global styles
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
└── ...
```

🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

💖 **Thanks**

Thank you for checking out Namaste React! We hope you find it helpful and enjoyable.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/).
