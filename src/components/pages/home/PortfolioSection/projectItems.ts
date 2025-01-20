export type Category = "nextjs" | "reactjs" | "javascript";

export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    websiteLink: string;
    sourceLink: string;
    techStacks: string[];
};

export const projectItems = {
    nextjs: [
        {
            id: "Expense-Tracker",
            title: "Expense-Tracker",
            description:
                "This expense tracker website helps you manage your finances effectively with a range of features. The Dashboard provides graphical insights into your spending patterns through interactive charts. An Add Transaction page allows you to record income and expenses, categorized for easy tracking. The History page offers detailed transaction records with filters by category and date. An AI-Powered Assistant recommends budgeting tips and includes a chatbot to answer your financial queries. It's a user-friendly platform to track, analyze, and optimize your expenses.",
            websiteLink: "https://expense-tracker-sujaltlrj.vercel.app/",
            sourceLink: "https://github.com/Sujaltalreja29/expense-tracker-next",
            techStacks: ["NextJS", "MongoDB", "TailwindCSS", "TypeScript"]
        },
        // {
        //     id: "add-your-website",
        //     title: "Add Your Websites",
        //     description:
        //         "I have developed this project as a part of a tutorial from Youtube thanks to Lee Robinson for inspiration. I have used Chakra UI, useSWR, and Skeleton loading for the first time with this project. I also stored the user information on Firebase Firestore and login was implemented with Firebase authentication. It has Github login authentication.",
        //     websiteLink: "https://serdargokhan-list-your-websites.vercel.app",
        //     sourceLink:
        //         "https://github.com/serdargokhan/react-projects/tree/main/7-list-your-websites",
        //     techStacks: [
        //         "NextJS",
        //         "ChakraUI",
        //         "Firebase",
        //         "useSWR",
        //         "TypeScript"
        //     ]
        // },
        // {
        //     id: "shopify-clone",
        //     title: "Shopify Clone",
        //     description:
        //         "I have completed this project and I got inspired from Shopify website. It is kind of e-commerce website. There are sign in and sign up proccess. User can create a product, delete a product if they created it, and also add to cart. I used minimal workflow with this project and no extra framework.",
        //     websiteLink: "https://serdargokhan-e-commerce.netlify.app",
        //     sourceLink:
        //         "https://github.com/serdargokhan/react-projects/tree/main/6-e-commerce",
        //     techStacks: ["NextJS", "TailwindCSS", "JavaScript"]
        // }
    ],
    reactjs: [
        {
            id: "Mega-blogs",
            title: "Mega Blogs",
            description:
                "I have completed this blog website. It has sign in and sign up utilities. User can sign up, sign in, and create a blog post. sign in and sign up credentials is stored on appwrite real-time database. After blog post is created, it will be shown on the home page. I also used Redux for state management.",
            websiteLink: "https://megablog-dusky.vercel.app/",
            sourceLink:
                "https://github.com/Sujaltalreja29/megablog",
            techStacks: [
                "ReactJS",
                "TailwindCSS",
                "Appwrite",
                "JavaScript"
            ]
        },
        {
            id: "currency-converter",
            title: "Currency Converter",
            description:
                "This is a basic currency converter website. I have used currency API to retrieve data of currencies. I also used react-select library to be specific about currency exchanges.",
            websiteLink: "https://currencyconverter-sigma.vercel.app/",
            sourceLink:
                "https://github.com/Sujaltalreja29/currencyconverter",
            techStacks: ["ReactJS", "JavaScript"]
        },
    ],
    javascript: [
        {
            id: "ecommerce",
            title: "Ecommerce Website",
            description:
                "This e-commerce website is a user-friendly platform built using HTML, CSS, and JavaScript. It offers a clean and responsive interface, allowing users to browse and purchase products seamlessly. The website features a dynamic product catalog, shopping cart functionality.",
            websiteLink: "",
            sourceLink:
                "https://github.com/Sujaltalreja29/E-commerce-Website",
            techStacks: ["JavaScript","HTML", "CSS"]
        }
    ]
} satisfies Record<Category, ProjectItem[]>;
