const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet 

    if(!apiDomain){
        return [];
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      return []; 
    }

    return await res.json();
  } catch (error) {
    console.error("fetchProperties error:", error);
    return []; 
  }
}

export { fetchProperties };
