function getText() {
  const ptags = document.querySelectorAll('p');
  const htags = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const imgs = document.querySelectorAll('img');
  const divs = document.querySelectorAll('div');
  const spans = document.querySelectorAll('span');

  const extractedText = {
    headers: [],
    paragraphs: [],
    imgAltTexts: [],
    divs: [],
    spans: [],
    other: []
  };

  ptags.forEach(p => {
    let ptext = p.textContent.trim();
    if (ptext) extractedText.paragraphs.push(ptext);
  });

  htags.forEach(h => {
    let htext = h.textContent.trim();
    if (htext) extractedText.headers.push(htext);
  });

  imgs.forEach(img => {
    let altText = img.alt.trim();
    if (altText) extractedText.imgAltTexts.push(altText);
  });

  divs.forEach(div => {
    let divText = div.textContent.trim();
    if (divText) extractedText.divs.push(divText);
  });

  spans.forEach(span => {
    let spanText = span.textContent.trim();
    if (spanText) extractedText.spans.push(spanText);
  });

  const otherTextElements = document.querySelectorAll('*:not(p):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6):not(img):not(div):not(span):not(script):not(style)');

  otherTextElements.forEach(el => {
    let text = el.textContent.trim();
    if (text) extractedText.other.push(text);
  });


  chrome.runtime.sendMessage({ extractedText });
}

getText();
