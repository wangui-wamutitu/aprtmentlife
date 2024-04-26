import React from 'react'
type TEventCard = {
    thumbnail: string,
    date: string,
    name: string,
    location: string,
    pricing: number,
    time: string
}

function EventCard(props: TEventCard) {
    const {thumbnail, date, name, location, pricing, time} = props
  return (
    <div className={'w-[350px] h-[300px] rounded-3xl relative shadow-lg bg-transparent cursor-pointer'}>
        <img src={thumbnail} alt={'Event thumbnail'} className='w-full h-[200px] rounded-t-3xl object-fit'/>
        <div className={'w-16 h-16 p-4 text-center text-sm absolute right-5 top-3 rounded-full bg-slate-700 opacity-80 text-white'}>{date}</div>
        <div className={'w-full h-[calc(100%-200px)] bg-black rounded-b-3xl text-white p-2 opacity-30'}>
            <h3  className={'text-lg font-semibold'}>{name}</h3>
            <div className='w-full flex justify-between items-center'>
                <p>{location} - {time}</p>
                <p className={'bg-white text-black px-4 py-2 rounded-2xl'}>${pricing}.00</p> 
            </div>
        </div>
    </div>
  )
}

export default EventCard