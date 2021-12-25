//locareviews data
const reviews=[
  {
    id:1,
    name:"susan smith",
    job:"web developer",
    img:"",
    text:"Hi I am Web Developer",
  },
            {
              id:2,
              name:"Nischal Shrestha",
              job:"web developer",
              img:"",
              text:"Hi!! I am Kathmandu based  self taught Web Developer.",
            },
                  {
                    id:3,
                    name:"Nisusan smith",
                    job:"ux designer",
                    img:"",
                    text:"Hi I am UX Designer",
                  },
                        {
                          id:4,
                          name:"graysan smith",
                          job:"developer",
                          img:"",
                          text:"Hi I am developer",
                        },
                              {
                                id:5,
                                name:"smith steve",
                                job:"lead engineer",
                                img:"",
                                text:"Hi I am Lead Engineer.",
                              },
];
//select items
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set starting item
let currentItem=0;


//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(); 
});

//show person based on item
function showPerson(){
    const item = reviews[currentItem];
    // img.src = item.img;

    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


//show next person

nextBtn.addEventListener('click',function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem=0;
  }
  showPerson();
});

//show previous person
prevBtn.addEventListener('click',function(){
  currentItem--;
  if(currentItem<0){
    currentItem= reviews.length-1;
  }
  showPerson();
});

//show random person
randomBtn.addEventListener('click', function(){
  currentItem= Math.floor(Math.random()*reviews.length);
  showPerson();
})

