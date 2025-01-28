const arr=[{
    name:""
},
{
    name:""
}
,{
    name:""
}]

const chefCard=document.querySelector("team-member");

const chefRow=document.querySelector(".team-members");
arr.forEach((x)=>{
    chefRow.appendChild(chefCard);
})