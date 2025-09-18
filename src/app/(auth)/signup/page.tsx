// app/auth/signup/page.tsx
import SignUpForm from '@/components/auth/SignUpForm'
import Header from '@/components/header'

export default function SignUp() {
  return (
    <main>
      <Header />
      <SignUpForm />
    </main>
  )
}