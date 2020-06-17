window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    video:
      '/Users/dusty/Dropbox/Code/Theorem/internExcurise/360/src/media/Pebbly-Beach-Headland.mp4',
    is_stereo: false,
  });
}
