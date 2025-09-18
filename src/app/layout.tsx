// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/components/providers/AuthProvider'
import CartSidebar from '@/components/cart/CartSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PBM Distributors - Brain Health Devices',
  description: 'Advanced photobiomodulation devices for brain health and cognitive enhancement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            {children}
            <CartSidebar />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
// import type React from "react"
// import "./globals.css"
// import { Inter } from "next/font/google"
// import type { Metadata } from "next"
// import Header from "@/components/layout/Header"
// // import Footer from "@/components/layout/Footer"
// // import { ThemeProvider } from "@/components/theme-provider"
// import { Navbar } from "@/components/layout/navbar"
// import { Footer } from "@/components/layout/Footer"
// // import { CartProvider } from "@/components/cart/cart-context"
// import { CartProvider } from "@/context/CartContext"
// import CartSidebar from "@/components/cart/CartSidebar"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "PBM Distributors - Photobiomodulation Devices for Brain Health",
//   description:
//     "Discover the future of brain health with cutting-edge photobiomodulation devices. Vielight Neuro headsets boost cognitive function and promote well-being.",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
//           {/* <CartProvider> */}
//             <div className="min-h-screen bg-gray-50 flex flex-col">
//               {/* <Header /> */}
//               {/* <Navbar /> */}
//               <CartProvider>
//               <main className="flex-grow">{children}</main>
//               {/* <Footer /> */}
//               <CartSidebar />
//               </CartProvider>
//             </div>
//           {/* </CartProvider> */}
//         {/* </ThemeProvider> */}
//       </body>
//     </html>
//   )
// }
