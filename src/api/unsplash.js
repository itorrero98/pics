import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID OJT9aqrC4K6nzPsDK35qMSYgaCXaamV8KyKEodHytO0",
    },
});
