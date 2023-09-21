
function inpo(){
  let result = document.getElementById('dataResult')
  result.textContent = `Sabar loding tolol..`
  let n = document.getElementById('ip')
  fetch(`https://mcapi.us/server/status?ip=${n.value}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status == "success") {
                        result.innerHTML = `Ip : ${n.value}<br>Status : ${data.online ? 'Onlen' : 'Oflen'}<br>Player : ${data.players.now}/${data.players.max}`
                    } else {
                        result.textContent = `LU SALAH MASUKIN IP KALI ERROR NIH GOBLOK!`
                    }
                })
}