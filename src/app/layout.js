import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "DahMotta Tecnologia",
    description: "DahMotta Tecnologia - Electronics Company",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
