document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('kgOutput').innerHTML = lbs/1000;
    document.getElementById('tOutput').innerHTML = lbs/1000000;
    document.getElementById('mgOutput').innerHTML = lbs*1000;
});