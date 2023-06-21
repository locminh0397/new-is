import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Viện Khoa Học Đào Tạo Phát Triển Nhân Lực',
  description: 'Viện Khoa Học Đào Tạo Phát Triển Nhân Lực là một tổ chức đào tạo chuyên nghiệp và phát triển nhân lực với mục tiêu cung cấp kiến thức, kỹ năng và năng lực cho cá nhân và tổ chức để nâng cao hiệu suất và thành công trong môi trường làm việc hiện đại. Chúng tôi cung cấp các khóa học, chương trình đào tạo và tư vấn chất lượng cao trong các lĩnh vực như quản lý, kỹ năng cá nhân, lãnh đạo, phát triển kỹ năng kỹ thuật và nhiều lĩnh vực khác.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
