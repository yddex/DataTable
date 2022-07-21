import axios from "axios";

const URL_POST = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts(){
    let data = null;
    try{
    const response = await axios.get(URL_POST);
    data = response.data;
    }catch(err)
    {
        console.log(err);
        return [];
    }
    return data;
}

export {getPosts}

