import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <section className="mb-8 text-center" aria-labelledby="login-heading">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            NextAuth Studio
          </div>
          <h1 id="login-heading" className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-lg">
            Sign in to your account to continue
          </p>
        </section>
        
        <div className="bg-card border border-border rounded-lg shadow-sm">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}