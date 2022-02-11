function showMenu () {
    let x =document.getElementById("nav-bar-mediaQ");
    if (x.style.display=== "block") {
        x.style.display= "none";
    } else {
        x.style.display= "block";
    }
}

function searchBtn () {
    let input= document.getElementById("search-input").value;
    input= input.toLowerCase();
    let x= document.getElementsByClassName("text-content");

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display= "none";
        } else {
            x[i].style.display= "list-item"
        }
        
    }
    /*
    let pee= document.getElementsByTagName(p);
    pee= pee.innerHTML;
   console.log(pee);
   */
}


/*
function iconChange() {
let navBtn= document.getElementById("nav-bars");
if(navBtn.style.display === "block") {
    navBtn.style.display = "none"
}else{
    navBtn.style.display ="block";
}
}

function iconToggle(navBtn) {
    navBtn.classList.toggle("fa-minus-circle");
}

const geek= document.getElementById("geeks");

let arr= [12,3,4,6];
let args= [3,12,7,10];
*/
/*
function gecko(arr, args) {   
    let newAr= []
    let ar= arr.sort((a,b)=> a-b);
    //console.log(ar);
    let arg= args.sort((a,b)=> a-b);
    console.log(arg);

    ar.filter(val=> {arg.includes(val) ? true : false;
    
    })

    //return newAr= (ar.length !== arg.length) ? true : false;

}
console.log(gecko(arr, args)); */

let arr1= [ 
    [21, "Garri"],
    [5, "Beans"],
    [9, "Rice"],
    [2, "Oil"],
    [18, "Groundnut"],
    [13, "Cocoa"]
];

let arr2= [
    [1, "Garri"],
    [50, "Beans"],
    [4, "Rice"],
    [6, "Pepper"],
    [5, "Groundnut"],
    [1, "Cocoa"]
];

function upDateInv(arr1, arr2) {
     let newInv= [];
    let currInv= []; 
    let index;

    arr1.forEach(function (item1) {
        arr2.forEach(function (item2) {
           if (item1[1] === item2[1]) {
               item1[0] = item1[0] + item2[0];
           }
        });
    }); 
  
    arr1.forEach(item=> {
        newInv.push(item[1]);
    });

    arr2.forEach(item=> {
        currInv.push(item[1]);
    });

    newInv.forEach(item=> {
        if (currInv.indexOf(item) === -1) {
            index=  newInv.indexOf(item);
            arr1.push(arr2[index]);
        }
    });

    arr1.sort((a, b)=> {
       return  a[1] > b[1] ? 1 : -1;
    });  
    return arr1; 
}

console.log(upDateInv(arr1, arr2));


let ar1= [ 
    [21, "Garri"],
    [5, "Beans"],
    [9, "Rice"],
    [2, "Oil"],
    [18, "Groundnut"],
    [13, "Cocoa"]
];

let ar2= [
    [1, "Garri"],
    [50, "Beans"],
    [4, "Rice"],
    [6, "Pepper"],
    [5, "Groundnut"],
    [1, "Cocoa"]
];

function upDate(ar1, ar2) {
    
    let ind;

    ar1.forEach(item=>{
        ar2.forEach(item2=>{
            if (item[1] === item2[1]) {
                item[0] = item[0] + item2[0]
            }
        })
    });



    ar1.sort((a, b)=> {
        return a[1] > b[1] ? 1 : -1 
    });

    /*
    ar1.forEach(item=> {
        if (ar2.indexOf(item) == -1) {
            ar1.push(ar2[item])
        }
    }) */

    return ar1;
}

console.log(upDate(ar1, ar2));



let permute= [1, 2, 3];
console.log(permute);