
var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80,  54, 73, 63, 95, 49];

function avarage(grades){
var total = 0;
var avg = 0;
    for (var i=0; i<grades.length; i++){
    total += grades[i];
    }
    avg = total/grades.length;
    
    console.log("média");
    return Math.round(avg);
    
}
console.log("média");

console.log(avarage(scores));
console.log(avarage(scores2));