//palindrom

var a="madam"
var l=a.length;
console.log(check(a));
function check(a)
{
for(let i=0;i<l/2;i++)
{
    if(a[i]!=a[l-i-1])
    {
    return "not a palindrom";
    break;
    }  
}
return "palindrom";
}


//top maximum two elements

var a=[1,2,5,23,46,2,33234,56],temp;
for(let i=0;i<2;i++)
{
    if(a[i]>a[i+1])
    {
        temp=a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
    }
}
console.log(a[a.length-1],a[a.length-2])

//amstrong

var a=371,b=a;
var l=a.toString().length;
var count=0;
for(let i=0;i<l;i++)
{
    count+=Math.pow(Math.floor(a%10),l);
    a/=10;
}
if(count==b)
console.log("amstrong")
else
console.log("not amstrong")


//missing element from 1 to 100

var a=[];
for(let i=1;i<=100;i++)
    a.push(i);
a.splice(50,1)
for(let i=0;i<99;i++)
{
    if(a[i]!=i+1)
    {
        console.log(`element which is not present ${i+1}`)
        break;
    }
}

//permutations of a string

let b="kur",n,str="",count=[];
a=b.split('')
for(let i=0;i<a.length && a[i]!=0;i++){
    n=1;
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            n++;
            a[j]=0;
        }
    }
    str=str+a[i];
    count.push(n);
}

function permutation(str,count,result,level){
    if(level==str.length){
        let p="";
        for(let k=0;k<str.length;k++)
        p=p+result[k];
        console.log(p)
        return;
    }
    for(let i=0;i<str.length;i++){
        if(count[i]==0)
        continue;
        result[level]=str[i];
        count[i]--;
        permutation(str,count,result,level+1);
        count[i]++;
    }
}

let result=[];
permutation(str,count,result,0)

//bubble sort

var a=[1,4,23,4,53,3];
let temp=0;
for(let i=0;i<a.length-1;i++)
{
    for(let j=0;j<a.length-i-1;j++)
    {
        if(a[j]>a[j+1])
        {
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log(a)


//quick sort

let a=[3,6,9,18,15,9,9];
function quicksort(a,s,e){
    if(s>=e)
    return;
    let p=partition(a,s,e)
    quicksort(a,s,p-1);
    quicksort(a,p+1,e)
}
function partition(a,s,e){
    let i=s-1,temp;
    for(let j=s;j<e;j++){
        if(a[j]<=a[e]){
            i++;
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    temp=a[i+1];
    a[i+1]=a[e];
    a[e]=temp;
    return i+1;
}
quicksort(a,0,a.length);
a.shift(a);
console.log(a)


//merge sort

function merge(a,l,r){
    let l1=l.length,l2=r.length,i=0,j=0,k=0;
    while(i<l1 && j<l2){
        if(l[i]<=r[j]){
            a[k]=l[i];
            i++;
        }
        else{
            a[k]=r[j];
            j++;
        }
        k++;
    }
       while(i<l1){
        a[k]=l[i];
        i++;
        k++;
    }
       while(j<l2){
        a[k]=r[j];
        j++;
        k++;
    }
}
function mergesort(a){
    let n=a.length;
    if(n<=1)
    return;
    let mid=parseInt(n/2),l=[],r=[];
    for(let i=0;i<mid;i++){
        l[i]=a[i];
    }
    for(let i=mid;i<n;i++){
        r[i-mid]=a[i];
    }
    mergesort(l);
    mergesort(r);
    merge(a,l,r)
}
var a=[2,4,2,5,2,3,542,25,24];
mergesort(a);
console.log(a);

//selection sort

function selectionSort(a){
    let n=a.length,min,temp;
    for(let i=0;i<n-2;i++){
        min=i;
        for(let j=i+1;j<=n-1;j++){
            if(a[j]<a[min]){
                min=j;
            }
        }
        temp=a[min];
        a[min]=a[i];
        a[i]=temp;
    }
}
let a=[2,4,2,54,5,2,0,24,5];
selectionSort(a);
console.log(a);


function insertionSort(a){
    let n=a.length,val,hole;
    for(let i=1;i<n;i++){
        val=a[i];
        hole=i;
        while(hole>0 && a[hole-1]>val){
            a[hole]=a[hole-1];
            hole=hole-1;
        }
        a[hole]=val;
    }
}
let a=[1,54,23,56,23,3,32];
insertionSort(a);
console.log(a);


//binaraysearch

function binarySearch(a,s,e,x){
    mid=s+(e-s)/2;
    if(s>e)
    return("element not found");
    if(x==a[mid])
    return mid;
    if(a[mid]<x)
    binarySearch(a,s,mid-1,x);
    if(a[mid]>x)
    binarySearch(a,mid+1,e,x)
    return("element not found")
}
let a=[1,2,3,4,5,6,7,8,9];
console.log(binarySearch(a,0,8,10));


//linearsearch

function linearSearch(a,x){
    for(let i=0;i<a.length;i++){
        if(a[i]==x)
        return i;
    }
    return("element not found")
}
let a=[1,2,3,4,5,6,7,8,9];
console.log(linearSearch(a,5));











