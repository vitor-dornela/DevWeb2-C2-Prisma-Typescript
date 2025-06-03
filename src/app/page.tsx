import { prisma } from "@/lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const dynamic = "force-dynamic"
export const revalidate = 0

async function getUsers() {
  try {
    return await prisma.user.findMany({
      include: {
        posts: true,
      },
    })
  } catch (error) {
    console.error("Error fetching users:", error)
    return []
  }
}

async function getPosts() {
  try {
    return await prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export default async function Home() {
  const [users, posts] = await Promise.all([getUsers(), getPosts()])

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Prisma + TypeScript + Vercel Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Users ({users.length})</h2>
          <div className="space-y-4">
            {users.map((user) => (
              <Card key={user.id}>
                <CardHeader>
                  <CardTitle>{user.name || "Anonymous"}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">
                    {user.posts.length} post{user.posts.length !== 1 ? "s" : ""}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Posts ({posts.length})</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {post.title}
                    {post.published && <Badge>Published</Badge>}
                  </CardTitle>
                  <CardDescription>by {post.author.name || post.author.email}</CardDescription>
                </CardHeader>
                {post.content && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{post.content}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
