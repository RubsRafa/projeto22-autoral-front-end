import api from './api';

export async function postLike(body, token) {
    const { data } = await api.post('/like', body, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteLike(postId, token) {
    console.log(token);
    const { data } = await api.delete('/like', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        postId,
      },
    });
    return data;
  }
  

export async function getUserLikes(token) {
    const { data } = await api.get('/like', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function getAllUsersLikes(token) {
    const { data } = await api.get('/like/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}