import SearchForm from "../components/SearchForm";
import '../styles/globals.css'

export default async function Home({ searchParams }: {
  searchParams: Promise <{query? : string}>
}) {
    const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>
        <p className='sub-heading'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm />
      </section>
    </>
  );
}