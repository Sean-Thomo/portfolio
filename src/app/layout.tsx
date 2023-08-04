import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siphesihle Thomo - Software Developer',
  description: `Passionate Web Developer with expertise in front-end and 
  back-end technologies. Proficient in JavaScript, TypeScript, Java, Python, 
  CSS, and HTML. Experienced in React, Next.js, Tailwind CSS, Node.js, and 
  Express. Committed to solving problems with innovative solutions and 
  continuously learning. Enjoys collaborating with diverse teams to deliver 
  outstanding results.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
