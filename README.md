# Recipe Finder App 🍔🥗

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://findrecipeapp.vercel.app/)

A modern, responsive web application built with **Next.js 16** that allows users to search for recipes and view detailed ingredients. The app features a sleek UI with dark mode support, real-time clock, and user location detection.

## 🚀 Features

* **Search by Name:** Instantly find recipes by entering a meal name.
* **Detailed Recipe Cards:** View high-quality images, instructions, and categorized ingredient lists.
* **Interactive Dialogs:** Open full recipe details in a smooth modal without leaving the page.
* **Theme System:** Fully supported **Dark/Light mode** toggle using `next-themes`.
* **Smart Utilities:**
    * **User Location:** Auto-detects and displays your current city and country.
    * **Real-time Clock:** A sliding number clock animation showing current local time.
* **Responsive Design:** Optimized for desktop, tablet, and mobile devices using Tailwind CSS.

## 💻 Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **Data Fetching:** [Ky](https://github.com/sindresorhus/ky) (HTTP client)
* **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
* **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mrabhijitsaha/recipe-finder-app.git
    cd recipe-finder-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add the following variable:

    ```env
    NEXT_PUBLIC_RECIPE_API="https://www.themealdb.com/api/json/v1/1"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    bun dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the app.


## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Abhijit Saha**
* GitHub: [@MrAbhijitSaha](https://github.com/MrAbhijitSaha)

---
*Built with ❤️ using Next.js and food.* 🍛
