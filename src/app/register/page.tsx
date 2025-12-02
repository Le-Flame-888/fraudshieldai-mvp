"use client";

import { SignUpPage, Testimonial } from "@/components/ui/sign-up";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Sarah Chen",
    handle: "@sarahdigital",
    text: "Amazing platform! The user experience is seamless and the features are exactly what I needed."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Marcus Johnson",
    handle: "@marcustech",
    text: "This service has transformed how I work. Clean design, powerful features, and excellent support."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Martinez",
    handle: "@davidcreates",
    text: "I've tried many platforms, but this one stands out. Intuitive, reliable, and genuinely helpful for productivity."
  },
];

const SignUpPageDemo = () => {
  const router = useRouter();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });
  };

  const handleGoogleSignUp = () => {
    console.log("Continue with Google clicked");
    // Implement Google Sign Up if needed
  };

  const handleSignInClick = () => {
    router.push("/login");
  }

  return (
    <div className="bg-background text-foreground">
      <SignUpPage
        heroImageSrc="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80"
        testimonials={sampleTestimonials}
        onSignUp={handleSignUp}
        onGoogleSignUp={handleGoogleSignUp}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
};

export default SignUpPageDemo;