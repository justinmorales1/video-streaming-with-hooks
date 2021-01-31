import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideo = (defaultSearchTerm) => {

    const [videos, setVideo] = useState([]);

    useEffect(()=> {
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search =  async (input) => {
        const response = await youtube.get('/search', {
            params: {
                q: input
            }
        });

        setVideo(response.data.items);
    };

    return [videos, search];
}

export default useVideo;