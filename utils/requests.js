const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
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

// Fetch single property 
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet 

    if(!apiDomain){
        return null;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`);

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      return null; 
    }

    return await res.json();
  } catch (error) {
    console.error("fetchProperties error:", error);
    return null; 
  }
}


export { fetchProperties, fetchProperty };  // Export the functions to be used elsewhere in the app
