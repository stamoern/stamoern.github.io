// const script = [...document.querySelectorAll('script')].map((script => script.src)).join('<br>');

document.body.innerHTML = `<h1><pre>${JSON.stringify(window.appConfig)}</pre></h1>`;
