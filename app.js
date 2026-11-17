
function init() {
  ['pondLen', 'pondWid', 'maxDepth', 'edgeOverlap'].forEach(id => {
    document.getElementById(id).addEventListener('change', calc);
    document.getElementById(id).addEventListener('input', calc);
  });
  calc();
}

function calc() {
  const l = parseFloat(document.getElementById('pondLen').value)||15;
  const w = parseFloat(document.getElementById('pondWid').value)||10;
  const d = parseFloat(document.getElementById('maxDepth').value)||3;
  const o = parseFloat(document.getElementById('edgeOverlap').value)||1.5;

  // Formula: Length + 2*Depth + 2*Overlap
  const linerL = l + (2 * d) + (2 * o);
  const linerW = w + (2 * d) + (2 * o);

  // Round up to commercial increments (usually multiples of 5ft)
  const commL = Math.ceil(linerL / 5) * 5;
  const commW = Math.ceil(linerW / 5) * 5;

  const gal = Math.round(l * w * d * 7.48 * 0.8);

  document.getElementById('linerDimensions').textContent = `${Math.ceil(linerL)}ft × ${Math.ceil(linerW)}ft`;
  document.getElementById('linerSqFt').textContent = `Order Standard: ${commL}ft × ${commW}ft Roll (${commL * commW} sq ft)`;
  document.getElementById('pondGallons').textContent = `${gal.toLocaleString()} Gallons`;
  document.getElementById('pumpGph').textContent = `${gal.toLocaleString()} GPH`;
}
window.addEventListener('DOMContentLoaded', init);
