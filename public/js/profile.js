let dogUrl = '';
myWidget = cloudinary.createUploadWidget({
  cloudName: 'dr7w1oryg',
  uploadPreset: 'acbjtlov'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ');
    dogUrl = result.info.url;
    console.log(`This is the new dogURL: ${dogUrl} `);
    return dogUrl;
  }
})
document.getElementById("upload_widget").addEventListener("click", function () {
  myWidget.open();
}, false);

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const size = document.querySelector('#dog-size').value.trim();
  const sex = document.querySelector('#dog-sex').value.trim();
  const needed_funding = document.querySelector('#dog-funding').value.trim();
  const about = document.querySelector('#dog-about').value.trim();
  const imageUrl = dogUrl;

  // console.log(`This is the new dogURL inside the form handler${image_url} `);

  if (name && breed && age && size && sex && needed_funding && about && imageUrl) {
    const response = await fetch(`/api/dogs`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        breed,
        age,
        size,
        sex,
        needed_funding,
        about,
        imageUrl
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create dog');
    }
  }

};


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/dogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete dog');
    }
  }
};



document
  .querySelector('.new-dog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.dog-list')
  .addEventListener('click', delButtonHandler);