# Next Starter

A full-stack Next.js 15 starter template with authentication, database setup, and modern tooling.

## Features

- **Authentication**: GitHub OAuth + Email/Password with NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **UI**: shadcn/ui components with Tailwind CSS
- **API**: tRPC for type-safe API routes
- **Email**: Resend integration for password reset
- **Type Safety**: End-to-end TypeScript
- **Modern Stack**: Next.js 15, React 19, App Router

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: tRPC, NextAuth.js, Prisma
- **Database**: PostgreSQL
- **UI Components**: shadcn/ui, Radix UI
- **Email**: Resend
- **Dev Tools**: ESLint, Prettier, TypeScript

## Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Docker (for PostgreSQL)
- Git

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd next-starter
pnpm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Fill in your environment variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/myapp"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth (optional)
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
FROM_EMAIL="noreply@yourdomain.com"
```

### 3. Database Setup

Start PostgreSQL using Docker:

```bash
./start-database.sh
```

Run database migrations:

```bash
pnpm run db:generate
```

### 4. Start Development

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

### Database
- `./start-database.sh` - Start PostgreSQL with Docker
- `pnpm run db:generate` - Run Prisma migrations in development
- `pnpm run db:migrate` - Deploy Prisma migrations to production
- `pnpm run db:push` - Push schema changes to database
- `pnpm run db:studio` - Open Prisma Studio

### Development
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run preview` - Build and start production server

### Code Quality
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Run ESLint with auto-fix
- `pnpm run typecheck` - Run TypeScript type checking
- `pnpm run check` - Run both linting and type checking
- `pnpm run format:check` - Check code formatting
- `pnpm run format:write` - Format code with Prettier

### UI Components
- `pnpm run ui:add` - Add new shadcn/ui components

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (public)/          # Public routes (login, signup)
│   ├── (protected)/       # Protected routes (dashboard, account)
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── server/               # Server-side code
│   ├── api/              # tRPC routers
│   ├── auth/             # NextAuth configuration
│   └── db.ts             # Database client
└── styles/               # Global styles
```

## Database Schema

The starter template includes a minimal schema for authentication:

- **User**: User accounts with email/password and OAuth support
- **Account**: OAuth account connections
- **Session**: User sessions
- **VerificationToken**: Email verification tokens
- **Organization**: Multi-tenant organization support
- **OrganizationMember**: Organization membership

## Authentication Flow

### Email/Password
1. Sign up with email and password
2. Password reset via email (using Resend)
3. Account management

### GitHub OAuth
1. Configure GitHub OAuth app
2. Add credentials to `.env`
3. One-click sign-in/sign-up

## Customization

### Adding New Pages
1. Create files in `src/app/(protected)/` for authenticated pages
2. Create files in `src/app/(public)/` for public pages

### Extending Database Schema
1. Modify `prisma/schema.prisma`
2. Run `pnpm run db:generate` to apply changes
3. Create corresponding tRPC routers in `src/server/api/routers/`

### Adding UI Components
```bash
pnpm run ui:add button
pnpm run ui:add form
# etc.
```

### Customizing Authentication
- Modify `src/server/auth/config.ts` for auth providers
- Update `src/components/nav-user.tsx` for user menu
- Extend user schema in Prisma as needed

## Deployment

### Environment Variables
Ensure all production environment variables are set:
- `DATABASE_URL` - Production PostgreSQL connection
- `NEXTAUTH_SECRET` - Strong random secret
- `NEXTAUTH_URL` - Your production domain
- OAuth credentials (if using)
- `RESEND_API_KEY` and `FROM_EMAIL` (for emails)

### Database Migration
```bash
pnpm run db:migrate
```

### Build and Deploy
```bash
pnpm run build
pnpm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm run check` to ensure code quality
5. Submit a pull request

## License

[MIT License](LICENSE.md)