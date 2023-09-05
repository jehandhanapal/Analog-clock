let h = document.querySelector('.hour');
let m = document.querySelector('.minute');
let s = document.querySelector('.second');


setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  h.style.transform = `rotate(${hrotation}deg)`;
  m.style.transform = `rotate(${mrotation}deg)`;
  s.style.transform = `rotate(${srotation}deg)`;
}, 1000);
