//task1
const baseURL = 'https://reqres.in/api/';

const getUserById = async (id) => {
  const response = await fetch(baseURL + 'users/' + id, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });
  const result = await response.json();
  console.log(result.data);
  return result.data;
};

// getUserById(1);
// getUserById(2);

// task 2

const postUser = async (user) => {
  const response = await fetch(baseURL + 'users', {
    method: 'POST',
    headers: {
      'x-api-key': 'reqres-free-v1',
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
const newUser = {
  username: 'akuankka',
  password: 'Maalari',
  email: 'aku@example.com',
};
//postUser(newUser);

// task 3
const getErrorDemo = async () => {
  try {
    const response = await fetch(baseURL + 'unknown/23', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error('get failed', error);
  }
};
//getErrorDemo();

// task 4 - generic fetch function
const fetchData = async (endPointUrl, options = {}) => {
  try {
    const response = await fetch(baseURL + endPointUrl, options);
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('get failed', error);
    throw new Error(error);
  }
};

// käytetään fetchData-funktiota myös pääohjelmassa virheenkäsittely hyödyntäen
const user = {
  name: 'John Doe',
  job: 'Developer',
};
const options = {
  method: 'POST',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'content-type': 'application/json',
  },
  body: JSON.stringify(user),
};
try {
  const responseData = await fetchData('users', options);
  console.log('response', responseData);
} catch (error) {
  // oikeassa elämässä tässä kerrotaan käyttäjälle, mitä tapahtui
  // esim. käyttöliittymän domia päivittämällä
  console.error('Virhe napattu kii:', error);
}

// pyyntö ilman virheenkäsittelyä
console.log(await fetchData('users/2'));

// esimerkki eventin, domin, ja fetchin yhteispelistä
document.querySelector('button').addEventListener('click', async () => {
  try {
    const userData = await fetchData('users/2');
    console.log('User data from button click:', userData);
    document.querySelector('#output').textContent = userData.data.email;
  } catch (error) {
    console.error(error);
    document.querySelector('#output').textContent = 'Network error';
  }
});
