import api from './api';

export async function postRepost(body, token) {
    const { data } = await api.post('/repost', body, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteRepost(body, token) {
    const { data } = await api.delete('/repost', body, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}