var menuBtn = document.getElementById('menu');
var informationField = document.getElementById('infoField');
var closeBtn = document.getElementById('close');
var myProjects = document.getElementById('myprojects');
var btn = document.getElementById('btn');

var website_btn = document.getElementById("websites")
var apps_btn = document.getElementById("apps")

var para_project1 = document.getElementById("project_one_para") 
var heading_project1 = document.getElementById("project_one_heading")  

var para_project2 = document.getElementById("project_two_para") 
var heading_project2 = document.getElementById("project_two_heading")  

var para_project3 = document.getElementById("project_three_para") 
var heading_project3 = document.getElementById("project_three_heading")  

var image_one = document.getElementById("img1") 
var image_two = document.getElementById("img2") 
var image_three = document.getElementById("img3") 

var link1 = document.getElementById("firstlink")
var link2 = document.getElementById("secondlink")
var link3 = document.getElementById("thirdlink")


apps_btn.addEventListener('click', apps_btn_clicked)
website_btn.addEventListener('click', websites_btn_clicked)
menuBtn.addEventListener('click', handleClick);
closeBtn.addEventListener('click', closemenu);
myProjects.addEventListener('click', handleLinks);
btn.addEventListener('click', handleLinks);

function handleClick(){

    if(informationField.classList.contains('active') == false){
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block';
        informationField.style.display = 'flex';
        informationField.classList.add('active');
    } 
}


function closemenu(){
    if (informationField.classList.contains('active') == true){
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none';
        informationField.style.display = 'none';
        informationField.classList.remove('active');
    }

}

function handleLinks(){
    if(informationField.classList.contains('active') == true){
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none';
        informationField.style.display = 'none';
        informationField.classList.remove('active');
    }
}

function apps_btn_clicked(){
    para_project1.textContent = "this is a clone for threads app (with all pages and posts and profils"
    heading_project1.textContent  =  "threads App"
    image_one.src = "images/threadsapp.png"
    link1.setAttribute("href", "https://github.com/liliaazz/threads-clone");

    para_project2.textContent = "this is a movie app with authentication page"
    heading_project2.textContent  =  "movie app"
    image_two.src = "images/movieapp.png"
    link2.setAttribute("href", "https://github.com/liliaazz/movies-app");

    para_project3.textContent = "this is a cake store app for many stores"
    heading_project3.textContent  =  "cake store"
    image_three.src = "images/cakestore.png"
    link3.setAttribute("href", "https://github.com/liliaazz/cakestore-app");

}

function websites_btn_clicked(){
    para_project1.textContent = "A desktop only website for the popular hamoud boualem drinks! "
    heading_project1.textContent  =  "Hamoud Boualem Website"
    image_one.src = "images/webjdid.png"

    para_project2.textContent = "hatch is a website for algerians, it shares about all the amazing opportunities that you can attend for free in algiers or online!"
    heading_project2.textContent  =  "hatch Website"
    image_two.src = "images/hatch.png"

    para_project3.textContent = "an interactive website for music brand !"
    heading_project3.textContent  =  "interactive Website"
    image_three.src = "images/band.jpg"

}
