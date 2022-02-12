function main () {
  console.log('loading canvas');
  try {
    TagCanvas.Start('skills-canvas', 'tags', {
      textFont: 'Roboto, sans-serif',
      textColour: '#333',
      textHeight: 20,
      fadeIn: 1500,
      noSelect: true,
      wheelZoom: false,
    });
  } catch (e) {
    console.log(`Error occured while trying to load skills-canvas: ${e}`);
    document.getElementById('skills-canvas-container').style.display = 'none';
  }
}

window.onload = () => main();