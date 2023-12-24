let cachedResults;

export default async function getResults() {
    if (!cachedResults) {
        const res = await fetch("https://graphql.datocms.com/", {
            next: { revalidate: 3 },
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
            },
            body: JSON.stringify({
                query: ` {
                    reportazZChrztu {
                      img {
                        id
                        url
                      }
                    }
                }`,
            }),
        });
        const json = await res.json();
        cachedResults = json.data.reportazZChrztu.img;
    }

    return cachedResults;
}
