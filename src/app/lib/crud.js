const API_URL = geckocooking.env.DATABASE_URL

export const fetchPosts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const create = async (post) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return res.json();
};

export const update = async (id, post) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return res.json();
};

export const deleteA = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};