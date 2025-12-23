var countDown = new Date('Dec 25, 2025 00:00:00').getTime();
var x = setInterval(()=>{
  var now = new Date().getTime();
  var distance = countDown - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + ':';
  var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + ':';
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + ':';
  var secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerHTML = days;
  document.getElementById('hrs').innerHTML = hrs;
  document.getElementById('mins').innerHTML = mins;
  document.getElementById('secs').innerHTML = secs;

},1000)
