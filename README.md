# All Project

## Overview

React + TypeScript frontend for managing departments and user profiles.

- Uses **React Query** for data fetching and caching
- Uses **Axios** for API requests
- Styled with **TailwindCSS**

## Project Structure
src/
├─ apis/                    # API calls using Axios
├─ components/
│   ├─ department/         # Department components
│   ├─ header/            # Header components
│   ├─ sidebar/           # Sidebar components
│   ├─ ui/                # Reusable UI components
│   │   └─ Button/        # Button component
│   └─ userProfile/       # UserProfile components
├─ layout/
│   └─ ProfileLayout.tsx  # Layout wrapper
├─ lib/
│   └─ axios.ts           # Axios client setup
├─ pages/
│   ├─ DepartmentPage.tsx
│   └─ ProfilePage.tsx
└─ types/
    └─ index.ts           # TypeScript type definitions

## Route Details:
1. '** / **': Department Management Page: Main dashboard for viewing and managing departments
2. '** /profile **' : User Profile Page: User profile settings and information
## Dependencies

- react
- react-dom
- react-router-dom
- react-hook-form
- react-icons
- tailwindcss
- @tanstack/react-query
- @tanstack/react-query-devtools
- axios
- graphql

## How to Run

### 1. Clone the repository

````bash
git clone git@github.com:mayermamdouh/solace.git
cd solace

2. Install Frontend Dependencies and Start Frontend

cd frontend
npm install
npm run dev

3. Install Backend Dependencies and Start Backend (NestJS)
cd backend
npm install
npm run start:dev

````
## Key Points

1. **Performance:** Components should render efficiently with React Query.
2. **Pixel Perfect:** Follow the Figma design exactly.
3. **Clean Code:** Maintain readable and maintainable code.
4. **README:** Explains how to run the project and project structure.
