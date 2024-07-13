export async function GET(request) {
  try {
    const response = await fetch(
      "https://api.timbu.cloud/products?organization_id=9664c043b1c24c8dafdcdf85eac455ee&reverse_sort=false&page=2&size=10&Appid=FSV9IJDICP13JWC&Apikey=f91c90b878c544c6ad320611afbc7b5320240712123748804782",
      {
        headers: {
          Authorization: `Bearer ${process.env.TIMBU_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Timbu API");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
