
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('ibsnInput').addEventListener('input',
    function (e) {

        // console.log(123);
        let ibsn = e.target.value;
        //console.log(ibsn);
        document.getElementById('output').style.visibility = 'visible';
        document.getElementById('gramsoutput').innerHTML = ibsn / 0.0022046;
        document.getElementById('kgoutput').innerHTML = ibsn / 2.2046;
        document.getElementById('ozoutput').innerHTML = ibsn * 16;
    });