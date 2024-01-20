import axios from "axios";

const searchImages = async (searchTerm)=>{
    const response = await axios.get("https://api.unsplash.com/search/photos",{ 
        headers: {
            Authorization: "Client-ID hurKI9g7CEbQPdv1mSyf3DoNvTYQ6f-iitepAtC2Ysc"
        },
        params: {
            query:searchTerm
        }
    })
return response.data.results
}


export default searchImages