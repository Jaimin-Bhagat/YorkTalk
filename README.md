# York Talk

York Talk is an anonymous community platform for York University students, similar to Blind. It allows students to discuss topics freely while remaining anonymous, with verification through York University email addresses.

## Features

- Anonymous posting and commenting
- Email verification with York University email addresses
- Topic-based discussions
- Upvoting and downvoting
- Nested comments
- User profiles (anonymous)

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/york-talk.git
   cd york-talk
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in your values

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

- **Users**: Store user information (email, hashed password)
- **Posts**: Store posts created by users
- **Comments**: Store comments on posts
- **Topics**: Categories for organizing posts
- **Votes**: Track upvotes and downvotes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
