const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((res) => res.json())
        .then((json) => displayPost(json))
        .catch(error => console.log('Error:', error));
};

const displayPost = (posts) => {
    const container = document.querySelector('#post-container');
    container.innerText = '';

  posts.forEach((post) => {
      const p = document.createElement('p');
      p.innerText = post.title;
      p.classList.add('post');
      container.appendChild(p);
  });
};
