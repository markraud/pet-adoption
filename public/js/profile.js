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
      body: JSON.stringify({ name, breed, age, size, sex, needed_funding, about }),
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
