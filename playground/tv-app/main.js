const script = [...document.querySelectorAll('script')].map((script => script.src)).join('<br>');

document.body.innerHTML = `<h1>${script}</h1>`;



