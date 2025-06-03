import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export default async function Home() {
  let userCount = 0
  let postCount = 0

  try {
    userCount = await prisma.user.count()
    postCount = await prisma.post.count()
  } catch (error) {
    console.error("Error fetching counts:", error)
  }

  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ color: "#333" }}>Prisma + TypeScript + Vercel Demo</h1>
      <p>The application is running successfully!</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Database Summary:</h2>
        <p>Users: {userCount}</p>
        <p>Posts: {postCount}</p>
      </div>

      <p style={{ marginTop: "20px" }}>Check the API endpoints:</p>
      <ul>
        <li>
          <a href="/api/users" style={{ color: "#0070f3", textDecoration: "underline" }}>
            /api/users
          </a>
        </li>
        <li>
          <a href="/api/posts" style={{ color: "#0070f3", textDecoration: "underline" }}>
            /api/posts
          </a>
        </li>
      </ul>
    </div>
  )
}
