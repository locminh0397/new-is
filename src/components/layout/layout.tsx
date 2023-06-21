import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className='w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto bg-white'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout