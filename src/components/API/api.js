import axios from "axios";

const URL_POST = 'https://jsonplaceholder.typicode.com/posts';

async function getPostsAPI(){
    try{

    let data = null;
    const response = await axios.get(URL_POST);

    data = response.data;
    return data;

    }catch(err){
        console.log(err, 'getPosts api error')
    }
}

export {getPostsAPI}

