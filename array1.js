// Write a program to print all the numbers from the given array using a loop.
// L = {23, 45, 32, 25, 46,33, 71, 90}



// const input =require('readline-sync');
// let N= input.questionInt("Enter a number= ");
// // let k=input.questionInt('enter a element')
// let a=[]
// let idx=0

//     while(idx<N){
//         if(a[idx]==idx){
//             console.log("all equal");
//         }else Write a JavaScript program that takes three integers as input and categorizes them based on their properties:

//         If all three numbers are equal, print "All Equal".
//         If two numbers are equal, print "Two Equal".
//         If all three numbers are different, determine the largest among them:
//         If the largest number is even, print "Largest Even".
//         If the largest number is odd, print "Largest Odd".
        
//         {
//             console.log("all are not equal");
//         }
//         idx++;
//     }
    
    
    // Write a program to create an array of natural numbers till 20 and print it.

// const input = require('readline-sync');
// let N= input.questionInt("Enter a number= ");
// let a=[]
// let idx=0
//     while (idx<N)
//     {
//         let k=input.questionInt('enter a element')
//         a[idx]=k
//         idx++
//     }console.log(a);
// const input=require('readline sync')
// let N= input.questionInt("Enter a number= ");
// let a=[ 4,5,3,8,5];
// for (let i=0;i>0;i--)

//     {
//         console.log(a[i]);
//     }



// Write a program to reverse the array and print the reversed array.
    


// const input = require('readline-sync');
// let N= input.questionInt("Enter a number= ");
// let a=[]
// let idx=0
//     while (idx<N)
//     {
//         let k=input.questionInt('enter a element')
//         a[idx]=N-idx
//         idx++
        
//     }let j=0;
//     {
//         while (j<N)
//         console.log(a);
//         j++;
//         "\N"
//     }

// const input = require("readline-sync");

// let n = input.questionInt("Enter the length of array:");
// let m = input.questionInt("Enter the length of array:");


// let a = [];
// let b = [];
// let d=[]
// for(let i=0; i<n; i++)
// {
//     a[i] = input.questionInt(`enter the  aaray element :`);
// }

// for(let j=0; j<m; j++)
// {
//     b[j] = input.questionInt(`enter the secand aaray element : `);
// }
// let i=0;
// let j=0;
// let k=0;
// while(k<n+m)
// {
//     while(i<n)
//     {
//         while(j<m)
//         {
//             if(a[i]<b[j])
//             {
//                 console.log(a[i])
//                 i++;
//                 k++;
//             }
//             else
//             {
//                 console.log(b[j])
//                 j++;
//                 k++;
//             }
//         }
//     }
// }


// const input=require("readline-sync")
// let n=input.questionInt("enter the size of array:")
// let arr=[];
// let i=0;
// while(i<n){
//     // let k =input.questionInt("enter a element:")
//     arr[i]=input.questionInt("Enter a value ")
//     arr.push(i);
//     i++;
// }console.log(arr)


// const input=require("readline-sync")
// let n=input.questionInt("enter a number")

// arr=[];
// let i=0;
// while(i<n){
//    let t=input.questionInt("enter a element") 
//    arr[i]=t;
//    i++;
// }
// i=0;
// while(i<n)
// {
//     j=i+1;
//     let c=1;
//     while(j<n)
//     {
//         if(arr[i]==arr[j])
//         {
//           c=c+1;
//           k=j;
//           while(k<n-1)
//           {
//             arr[k]=arr[k+1];
//             k++;
//           }
//              n=n-1;
             
//         }
//         c=c;
//         j++;
//     }
//     console.log(arr[i],"-",c)
// i++;
// }



// const input=require("readline-sync")
// let n=input.questionInt("enter the size of array:")
// let arr=[];
// let i=0;
// let c = 1;
// while(i<n){
// // let k=
// arr[i]=input.questionInt("enter a number: ");
// i++;
// }
// i=0;
// while(i<n){
   
//     j=i+1;
//     while(j<n){
//         if
//         (arr[i]==arr[j]){
//             c=c+1;
//             r=j;
//         while(r<n-1){
//             arr[r]=arr[r+1];
//             r+=1;
//         }
//         n=n-1;
//     }
// j++;
// }
//   if(c>1)  
//   {
//     console.log(arr[i]," is duplicates")

//   } else {
//     // console.log(arr[i],'is no duplicate number ');
//   }
//     i++;
//     c=1;
// }


// const input=require("readline-sync")
// let n =input.questionInt("enter a element")
// let i=0;
// // let j=1;
// let arr=[];
// while(i<n){
//     let k = input.questionInt("enter a number")
//     arr[i]=k;
//     i++;
//  }
// // console.log("ORG",arr);
// i=0;
// while(i<n){
//     console.log("<".repeat(arr[i]));
//     i++;
// }



// const input =require('readline-sync');
// let n= input.questionInt("enter a number ");
// let i=0;
// let a=[];
// let m=0
// let b=[];

// while(i<n)
// {
//     let k=input.questionInt("enter a number ")
//     a[i]=k;
//     i++
// }
// console.log(a);
//  i=0;

// while(i<n)
// {
//    // console.log(i);
//     if
//      (a[i]==0)
//     {    
//         b[m] = a[i];
//        // console.log(b[m]);
//         m++

//     }
//     i++
// } 
// i=0;
// while(i<n)

// {


//     if(a[i]!=0)
//     {
//         b[m]=a[i];
//         m++
        
//     } 
    
// i++
    
// }
// console.log(b);



// let arrey1 = [1,3,5,7];
// let arrey2 = [2,4,6,8];
// let mergedArr = [  ];
// let i = 0; j = 0;
// while(i<arrey1.length  && j < arrey2.length){
//     if(arrey1[i]<arrey2[j]){
//         mergedArr.push(arrey1[i]);
//     i++;
//     }else{
//         if(mergedArr.push(arrey2[j])){
//              j++;
//         }
//     }
// }
// while (i<arrey1.length){
//     mergedArr.push( arrey1[i]);
//     i++;
// }
// while(j<arrey2.length){
//     mergedArr.push (arrey2[j]);
//      j++;
// }
// console.log(mergedArr);
