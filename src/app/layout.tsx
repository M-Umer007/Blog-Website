// app/layout.tsx
import './globals.css'
import Header from '@/components/headersec/header'
import Footer from '@/components/footer/footer'

export const metadata = {
    title: 'Umer Blog',
    description: 'Personal blog for my projects description',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>

    <body className="min-h-[100vh] max-w-[100vw] flex flex-col overflow-x-hidden">
        <div className="sticky top-0 z-50 bg-blur">
        <Header />
    </div>
    <div className="flex-grow space-x-2 pt-[header-height-in-pixels]">
        {children}
    </div>
    <footer className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 ">
        <Footer />
    </footer>
</body>

            
        </html>
    )
}
