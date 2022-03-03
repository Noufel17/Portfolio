function changeStyle(e){
    var links=document.getElementsByClassName("links");
    for(var i = 0, len = links.length; i < len; i++){
        if(links[i].classList.contains("when_in_section")){
            links[i].classList.remove("when_in_section");
        }
    }
    e.classList.add("when_in_section");
}
const sections=document.getElementsByTagName("section");
const navBarLinks=document.getElementsByClassName("links");
window.onscroll=() =>{
    var currentSectionId="";
    for(var i = 0, len = sections.length; i < len; i++){
        const sectionTopLimit=sections[i].offsetTop;
        if(scrollY >= sectionTopLimit - 80){
            currentSectionId = sections[i].getAttribute("id");
        }
    }
    for(var i = 0, len = navBarLinks.length; i < len; i++){
        navBarLinks[i].classList.remove("when_in_section");
        switch(currentSectionId){
            case "sectionHome":
                document.getElementById("link1").classList.add("when_in_section");
                break;
            case "sectionAbout":
                document.getElementById("link2").classList.add("when_in_section");
                break;
            case "sectionSkills":
                document.getElementById("link3").classList.add("when_in_section");
                break;
            case "sectionProjects":
                document.getElementById("link4").classList.add("when_in_section");
                break;
            case "sectionContact":
                document.getElementById("link5").classList.add("when_in_section");
                break;
        }   
    }
}

