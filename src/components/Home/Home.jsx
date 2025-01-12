
import TypingAnimation from "./TypingAnimation.jsx";
import BookingForm from "./BookingForm.jsx";
import herosection from '../../assets/Hero/hero.mp4';
import Hcomp2 from './Hcomp2.jsx';
import Hcomp3 from './Hcomp3.jsx';
import Hcomp4 from "./Hcomp4.jsx";
import Hcomp5 from "./Hcomp5.jsx";
import Hcomp6 from "./Hcomp6.jsx";
import Hcomp7 from "./Hcomp7.jsx";
import Hcomp8 from "./Hcomp8.jsx";
import Hcomp9 from "./Hcomp9.jsx";
import Hcomp10 from "./Hcomp10.jsx";
import Hcomp11 from "./Hcomp11.jsx";
import Hcomp12 from "./Hcomp12.jsx";
import Hcomp13 from "./Hcomp13.jsx";
import Hcomp14 from "./Hcomp14.jsx";
function Home() {
  return (
    
<div className="relative w-[100%] max-w-[120em]   mx-auto h-full z-0 ">
  {/* Hcomp1 herosection */}
<div className="relative h-[45em]">
<video
    className="w-full h-full md:h-full object-cover group "
    autoPlay
    loop
    muted
    playsInline
>
    <source src={herosection} type="video/mp4" />

</video>
<div className="bg-desert-sand pt-40">
<Hcomp2/>

<TypingAnimation/>





<BookingForm />
<Hcomp3/>
<Hcomp4/>
<Hcomp5/>
<Hcomp6/>
<Hcomp7/>
<Hcomp8/>
<Hcomp9/>
<Hcomp10/>
<Hcomp11/>
<Hcomp12/>
<Hcomp13/>
<Hcomp14/>
</div>
</div>





    </div>
  )
}

export default Home