import Link from 'next/link'
import React from 'react'
import { events } from '~/dummyData'
import EventCard from '../EventCard'

type TSeeAll = {
    title: string,
    see_all_link: string
}

function SeeAll(props:TSeeAll) {
    const {title, see_all_link} = props
  return (
    <section className={'w-full mb-4'}>
        <div className={'w-full flex justify-between items-center'}>
            <h2 className={'font-semibold my-3 text-2xl'}>{title}</h2>
            <Link href={see_all_link}>See all</Link>
        </div>
        <div className={'w-[85%] flex justify-between'}>
            {events?.slice(5,8)?.map(event => (
                <EventCard key={event?.id} name={event?.name} thumbnail={event?.thumbnail} location={event?.location} pricing={event?.price} date={event?.date} time={event?.time}/>
            ))}
        </div>
    </section>
  )
}

export default SeeAll