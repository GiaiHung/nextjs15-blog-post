import SearchForm from "@/components/SearchForm";

interface HomeSearchParams {
    searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomeSearchParams) {
    const query = (await searchParams).query;
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch your startup. <br /> Connect with Entrepreneurs
                </h1>
                <p className="sub-heading max-w-3xl">
                    Submit ideas. Vote on Pitches. Get noticed in virtual
                    competition
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search result for: ${query}` : "All Startups"}
                </p>
            </section>
        </>
    );
}
