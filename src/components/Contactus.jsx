import React from 'react'

function Contactus() {
  return (
    <div>
          <div className='bg-white p-8 border-[1px] rounded-sm '>
              <h6 className='text-center heading6'> Leave a Reply</h6>

              <form className='mt-5 flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>  
                      <label>Name*</label>
                      <input type='text' className="border-[1px] rounded-sm focus:outline-none p-2" />
                  </div>
                  
                  <div className='flex flex-col gap-2'>
                      <label>Email*</label>
                      <input type='email' className="border-[1px] rounded-sm focus:outline-none p-2" />
                  </div>

                  <div className='flex flex-col gap-2'>
                      <label>Website</label>
                      <input type='text' className="border-[1px] rounded-sm focus:outline-none p-2" />
                  </div>

                  <div className='flex flex-col gap-2'>
                      <label>Message</label>
                      <textarea rows={7} className="border-[1px] rounded-sm focus:outline-none p-2" />
                  </div>

                  <input type="submit" value="submit" className='primary-btn tablet:w-1/6 sm:w-1/2' />
              </form>

          </div>
    </div>
  )
}

export default Contactus
