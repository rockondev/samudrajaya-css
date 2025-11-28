document.querySelectorAll('.gallery-img').forEach((img, index) => {
  img.addEventListener('click', () => {
    const items = [...document.querySelectorAll('.gallery-img')].map(i => ({
      src: i.getAttribute('data-full'),
      w: i.naturalWidth,
      h: i.naturalHeight
    }));

    const pswp = document.querySelector('.pswp');
    const gallery = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, { 
  index,
  getDoubleTapZoom: (isMouseClick, item) => item.w > 1200 ? 1.5 : 1 
});
    gallery.init();
  });
});