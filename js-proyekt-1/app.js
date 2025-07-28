// let eded = Number(prompt("edeedd girin"))
// switch(eded){
//     case 1:
//     console.log("Daxil etdiyiniz ədəd 1-dir.");
//     break;
//     case 2:
//     console.log("Daxiol etdiyiniz eded 2-dri")
//     break;
//     default:
//     console.log("bilmirem");
//     break;

// }


//azdan coxa duzsun bubble 
let ededler = [2,3,4,12,34,56,-6,34,-78,3,-1,0]
for(let i=0;i<ededler.length;i++){
    for(let j=0;j<ededler.length-1;j++){
        if (ededler[j]>ededler[j+1]) {
           let temp = ededler[j];
           ededler[j]= ededler[j+1];
           ededler[j+1]=temp;
        }
    }
}
console.log("massivdeki reqemler azdan coxa duzulur:"+ededler)

// axios.delete('https://northwind.vercel.app/api/suppliers/4')
//   .then(response => {
//     console.log('Uğurla silindi:', response.data);
//   })
//   .catch(error => {
//     console.error('Xəta baş verdi:', error);

//     if (error.response) {
//       console.log('Server cavabı:', error.response.status, error.response.data);
//     } else if (error.request) {
//       console.log('Sorğu göndərildi, cavab alınmadı');
//     } else {
//       console.log('Başqa xəta:', error.message);
//     }
//   });

//coxdan aza duz bubble sort

let arr = [2,3,-4,3.5,89,76,34,2,1,0,-3,45,100,-34]
for(i=0;i<arr.length;i++){
  for(j=0;j<arr.length-1;j++){
if (arr[j+1] > arr[j] ){
  let temp =arr[j+1];
  arr[j+1]=arr[j];
  arr[j]=temp;

}
  }
}
console.log("massivdeki reqemler coxdan aza duzulur:"+arr)


//faktorial hesabla for ile
// hasil=1
// eded = Number(prompt("bir eded daxil edin "))
// for(let i=1;i<=eded;i++){
//  hasil=hasil*i;
// }

// console.log("faktorial:"+ hasil)



//faktorial hesabla rekursiv funksiya ile

function faktorial(n) {
  if(n==0 || n==1) return 1;
  return n*faktorial(n-1)

  
}
console.log(faktorial(5))


// Versiya 2 — ternary ilə daha qısa:
const fak = n=> n<=1 ? 1 : n*(n-1);
console.log(fak(3));


//Fibonacci  rekursiv funksiya ile 

function fibonacci(n) {
  if(n==0)return 0
  if(n==1)return 1
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log("fibonacci 7->"+fibonacci(7))

