import Hero from "@/components/Hero";
import HomeProperies from "@/components/HomeProperies";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/database";
const HomePage = async() => {
  await connectDB();
  return(
    <>
      <Hero/>
      <InfoBoxes />
      
      <HomeProperies/>
      
    </>
  )
}

export default HomePage