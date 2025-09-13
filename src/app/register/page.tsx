import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <section className="mb-8 text-center" aria-labelledby="register-heading">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            FraudShield AI
          </div>
          <h1 id="register-heading" className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Create your account
          </h1>
          <p className="text-muted-foreground text-lg">
            Join FraudShield AI in seconds
          </p>
        </section>

        <div className="bg-card border border-border rounded-lg shadow-sm">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}