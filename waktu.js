function waktu () {
            sekarang=new Date();
            jam=String(sekarang.getHours()).padStart(2,"0");
            menit=String(sekarang.getMinutes()).padStart(2,"0");
            
detik=String(sekarang.getSeconds()).padStart(2,"0");
            hari=sekarang.getDay();
            tgl=sekarang.getDate();
            bln=sekarang.getMonth();
            thn=sekarang.getFullYear();
            clock.innerHTML=jam+":"+menit+":"+detik;
            
poe=["Ahad","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu","Minggu"];
bulan=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
tanggal.innerHTML=poe[hari]+","+tgl+"-"+bulan[bln]+"-"+thn;
        }
        setInterval(waktu,0);
        waktu();