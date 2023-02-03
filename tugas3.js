//No 1
let dataMhs = ['alif','diko','iqbal','hose','shania','rizal','aldho','verdy','diko','dhimas','kamal'];

const showDatas = async (search , callback) => {
    try {
        if (typeof search !== 'string') throw 'Input salah, isi data hanya berisi huruf';
        let showDatas = await searchName(search);
    }catch(err){
        console.log(`Error : ${err}`);
    }
}

const searchName = (search) => {
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            let dataTemp = [];
            for (let i = 0; i < dataMhs.length; i++){
                if(dataMhs[i].toLowerCase().includes(search)){
                    dataTemp.push(` ${dataMhs[i]} `);
                }
            }
            if(dataTemp.length > 0){
                resolve(`${dataTemp }`);
            }else{
                reject(`Output tidak ditemukan`);
            }
        },2000)
    })
    .then((result) => {
        console.log(`Output : ${result}`);
    })
    .catch((error) => {
        console.log(`Rejected : ${error}`);
    })
}
showDatas('ssa',searchName)
searchName('ss')

//No 2
const filterArray = (nF , nE, dataArray) => {
  return new Promise((resolve , reject) => {
      setTimeout(()=>{
          // let sortNum = dataArray.sort((a,b) => a-b);
          let filter = dataArray.filter(num => {
              return num < nE && num > nF;
          })
          if(filter.length > 0){
              resolve(filter);
          }else{
              reject(`Error : data tidak ditemukan`)
          }
      },1000)
  })
  .then((result) => {
      console.log(`Output : ${result} `);
  })
  .catch((error) => {
      console.log(error);
  })
  }


const showData = async (nF , nE, dataArray, callback) => {
  try {
      if (typeof nF !== 'number' || typeof nE !== 'number') throw `Data awal/akhir bukan angka`;
      let showNum = filterArray(nF, nE, dataArray);

  }catch(err){
      console.log(err);
  }
}
// showData(11,10,[1,2,3,4,5,6],filterArray);
filterArray(2,10,[1,2,3,4,5,6]);
