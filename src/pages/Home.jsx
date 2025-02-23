import React from 'react'
import Slider from '../components/Slider'
import Sidebar from "../components/Sidebar";
import Postbox from '../components/Postbox';
import Trandingpost from "../components/Trandingpost";
import Hotnews from "../components/Hotnews";
import { assets } from '../assets/assets'


function Home() {
  
  
  return (
    <div>  
      <Slider />

      <div className="flex gap-3 my-12">
        
        <div className="laptopl:basis-[868px] basis-auto flex flex-col gap-5">
          
          <Postbox image={assets.post3} title={"Reflecting on the Blessings in My Life"} />
          <Postbox image={assets.post8} title={"Change: Coping with Life’s Transitions"} />
          <Postbox image={assets.post14} title={"My Experience with Anxiety and Depression"} />
          <Postbox image={assets.insta1} title={"Change: Coping with Life’s Transitions"} />
          <Postbox image={assets.insta2} title={"Traveled: Lessons from Taking Risks"} />
          <Postbox image={assets.insta3} title={"Learning to Embrace My Imperfections"} />
          <Postbox image={assets.insta4} title={"Travel: Exploring the World on My Own"} />
          <Postbox image={assets.insta5} title={"Moments that Matter in Life and Love"} />
          <Postbox image={assets.insta6} title={"Breaking Free from Conventional Wisdom"} />
          <Postbox image={assets.hot2} title={"Perspective: Seeing Life Through New Eyes"} />


        </div>

        <div className="basis-[350px] hidden laptop:block">
          <Sidebar />
        </div>
      </div>

      <div className="py-6 flex gap-4 sm:flex-wrap laptop:flex-nowrap">
        <Trandingpost />
        <Hotnews />
      </div>

    </div>
  );
}

export default Home
