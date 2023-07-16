// https://developers.giphy.com/

// chrome.tabs.executeScript(tabId, { file: './index.js' });
const apiKey = 'sMWE4ps51egxWs1dKSB3HZnpOfVLCSJp';
const endpoint = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const request = fetch(endpoint);

request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const btn = document.createElement('button');
    btn.textContent = 'Reload page';
    btn.onclick = () => {
      window.location.reload(true);
    };
    document.body.appendChild(btn);

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.appendChild(img);

    setInterval(() => window.location.reload(true), 3000);
  })
  .catch(console.warn);
