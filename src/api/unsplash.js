import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:'Client-ID AaPCllor4aNOBqLVp8b1NV9c3yiMUC7REOJMdXMyEFQ', 
    }

})