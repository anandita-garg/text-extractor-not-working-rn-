document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('extractedText', (data) => {
    const { extractedText } = data;
    const container = document.getElementById('content');

    if (extractedText) {
      container.innerHTML = `
        <h3>Headers</h3>
        <p>${extractedText.headers.length > 0 ? extractedText.headers.join('<br/>') : 'No headers found'}</p>
        <h3>Paragraphs</h3>
        <p>${extractedText.paragraphs.length > 0 ? extractedText.paragraphs.join('<br/>') : 'No paragraphs found'}</p>
        <h3>Image Alt Texts</h3>
        <p>${extractedText.imgAltTexts.length > 0 ? extractedText.imgAltTexts.join('<br/>') : 'No alt texts found'}</p>
        <h3>Divs</h3>
        <p>${extractedText.divs.length > 0 ? extractedText.divs.join('<br/>') : 'No divs found'}</p>
        <h3>Spans</h3>
        <p>${extractedText.spans.length > 0 ? extractedText.spans.join('<br/>') : 'No spans found'}</p>
        <h3>Other Elements</h3>
        <p>${extractedText.other.length > 0 ? extractedText.other.join('<br/>') : 'No other elements found'}</p>
      `;
    } else {
      container.innerHTML = '<p>No data found. Please extract text from a webpage.</p>';
    }
  });
});
