import React from 'react'

const RideComp = ({data}) => {
  return (
    <div className=' w-full  bg-white my-4 rounded-xl'>
        <div className=" w-full flex justify-between px-4 py-4 ">
            <div className=" flex w-1/2 justify-between ">
                <h1 className=' text-2xl text-slate-800 '>{data.starttime}</h1>
                <div className="  flex flex-col justify-center items-center">
                    <div className=""> <h1 className=' text-xs'>{data.traveltime}</h1></div>
                    
                    <div className=" flex justify-center items-center mt-2"><div className=" w-1 h-1 rounded-full bg-slate-400"></div>
                    <hr style={{height:"1px"}} className=' text-slate-800 bg-slate-100 w-28' />
                    <div className=" w-1 h-1 rounded-full bg-slate-400"></div></div>

                </div>
                <h1 className='text-2xl text-slate-800 '>{data.endtime}</h1>
            </div>
            <div className=" w-1/2 flex justify-end"><h1 className=' font-bold text-3xl text-violet-600'>{data.price}</h1></div>
        </div>
        <div className="w-full  px-4 mt-4">
            <h1 className=' font-medium text-slate-800'>{data.name}</h1>
        </div>
        <div className="w-full flex justify-end px-4 mt-2">
            <h1>{data.seats} Seats left</h1>
        </div>
        <hr className=' w-2/3 mx-auto' />
        <div className=" w-full flex justify-between px-4 mt-2 pb-6">
            <div className=" flex w-1/2 justify-between items-center">
                <h1 className=' text-violet-600 text-lg'>Amenities</h1>
                <h1 className=' text-violet-600 text-lg'>Timeline</h1>
                <h1 className=' text-violet-600 text-lg'>Cancellation policy</h1>
            </div>
          <div className=" w-1/2 flex justify-end">
            <button className=' bg-violet-600 w-max px-12 text-lg py-2 rounded-xl text-white '>Select Seat</button>
          </div>
        </div>
    </div>
  )
}

export default RideComp