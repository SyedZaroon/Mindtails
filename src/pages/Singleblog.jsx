import React from 'react'
import Trandingpost from "../components/Trandingpost"
import Hotnews from "../components/Hotnews"
import Sidebar from "../components/Sidebar"
import post8 from "../../public/assets/post-8.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faMessage } from "@fortawesome/free-solid-svg-icons"
import Qoutation from '../components/Qoutation'
import Shareartical from '../components/Shareartical'
import Bloger from '../components/Bloger'
import Prenext from '../components/Prenext'
import Contactus from '../components/Contactus'
import { assets } from '../utils/assets'


function Singleblog() {
    return (
        <div>
            <div className="flex gap-3 my-12">

                <div className='laptopl:basis-[868px] basis-auto flex flex-col gap-5'>

                <div className="bg-white p-8 border-[1px] rounded-sm  flex flex-col gap-3 h-fit ">

                    {/* Blog Post Image */}
                    <img src={assets.post8} alt="Blog Post" className="w-full" />

                    {/* Blog Post Title */}
                    <h2 className='heading4'>Setting Goals and Staying Motivated</h2>

                    {/* Post details - Author, Date, Comments */}
                    <div className="flex flex-wrap gap-3 items-center">
                        <a href="#">
                            <div className="group flex gap-2 items-center">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="sub-text text-tagColor group-hover:text-primaryDarkColor"
                                />
                                <span className="sub-text text-tagColor group-hover:text-primaryDarkColor">
                                    Hellen
                                </span>
                            </div>
                        </a>
                        <div className="group flex gap-2 items-center">
                            <FontAwesomeIcon icon={faClock} className="sub-text text-tagColor" />
                            <span className="sub-text text-tagColor">April 16, 2023</span>
                        </div>
                        <div className="group flex gap-2 items-center">
                            <FontAwesomeIcon icon={faMessage} className="sub-text text-tagColor" />
                            <span className="sub-text text-tagColor">No Comment</span>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <p className='text text-textColor'>
                        Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter.
                        Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider.
                        Polite it elinor is depend. His not get talked effect worthy barton. Household shameless incommode at no
                        objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an
                        widen me event truth. Certain law age brother sending amongst why covered. Ferrars all spirits his imagine
                        effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen.
                        Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning.
                        Blush on in jokes sense do do. Brother hundred he assured reached on up no.
                    </p>

                    <div className='flex gap-4 justify-center sm:flex-wrap tablet:flex-nowrap '>
                        <img src={assets.insta1} className='w-[240px] h-[161px] object-cover' />
                        <img src={assets.insta2} className='w-[240px] h-[161px] object-cover' />
                        <img src={assets.insta3} className='w-[240px] h-[161px] object-cover' />
                    </div>

                    <p className='text text-textColor'>
                        Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.
                    </p>

                    <ul className='text text-textColor list-disc pl-5 marker:text-primaryDarkColor marker:text-lg'>
                        <li>Inhabiting discretion the her dispatched decisively boisterous joy.</li>
                        <li>Cottage out enabled was entered greatly prevent message.</li>
                        <li>So feel been kept be at gate. Be September it extensive oh concluded of certainty.</li>
                        <li>Led own hearted highest visited lasting sir through compass his.</li>
                        <li>Resolution diminution conviction so Mr at unpleasing simplicity no.</li>
                    </ul>

                    <h6 className='heading6'>Inhabiting discretion the her dispatched decisively</h6>

                    <p className='text text-textColor'>
                        Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered. Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.
                    </p>
                    <div className="my-10">
                        <Qoutation />
                    </div>
                    
                    <hr></hr>

                    <div className='w-full flex gap-2 justify-center flex-wrap mt-5'>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor hover:border-primaryColor cursor-pointer ' >Activities</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor hover:border-primaryColor cursor-pointer ' >Fashion</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor hover:border-primaryColor cursor-pointer ' >Health</span>
                        <span className='py-[3px] px-2 border-[1px] rounded-sm hover:text-primaryColor hover:border-primaryColor cursor-pointer ' >Lifestyle</span>
                        
                    </div>


                    </div>
                    
                    <div className='h-fit'>
                        <Shareartical />
                    </div>

                    <div className='h-fit'>
                        <Bloger />
                    </div>
                    <div className='h-fit'>
                        <Prenext />
                    </div>
                    <div className='h-fit'>
                        <Contactus />
                    </div>
                                        
                </div>

                {/* Sidebar */}
                <div className="basis-[350px] hidden laptop:block">
                    <Sidebar />
                </div>

                

            </div>

            

            {/* Related Posts Section */}
            <div className="py-6 flex gap-4 sm:flex-wrap laptop:flex-nowrap">
                <Trandingpost />
                <Hotnews />
            </div>
        </div>
    )
}

export default Singleblog;
