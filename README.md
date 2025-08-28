# Rently

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Google Auth](https://img.shields.io/badge/Auth-Google-red?style=for-the-badge&logo=google)](https://next-auth.js.org/)
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-4285F4?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Zillow](https://img.shields.io/badge/API-Zillow-0074E4?style=for-the-badge)](https://www.zillow.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)


Rently is a web app designed to simplify surfing commercial, residential and storage spaces. At Rently, we have different dashboards for renters and owners. Built with **Next.js**, it combines a sleek UI, secure authentication, cloud-based media handling, and real-time communication to deliver a complete rental experience.

---

## ✨ Features

- 🔐 **Secure Google Authentication** — Hassle-free login with Google for both renters and property owners.
- 🏘 **Property Listings via Zillow Marketplace API** — Direct integration with Zillow to fetch real, up-to-date rental property data.
- 🖼 **Cloud-Hosted Media (Cloudinary)** — Store and optimize property images with Cloudinary’s fast CDN and transformations.
- 💬 **In-App Messaging** — Real-time chat between renters and property owners for smooth communication.
- 🎨 **Modern UI** — Built with a reusable component system for clean and consistent design.
- ⚡ **Optimized Performance** — Powered by Next.js App Router for blazing-fast navigation and SEO.

---

## 📂 Project Structure
Rently/
├── app/ # Next.js App Router pages and routes
├── components/ # Reusable UI components
├── models/ # Data models or interfaces
├── config/ # Application configuration
├── utils/ # Utility/helper functions
├── public/ # Static files like images, icons
├── next.config.mjs # Next.js configuration file
├── middleware.js # Middleware logic
├── package.json # Project metadata and scripts
└── README.md # Documentation


---

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) with Google Provider
- **Media Storage:** [Cloudinary](https://cloudinary.com/)
- **API Integration:** [Zillow Marketplace API](https://www.zillow.com/howto/api/APIOverview.htm)
- **Database & Models:** MongoDB (via Mongoose) *(adjust if different)*
- **Messaging:** Real-time chat system for renter ↔ client communication

---

## 🚀 Getting Started

Clone the repository and set up locally:

```bash
# Clone the repo
git clone https://github.com/bhoomigundecha/Rently.git
cd Rently

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open your browser and run : https://localhost:3000

