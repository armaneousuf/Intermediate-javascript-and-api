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


// const loadImg = () => {
//     const url = "https://jsonplaceholder.typicode.com/photos";
//     fetch(url)
//         .then(res => res.json())
//         .then(json => displayImg(json))
//     .catch(error => console.log('error:', error))
// }

// const displayImg = (images) => {
//     const imgContainer = document.querySelector('#image-container');
//     imgContainer.innerHTML = '';

//     images.forEach(image => {
//         const imgEle = document.createElement('img');
//         imgEle.src = image.url;
//         imgEle.alt = image.title;
//         imgEle.style.width = '150px';
//         imgEle.style.margin = '5px';
//         imgContainer.appendChild(imgEle);
//     })
// }