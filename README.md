# SaaS Logto - Next.js Authentication

A Next.js application with Logto authentication integration, ready for deployment with Coolify.

## Features

- 🔐 Secure authentication with Logto
- 🎨 Modern UI with Tailwind CSS
- 🚀 Next.js 15 with App Router
- 📱 Responsive design
- 🔧 Ready for production deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Logto instance (cloud or self-hosted)
- Logto application configured

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd saas-logto
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Copy `.env.example` to `.env.local` and fill in your Logto configuration:
```bash
cp .env.example .env.local
```

4. **Configure Logto Application**
In your Logto admin panel:
- Add `http://localhost:3001/callback` to allowed redirect URIs
- Note your App ID and App Secret

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser.

## Production Deployment

### Coolify Deployment

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Configure Coolify**
- Connect your GitHub repository
- Set environment variables in Coolify:
  - `LOGTO_ENDPOINT`
  - `LOGTO_APP_ID` 
  - `LOGTO_APP_SECRET`
  - `LOGTO_COOKIE_SECRET`
  - `NEXT_PUBLIC_LOGTO_ENDPOINT`
  - `NEXT_PUBLIC_LOGTO_APP_ID`
  - `NEXT_PUBLIC_BASE_URL`

3. **Update Logto Configuration**
Add your production callback URL to Logto:
- `https://your-domain.com/callback`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `LOGTO_ENDPOINT` | Your Logto server URL | ✅ |
| `LOGTO_APP_ID` | Application ID from Logto | ✅ |
| `LOGTO_APP_SECRET` | Application secret from Logto | ✅ |
| `LOGTO_COOKIE_SECRET` | 32+ character random string | ✅ |
| `NEXT_PUBLIC_LOGTO_ENDPOINT` | Public Logto server URL | ✅ |
| `NEXT_PUBLIC_LOGTO_APP_ID` | Public application ID | ✅ |
| `NEXT_PUBLIC_BASE_URL` | Your production domain | ✅ |

## Tech Stack

- **Framework:** Next.js 15
- **Authentication:** Logto
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Coolify

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Logto Documentation](https://docs.logto.io/)
- [Tailwind CSS](https://tailwindcss.com/docs)
