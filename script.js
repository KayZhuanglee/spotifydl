let item = document.querySelector('.navigasi');
let nav = document.querySelector('.icon-humburrger');
let con = document.querySelector('.events');
let con2 = document.querySelector('.element-dari-dom');
let con69 = document.querySelector('.btnlink');
      nav.addEventListener('click', () => {
        item.classList.toggle('aneh');
        if(item.classList.contains('aneh')) {
          item.style.display = 'block'
        } else {
          item.style.display = 'none'
        }
      })
      con.addEventListener('submit', async (e) => {
        e.preventDefault()
        let con3 = document.querySelector('.buat-simpen-gamabar-title');
        let userWrong = document.querySelector('.alert_woy')
        let userWrong2 = document.querySelector('.alert_woys')
        let user = document.querySelector('.users');
        let el = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement('h1');
        let title2 = document.createElement('p');
        let aBtn = document.createElement('a');
        let gex = /^https?:\/\/(open\.spotify\.com)\/(track|album|playlist)\/[a-zA-Z0-9]+$/;
        if(!user.value) {
          userWrong2.style.display = 'block'
          setTimeout(() => {
            userWrong2.style.display = 'none'
          }, 3000)
        } else if(!gex.test(user.value)) {
          userWrong.style.display = 'block'
          setTimeout(() => {
            userWrong.style.display = 'none'
          }, 3000)
          user.value = ''
        } else {
          el.classList.add('domEl')
          con2.appendChild(el)
          try {
          const res = await fetch('https://api.agatz.xyz/api/spotifydl?url=' + user.value);
          const result = await res.json();
          const hasil = JSON.parse(result.data)
          setTimeout(async () => {
          img.src = hasil.gambar_kecil[0].url;
          title.textContent = hasil.judul;
          title2.textContent = hasil.nama_channel;
          aBtn.textContent = `Download mp3 (${hasil.durasi}Kbps)`
          aBtn.href = hasil.url_audio_v1;
          title.classList.add('tks1');
          title2.classList.add('tks2');
          aBtn.classList.add('aButton')
          img.style.width = '100%';
          img.style.borderRadius = '10px';
          con3.appendChild(img)
          con3.appendChild(title)
          con3.appendChild(title2)
          con2.appendChild(aBtn)
          el.style.display = 'none'
          }, 2000)
          } catch(err) {
            userWrong.style.display = 'block'
            setTimeou(() => {
              userWrong.style.display = 'none'
            }, 2000)
            console.log(err)
          }
          user.value = '';
}})