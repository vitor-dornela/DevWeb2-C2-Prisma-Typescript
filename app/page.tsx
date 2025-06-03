import { prisma } from "@/lib/prisma"

export const dynamic = "force-dynamic"

export default async function Home() {
  let userCount = 0
  let postCount = 0

  try {
    userCount = await prisma.user.count()
    postCount = await prisma.post.count()
  } catch (error) {
    console.error("Erro ao buscar contadores:", error)
  }

  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ color: "#333" }}>Demo Prisma + TypeScript + Vercel</h1>
      <p>A aplicação está funcionando com sucesso!</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Resumo do Banco de Dados:</h2>
        <p>Usuários: {userCount}</p>
        <p>Posts: {postCount}</p>
      </div>

      <p style={{ marginTop: "20px" }}>Confira os endpoints da API:</p>
      <ul>
        <li>
          <a href="/api/users" style={{ color: "#0070f3", textDecoration: "underline" }}>
            /api/users - Lista de usuários
          </a>
        </li>
        <li>
          <a href="/api/posts" style={{ color: "#0070f3", textDecoration: "underline" }}>
            /api/posts - Lista de posts
          </a>
        </li>
      </ul>

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "5px" }}>
        <h3>Sobre esta aplicação:</h3>
        <p>Esta é uma demonstração de uma aplicação full-stack usando:</p>
        <ul>
          <li>
            <strong>Prisma ORM</strong> - Para gerenciamento do banco de dados
          </li>
          <li>
            <strong>TypeScript</strong> - Para tipagem estática
          </li>
          <li>
            <strong>Next.js</strong> - Framework React para desenvolvimento web
          </li>
          <li>
            <strong>Vercel</strong> - Plataforma de deploy
          </li>
          <li>
            <strong>Neon</strong> - Banco de dados PostgreSQL
          </li>
        </ul>
      </div>
    </div>
  )
}
