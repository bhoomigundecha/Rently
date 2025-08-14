import '@/assets/styles/global.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
export const metadata = {
  title : 'Rently | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, property, pulse, find, perfect',
}


const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main> {children} </main>
        <Footer/>
      </body>
    </html>
  )
}

export default MainLayout
