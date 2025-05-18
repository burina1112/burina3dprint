function calculatePrice() {
  const fileInput = document.getElementById("stlFile");
  const materialRate = parseFloat(document.getElementById("material").value);
  const layerMultiplier = parseFloat(document.getElementById("layerHeight").value);

  if (!fileInput.files[0]) {
    alert("Nahraj STL soubor.");
    return;
  }

  const fakeVolume = 15.5;
  const price = (fakeVolume * materialRate * layerMultiplier).toFixed(2);

  document.getElementById("result").innerText = 
    `Odhadovaná cena tisku: ${price} Kč (objem: ${fakeVolume} cm³)`;
}