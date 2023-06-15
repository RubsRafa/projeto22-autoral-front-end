import api from './api';

export async function getUserInfoApi(token, userId) {
    const { data } = await api.get(`/users/${userId}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function editUser(token, body) {
    const { data } = await api.put('/users/edit', body, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}