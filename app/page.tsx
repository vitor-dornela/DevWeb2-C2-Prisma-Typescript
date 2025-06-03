export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Prisma + TypeScript + Vercel Demo</h1>
      <p>The application is running successfully!</p>
      <p>Check the API endpoints:</p>
      <ul>
        <li>
          <a href="/api/users">/api/users</a>
        </li>
        <li>
          <a href="/api/posts">/api/posts</a>
        </li>
      </ul>
    </div>
  )
}
