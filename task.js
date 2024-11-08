//WAP to print even sum is more or odd sum is more 
//input: 2763
//output: odd sum is more
num=prompt("enter a number:")
evensum=0
oddsum=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0)
    evensum+=+num[i]
    
    else
    oddsum+=+num[i]
}
console.log("sum of even numbers in "+num+" is:"+evensum)
console.log("sum of odd numbers in "+num+" is:"+oddsum)
if
   ( evensum>oddsum)
   console.log("evensum is more")
   else
   console.log("oddsum is more")

// WAP to print even numbers are more or odd numbers are more
// input: 5332
// output: Odd numbers are more
// input: 8176
// output: Both are equal
num=prompt("enter a number:")
even=0;
odd=0;
for(i=0;i<num.length;i++){
    if(num[i]%2==0)
        even++
    else
     odd++
}
if(even>odd)
    console.log("even numbers are more")
else if(odd>even)
    console.log("odd numbers are more")
else
console.log("even and odd numbers are equal")




