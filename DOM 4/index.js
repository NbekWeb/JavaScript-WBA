//! Event bubbling 
// biror-bir event sodir bo'lganda,bu event birinchi navbatda elementning 
//o'zi tomonidan bajariladi.Keyin DOM daraxtining parents elementlar orqali 
//tarqaladi va ularning har birida o'sha hodisa sodir bo'ladi

//? stopImmediatePropagation
// eventni 1-marta bajarilishi bilan to'xtatadi va parent elementlariga eventni o'tkazmaydi

// let parent = document.querySelector('.parent'),
//     child = document.querySelector('.child'),
//     grChild = document.querySelector('.grchild');

// grChild.onclick = (e) => {
//     console.log('GrChild clicked');
//     e.stopImmediatePropagation();
// };

// child.onclick = (e) => {
//     console.log('Child clicked');
//     e.stopImmediatePropagation();
// };

// parent.onclick = () => {
//     console.log('parent clicked');
// };


//? Input

// let inp=document.querySelector('input');

// inp.addEventListener('input',(e)=>{
// console.log(e.target.value);
// });


let select=document.querySelector('select');

select.addEventListener('change',(e)=>{
    console.log(e.target.value);})







