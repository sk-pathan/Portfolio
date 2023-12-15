const link=document.getElementsByClassName("under")
const content=document.getElementsByClassName("skill")

const onClick=(name)=>{
    for(iteam of link){
        iteam.classList.remove("active")
    }
    for(y of content){
        y.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
    document.getElementById(name).classList.add('active')
}