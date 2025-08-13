import '@/assets/styles/global.css';

export const metadata = {
  title : 'Rently | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, property, pulse, find, perfect',
}


const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div> {children} </div>
      </body>
    </html>
  )
}

export default MainLayout
