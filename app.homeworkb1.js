//Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn:
//Vật lý, Hóa học, và Sinh học. Sau đó hiển thị điểm trung bình và tổng của những điểm này.

let vatLy;
let hoaHoc;
let sinhHoc;
let diemTrungBinh;
vatLy = prompt("Nhập điểm môn vật lý:");
console.log(`Điểm môn vật lý là: ${vatLy}`);
hoaHoc = prompt("Nhập điểm môn hóa học:");
console.log(`Điểm môn hóa học là: ${hoaHoc}`);
sinhHoc = prompt("Nhập điểm môn sinh học:");
console.log(`Điểm môn sinh học là: ${sinhHoc}`);
diemTrungBinh = (Number(vatLy)+Number(hoaHoc)+Number(sinhHoc))/3;
console.log(`Điểm trung bình là: ${diemTrungBinh}`);

//=========================================================
//Bài 2: Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).
//[Hướng dẫn: C/5 = (F-32)/9]

let cel;
let fah;
cel = prompt("Nhập nhiệt độ Celsius:");
fah=(9*cel/5)+32;
console.log(`Nhiệt độ Fahrenheit là: ${fah}`);

//=========================================================
//Bài 3: Viết chương trình tính diện tích hình tròn

let r;
let s;
r=prompt("Nhập bán kính đường tròn:");
s = Math.PI*r*r;
console.log(`Diện tích hình tròn có bán kính ${r} là: ${s}`);

//=========================================================
//Bài 4: Viết chương trình chu vi hình tròn

let r;
let c;
r=prompt("Nhập bán kính đường tròn:");
c = Math.PI*r*2;
console.log(`Chu vi hình tròn có bán kính ${r} là: ${c}`);
