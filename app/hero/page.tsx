
import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='flex  mt-10 p-16' >
       
       <div className='sidebar  h-[344px] text-2xl'>
        <table className='border border-blue-300 text-gray-700 mt-4'>
          <tr><td>Women fashion
            <select name="" id="">
              <option value="">more</option>
            </select>
            </td></tr>
          <tr><td>Women fashion
          <select name="" id="">
              <option value="">more</option>
            </select>
            </td></tr>
          <tr><td>Women fashion</td></tr>
          <tr><td>Mens fashion</td></tr>
          <tr><td>Electronics</td></tr>
          <tr><td>Life Style</td></tr>
          <tr><td>Home And Living</td></tr>
          <tr><td>Medicines</td></tr>
          <tr><td>Sports & OutDoor</td></tr>
          <tr><td>Fisheries & Pets</td></tr>
          <tr><td>Health & Beauty</td></tr>
          
        </table>
        </div>
        <div className='flex'>
        <div className= 'bg-black text-white flex w-[495px] h-[300px] '>
          <div>  
                  <Image src={"/Frame 563.png"} alt={"imageapple"} height={50} width={50} />
          <h4>iPhone 14 Series</h4>
          </div>


          <h1 className='font-bold text-6xl'>
          Up to 10% <br />off Voucher
          </h1>
          <h2>Shop Now</h2>

          <div><Image src= {"/Vector (1).png"} alt='image2' height={50} width={50} />
          </div>
          </div>
{/* <div className='image mt-10 '>
        
      </div>  
            */}
     
      <div className='image mt-2'>
        <Image src={"/image1.png"} alt={"mobileimage"} height={300} width={495} />
      </div>
     </div> 
     </div> 

      
  )
}
