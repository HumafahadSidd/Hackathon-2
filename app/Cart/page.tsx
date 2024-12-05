import React from 'react'
import Image from 'next/image'
import Button from '../components/button'

export default function CartItems() {
  return (
    <div className='h-screen bg-white '>
      <button className='no-border px-2 py-2'>Home/Cart</button>
    <table className='w-[1000px] h-[800px] ml-[500px]'>
        <tr className=''> 
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
        </tr>
        <tr className='h-[100px] w-[800px] border'>
            <td  className='text-center'>
              <Image src="/Cart With Flat Discount (2).png" alt="image5" height="100" width="100" /><p>LCD Monitor</p></td>
            <td  className='text-center'>$650</td>
            <td className='text-center border p-1'><input type="number" name="" id="" />1</td>
            <td  className='text-center'>$650</td>
        </tr>

        <tr className='h-[100px] w-[800px] border'>
            <td  className='text-center'>
              <Image src="/Cart With Flat Discount.png" alt="image5" height="100" width="100"  /><p>HI GamePAd</p></td>
            <td  className='text-center'>$650</td>
            <td  className='text-center border'>
              <input type="number"  />1</td>
            <td  className='text-center'>$650</td>
      
        </tr>
        <tr className='flex justify-between space-x-20'> 
                 <td>
            <button className='px-4 py-4 border'>Return to shop</button>
        </td>
        <td>
          <button className='px-4 py-4 border '>Update Cart</button>
        </td>
        </tr>
         <tr>
                <td>
                  <button className='border px-6 py-6'>Coupon Code</button>
                  </td>
                <td>
                  <button className='border px-6 py-6 bg-red-400'>Apply Coupon</button>
                </td>
                <tr>
                    <td className='border px-4 py-8'>
                  <table>
                    <tr>
                      <th>Cart Total</th>
                    </tr>
                    <tr>
                      <td>Sub Total</td>
                      ____________________
                      <td>$1170</td>
                      ____________________
                    </tr>
                    <tr>
                      <td>Shipping</td>
                     ____________________
                     <td>$1170</td>

                    </tr>
                    <tr>
                      <td>Total</td>
                      ____________________
                      <td>$1170</td>
                     
                    </tr>
                    <tr>
                      
                      <td>Shipping</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$1300</td>
                    </tr>
                  </table>
                </td>
              </tr>
              </tr>
        <tr></tr>
        </table>
    </div>
    
  )
}
