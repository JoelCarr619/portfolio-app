import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'


const poppins = Poppins({ weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web Dev Joel Carr',
  description: 'This was a side project to learn Next.js and TailwindCSS'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col text-slate-700 ' + poppins.className}>
        <header className=' flex p-4 sm:p-6 border-b'>
          <div className='flex font-medium text-xs sm:text-sm  item-center max-w-[900px] mx-auto w-full'>
          <a href={'/'} className='hidden sm:inline'>
  Joel Carr
</a>
<a href={'/'} className='sm:hidden'>
  JC
</a>

           </div>
           </header>
        {children}
        <footer className='flex p-4 py-16 text-xs text-slate-600 border-t  items-center justify-center flex-col gap-6'>
          <div className='flex items-center justify-center gap-4'>
            <a href={'/Full Stack Resume.pdf'} className='cursor-pointer hover:opacity-60 duration-200'>PDF Resume</a>
            <p></p>
            <Link href={'/projects'}className='cursor-pointer hover:opacity-60 duration-200'>Projects</Link> 
            <p></p>
            <a className='cursor-pointer hover:opacity-60 duration-200'>Blog</a>  
          </div>
          <div className='flex items-center justify-center gap-4 text-xl sm:text-xl'>
            <a className='cursor-pointer hover:opacity-60 duration-200' href={'https://google.com'} target='_blank'>
            <i className="fa-solid fa-envelope"></i>
            </a>
            <a className='cursor-pointer hover:opacity-60 duration-200' href={'https://www.linkedin.com/in/joelcarr2/'} target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className='cursor-pointer hover:opacity-60 duration-200' href={'https://github.com/JoelCarr619'} target='_blank'>
            <i className="fa-brands fa-github"></i> 
            </a>
          </div>
        </footer>
      </body>
    </html> 
  )
}
