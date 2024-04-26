import SeeAll from "~/components/homepage/SeeAll";

//ensures when data is changed on the db, it updates on next render on the app. Prevents caching
export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SeeAll title={'Upcoming Events'} see_all_link={'#'}/>
      <SeeAll title={'AprtmentLife Entertainers'} see_all_link={'#'}/>
      <SeeAll title={'Past Events'} see_all_link={'#'}/>
    </main>
  );
}
