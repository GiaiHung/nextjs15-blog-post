import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

interface HomeSearchParams {
    searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomeSearchParams) {
    const query = (await searchParams).query;

    const posts = [
        {
            _id: 1,
            _createdAt: new Date(),
            views: 55,
            description: "This is an example blog",
            category: "Robot",
            title: "We Robots",
            author: {
                _id: 1,
                name: "Elon Musk",
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            image: "https://plus.unsplash.com/premium_photo-1742884841225-7e8961ec3611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2UlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D",
        },
    ];
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
                <ul className="card_grid mt-7">
                    {posts.length > 0 ? (
                        posts.map((post: StartupCardType) => (
                            <StartupCard key={post._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
