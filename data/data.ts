export interface ProjectDetail {
  id: string;
  title: string;
  desc: string;
  image: string;
  tools: string[];
  liveUrl: string;
  haveLive: boolean;
  githubUrl: string;

  overview: string;
  role: string;
  duration: string;
  features: string[];
  screenshots: {
    src: string;
    alt: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  structure: {
    path: string;
    description: string;
  }[];
  setup: {
    backend?: string;
    frontend?: string;
    env?: string[];
  };
}

export const projects: ProjectDetail[] = [
  {
    id: "01",
    title: "Full-Stack App: React + Golang Fiber",
    desc: "A modern full-stack web application with React (TypeScript) frontend and Golang (Fiber) backend , Features JWT authentication.",
    image: "/react-go-full-stack/react-go-fullstack-go.png",
    tools: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
    ],
    liveUrl: "",
    haveLive: false,
    githubUrl: "https://github.com/reppo-dev/app-react-golang-full-stack.git",

    overview:
      "This is a production-scale admin dashboard built for managing e-commerce data. I developed it to deepen my understanding of full-stack architectures, focusing on secure authentication, role-based access, and clean separation of concerns between the React frontend and Go backend.",
    role: "Full-Stack Developer (Solo Project)",
    duration: "4 weeks",
    features: [
      "JWT stored in HTTP‑only cookies for secure authentication",
      "Password hashing with bcrypt",
      "Role‑based access control (Admin, User, Manager)",
      "CRUD operations for Products, Orders, and Users",
      "One‑click CSV export (Orders, Users, Products)",
      "Responsive UI built with Tailwind CSS and shadcn/ui",
      "RESTful API design using Go Fiber framework",
    ],
    screenshots: [
      { src: "/react-go-full-stack/login.png", alt: "Login page" },
      {
        src: "/react-go-full-stack/dashboard.png",
        alt: "Dashboard with sales chart",
      },
      { src: "/react-go-full-stack/user.png", alt: "User management table" },
      {
        src: "/react-go-full-stack/orders.png",
        alt: "Orders list with CSV export",
      },
    ],
    techStack: [
      {
        category: "Frontend",
        items: [
          "React 19",
          "TypeScript",
          "React Router Dom v6",
          "React Hook Form",
          "Zod",
          "Tailwind CSS",
          "Axios",
        ],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT", "bcrypt"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
    ],
    structure: [
      {
        path: "frontend/src/components/pages/",
        description: "Pages (Login, Register, Dashboard, Products, Orders...)",
      },
      {
        path: "frontend/src/components/",
        description: "Reusable UI components",
      },
      { path: "backend/controllers/", description: "Request handlers (Fiber)" },
      { path: "backend/models/", description: "GORM models" },
      { path: "backend/middleware/", description: "JWT and RBAC middleware" },
      { path: "backend/routes/", description: "API route definitions" },
      { path: "backend/main.go", description: "Application entry point" },
    ],
    setup: {
      backend: `cd backend
go mod tidy
# set environment variables (see .env.example)
go run main.go`,
      frontend: `cd frontend
npm install
npm run dev`,
      env: ["JWT_SECRET=your_super_secret_key"],
    },
  },
  {
    id: "02",
    title: "Shoppy - Full-Stack E-Commerce App",
    desc: "A modern full-stack e-commerce application built with Next.js and Golang Fiber, featuring product browsing, cart management, JWT authentication, user profiles, and AWS S3 image uploads.",

    image: "/shoppy/shoppy-home.png",

    tools: [
      "Next.js",
      "TypeScript",
      "Shadcn UI",
      "Zod",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
      "AWS S3",
    ],

    liveUrl: "",
    haveLive: false,
    githubUrl: "https://github.com/reppo-dev/shoppy.git",

    overview:
      "Shoppy is a full-stack e-commerce application developed to explore modern web application architecture using Next.js and Golang. The project focuses on building a scalable shopping experience with secure authentication, product management, cloud-based image storage, and a responsive user interface.",

    role: "Full-Stack Developer (Solo Project)",
    duration: "3 weeks",

    features: [
      "JWT-based authentication with user registration and login",
      "Product listing with category filtering and search functionality",
      "Shopping cart with add and remove item actions",
      "User profile management and account updates",
      "Product creation with image uploads to AWS S3",
      "Responsive UI built with Shadcn UI components",
      "RESTful API architecture using Go Fiber",
      "Schema validation using Zod",
    ],

    screenshots: [
      { src: "/shoppy/home.png", alt: "Home page with product listing" },
      { src: "/shoppy/login.png", alt: "Login and registration page" },
      {
        src: "/shoppy/products-list.png",
        alt: "Products page with search and filters",
      },
      { src: "/shoppy/cart.png", alt: "Shopping cart page" },
      { src: "/shoppy/profile.png", alt: "User profile page" },
      {
        src: "/shoppy/create-product.png",
        alt: "Create product form with image upload",
      },
    ],

    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Shadcn UI", "Zod", "pnpm"],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
      {
        category: "Cloud Services",
        items: ["AWS S3"],
      },
    ],

    structure: [
      {
        path: "frontend/app/",
        description: "Next.js App Router pages and layouts",
      },
      {
        path: "frontend/components/",
        description: "Reusable UI components and forms",
      },
      {
        path: "frontend/lib/",
        description: "Utilities, API helpers, and shared logic",
      },
      {
        path: "backend/handlers/",
        description: "HTTP request handlers and business logic",
      },
      {
        path: "backend/models/",
        description: "Database models managed with GORM",
      },
      {
        path: "backend/routes/",
        description: "API route definitions",
      },
      {
        path: "backend/main.go",
        description: "Application entry point",
      },
    ],

    setup: {
      backend: `cd backend
go mod tidy
go run main.go`,

      frontend: `cd frontend
pnpm install
pnpm dev`,

      env: [
        "GO_API_URL=http://localhost:8000",
        "JWT_SECRET=secret",
        "PARSPACK_ACCESS_KEY=your_access_key",
        "PARSPACK_SECRET_KEY=your_secret_key",
        "PARSPACK_ENDPOINT=your_endpoint",
        "PARSPACK_BUCKET_NAME=your_bucket",
        "PARSPACK_REGION=your_region",
        "PARSPACK_S3_PATH_STYLE=true",
      ],
    },
  },
  {
    id: "03",

    title: "Pizza Ordering Platform",

    desc: "A full-stack pizza ordering platform built with Next.js and Golang Fiber, featuring JWT authentication, role-based access control, shopping cart management, address handling, pizza management, and S3-compatible image uploads.",

    image: "/pizza-app/home.png",

    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
      "RBAC",
      "S3 Storage",
    ],

    liveUrl: "",
    haveLive: false,

    githubUrl: "https://github.com/reppo-dev/pizza-web-app.git",

    overview:
      "Pizza Ordering Platform is a full-stack web application designed to simulate a real-world pizza delivery system. The project includes customer-facing features such as pizza browsing, search, cart management, and address handling, alongside a complete admin dashboard for managing pizzas, categories, variants, users, and permissions.",

    role: "Full-Stack Developer (Solo Project)",

    duration: "4 weeks",

    features: [
      "JWT authentication and authorization",
      "Role-Based Access Control (RBAC)",
      "Pizza search functionality",
      "Pizza variants and pricing management",
      "Shopping cart management",
      "Address management (Create, Update, Delete)",
      "User profile management",
      "Admin dashboard",
      "Pizza CRUD operations",
      "User management",
      "Category management",
      "Variant management",
      "Image uploads using S3-compatible object storage",
      "Server Actions with Next.js",
      "Schema validation using Zod",
    ],

    screenshots: [
      {
        src: "/pizza-app/home.png",
        alt: "Home page",
      },
      {
        src: "/pizza-app/pizza.png",
        alt: "Pizza listing page",
      },
      {
        src: "/pizza-app/address.png",
        alt: "Address management page",
      },
      {
        src: "/pizza-app/profile.png",
        alt: "User profile page",
      },
      {
        src: "/pizza-app/user.png",
        alt: "User management page",
      },
      {
        src: "/pizza-app/login.png",
        alt: "Login page",
      },
    ],

    techStack: [
      {
        category: "Frontend",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "React Hook Form",
          "Zod",
          "Axios",
        ],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT", "RBAC"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
      {
        category: "Storage",
        items: ["S3-Compatible Object Storage"],
      },
    ],

    structure: [
      {
        path: "frontend/app/",
        description: "Next.js App Router pages and layouts",
      },
      {
        path: "frontend/components/",
        description: "Reusable UI components and forms",
      },
      {
        path: "frontend/actions/",
        description: "Server Actions and API integration",
      },
      {
        path: "backend/controller/",
        description: "Fiber request handlers",
      },
      {
        path: "backend/models/",
        description: "Database models",
      },
      {
        path: "backend/routes/",
        description: "API route definitions",
      },
      {
        path: "backend/middleware/",
        description: "JWT and RBAC middleware",
      },
      {
        path: "backend/main.go",
        description: "Application entry point",
      },
    ],

    setup: {
      backend: `cd backend
go mod tidy
go run main.go`,

      frontend: `cd frontend
pnpm install
pnpm dev`,

      env: [
        "DATABASE_URL=",
        "JWT_SECRET=",
        "GO_API_URL=",
        "PARSPACK_S3_PATH_STYLE=",
        "PARSPACK_REGION=",
        "PARSPACK_ENDPOINT=",
        "PARSPACK_ACCESS_KEY=",
        "PARSPACK_SECRET_KEY=",
        "PARSPACK_BUCKET_NAME=",
      ],
    },
  },
  {
    id: "04",

    title: "ProShop E-Commerce Platform",

    desc: "A full-stack e-commerce web application built with React and Golang Fiber, featuring JWT authentication, product catalog browsing, shopping cart management, multi-step checkout, address handling, and order tracking.",

    image: "/proshop-app/home.png",

    tools: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
      "Golang",
      "Fiber",
      "PostgreSQL",
      "GORM",
      "JWT",
    ],

    liveUrl: "",
    haveLive: false,

    githubUrl: "https://github.com/reppo-dev/proshop.git",

    overview:
      "ProShop is a full-stack e-commerce web application designed to simulate a real-world online store experience. The project includes customer-facing features such as product browsing, detailed product pages with ratings, shopping cart management, user authentication, and a complete checkout flow with shipping, payment selection, and order confirmation.",

    role: "Full-Stack Developer (Solo Project)",

    duration: "3 weeks",

    features: [
      "JWT authentication with HTTP-only cookies",
      "User registration and login",
      "Product catalog with ratings and pricing",
      "Product detail pages with quantity selection",
      "Shopping cart management (add, update, remove)",
      "Multi-step checkout flow (Shipping → Payment → Place Order)",
      "Shipping address management",
      "Payment method selection",
      "Order creation and confirmation",
      "Order details view with shipping and payment info",
      "Protected routes for checkout pages",
      "Schema validation using Zod",
      "Toast notifications with Sonner",
    ],

    screenshots: [
      {
        src: "/proshop-app/home.png",
        alt: "Home page — product listing",
      },
      {
        src: "/proshop-app/detail-product.png",
        alt: "Product details page",
      },
      {
        src: "/proshop-app/card.png",
        alt: "Shopping cart page",
      },
      {
        src: "/proshop-app/login.png",
        alt: "Login page",
      },
      {
        src: "/proshop-app/register.png",
        alt: "Register page",
      },
      {
        src: "/proshop-app/shipping.png",
        alt: "Shipping address page",
      },
      {
        src: "/proshop-app/place-order.png",
        alt: "Place order page",
      },
      {
        src: "/proshop-app/order.png",
        alt: "Order details page",
      },
    ],

    techStack: [
      {
        category: "Frontend",
        items: [
          "React",
          "TypeScript",
          "Vite",
          "Redux Toolkit",
          "RTK Query",
          "React Router",
          "Tailwind CSS",
          "Shadcn UI",
          "React Hook Form",
          "Zod",
        ],
      },
      {
        category: "Backend",
        items: ["Golang", "Fiber", "GORM", "JWT"],
      },
      {
        category: "Database",
        items: ["PostgreSQL"],
      },
    ],

    structure: [
      {
        path: "frontend/src/screens/",
        description: "Page components (Home, Product, Cart, Checkout, Orders)",
      },
      {
        path: "frontend/src/components/",
        description:
          "Reusable UI components (Header, ProductCard, CheckoutSteps)",
      },
      {
        path: "frontend/src/redux/",
        description: "Redux store, slices, and RTK Query API integration",
      },
      {
        path: "backend/controller/",
        description:
          "Fiber request handlers (auth, products, cart, orders, address)",
      },
      {
        path: "backend/models/",
        description: "GORM database models",
      },
      {
        path: "backend/router/",
        description: "API route definitions",
      },
      {
        path: "backend/database/",
        description: "PostgreSQL connection and auto-migrations",
      },
      {
        path: "backend/main.go",
        description: "Application entry point",
      },
    ],

    setup: {
      backend: `cd backend
go mod download
go run main.go`,

      frontend: `cd frontend
pnpm install
pnpm dev`,

      env: [
        "dns=host=localhost user=postgres password=yourpassword dbname=proshop port=5432 sslmode=disable",
      ],
    },
  },
];

export const aboutItems = [
  {
    id: 1,
    icon: "/images/recruitment.png",
    title: "1+ YEAR OF EXPERIENCE",
    text: "Focused on building modern full-stack applications with React, Next.js, and Go, emphasizing performance, maintainability, and security.",
  },
  // {
  //   id: 2,
  //   icon: "/images/portfolio.png",
  //   title: "Over 3 Projects Delivered",
  //   text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  // },
  // {
  //   id: 3,
  //   icon: "/images/review.png",
  //   title: "200+ Satisfied Clients",
  //   text: "dolor sit amet consectetur. Erat mauris tortor suspendisse at",
  // },
  {
    id: 4,
    icon: "/images/portfolio.png",
    title: "10+ PROJECTS COMPLETED",
    text: "Completed hands-on projects covering authentication, REST APIs, cloud storage integration, and responsive user interfaces.",
  },
];
