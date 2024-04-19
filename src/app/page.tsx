import SeeAll from "~/components/homepage/SeeAll";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SeeAll title={'Upcoming Events'} see_all_link={'#'}/>
      <SeeAll title={'AprtmentLife Entertainers'} see_all_link={'#'}/>
      <SeeAll title={'Past Events'} see_all_link={'#'}/>
    </main>
  );
}
