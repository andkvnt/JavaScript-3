const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else{
                reject('Hari ini bukan hari kerja')
            }
        },3000)
    })
}
cekHariKerja("selasa")
  .then((data) => {
    console.log(`${data} mari kita kerja`);
  })
  .catch((err) => {
    console.log(err);
  });

async function cekhari() {
  try {
    const result = await cekHariKerja("minggu");
    console.log(`${result} mari kita kerja`);
  } catch (error) {
    console.log(error);
  }
}
cekhari();
