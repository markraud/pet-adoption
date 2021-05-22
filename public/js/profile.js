const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#dog-name').value.trim();
  const breed = document.querySelector('#dog-breed').value.trim();
  const age = document.querySelector('#dog-age').value.trim();
  const size = document.querySelector('#dog-size').value.trim();
  const sex = document.querySelector('#dog-sex').value.trim();
  const needed_funding = document.querySelector('#dog-funding').value.trim();
  const about = document.querySelector('#dog-about').value.trim();

  if (name && breed && age && size && sex && needed_funding && about) {
    const response = await fetch(`/api/dogs`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        breed,
        age,
        size,
        sex,
        needed_funding,
        about
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
//   const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dr7w1oryg';
// const CLOUDINARY_UPLOAD_PRESET = 'acbjtlov';
// const image = document.querySelector('#fileupload');
// image.addEventListener('change', (e) => {
//   const file = e.target.files[0];
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

//   fetch(CLOUDINARY_URL, {
//     method: 'POST',
//     body: formData,
//   })
//     .then(response => response.json())
//     .then((data) => {
//       if (data.secure_url !== '') {
//         const uploadedFileUrl = data.secure_url;
//         localStorage.setItem('passportUrl', uploadedFileUrl);
//       }
//     })
//     .catch(err => console.error(err));
// });
const url = "https://api.cloudinary.com/v1_1/dr7w1oryg/upload";
const form = document.querySelector("form");
const CLOUDINARY_UPLOAD_PRESET = 'acbjtlov';
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const files = document.querySelector("[type=file]").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        document.getElementById("data").innerHTML += data;
      });
  }
});
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