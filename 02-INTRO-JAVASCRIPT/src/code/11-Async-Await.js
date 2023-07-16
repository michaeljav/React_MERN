// https://developers.giphy.com/

// chrome.tabs.executeScript(tabId, { file: './index.js' });
const apiKey = 'sMWE4ps51egxWs1dKSB3HZnpOfVLCSJp';
const endpoint = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

//como si fuera syncrono
const getImage = async () => {
  try {
    const request = await fetch(endpoint);
    const { data } = await request.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);

    const btn = document.createElement('button');
    btn.textContent = 'Reload page';
    btn.onclick = () => {
      window.location.reload(true);
    };
    document.body.appendChild(btn);
    setInterval(() => window.location.reload(true), 3000);
  } catch (error) {
    console.error(error);
  }
};
getImage();

// setInterval(() => getImage(), 3000);

// request
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const btn = document.createElement('button');
//     btn.textContent = 'Reload page';
//     btn.onclick = () => {
//       window.location.reload(true);
//     };
//     document.body.appendChild(btn);

//     const { url } = data.images.original;

//     const img = document.createElement('img');
//     img.src = url;

//     document.body.appendChild(img);

//     setInterval(() => window.location.reload(true), 3000);
//   })
//   .catch(console.warn);
