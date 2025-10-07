import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/components/layout/layout'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata = {
  title: 'ISK - Portfolio',
  description: 'Personal portfolio showcasing my work and experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
