import Navbar2 from "../components/Navbar2";
import Swipper from "../components/Swipper";
import GridComponents from "../components/GridComponents"

export default function HomePage() 
{
  
    return(
      <>
        
        <div className="sticky top-0 z-50 bg-white shadow-md">
        
                  <Navbar2 />
         </div>

        <div
          className="min-h-screen w-full relative bg-linear-to-r 
                       from-[#f6f4ef] via-[#c6b59c] to-[#b7afa5]
                       flex items-center justify-center text-center 
                      flex-col gap-8 text-shadow-amber-950"
        >
          <Swipper />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Year End Sale is Here!
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl">
            Check out our amazing year end sale with discounts up to 50% on all
            products!
            <br />
            Click on the image to to view our collection.
          </p>

          <GridComponents />
        </div>
      </>
    );
  }

