import '@/assets/styles/global.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export const metadata = {
  title : 'Rently | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, property, pulse, find, perfect',
}


const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <NavBar/>
          <main> {children} </main>
          <Footer/>
          <ToastContainer/>
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
