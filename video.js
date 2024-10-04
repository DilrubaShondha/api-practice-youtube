
function getTimeString(time) {
    //get Hour and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour  ${minute} minute ${remainingSecond} second ago`;
  }
//fetch load and show data
//create load categories
const loadCategories = () => {
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatergories(data.categories))
    .catch((error) => console.log(error))
};
const loadVideos = () => {
    fetch ("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
};
const loadCategoryVideos = (id) =>{
    fetch (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error))
};
//create display categories
const displayCatergories = (categories) =>{
    const categoryContainer =document.getElementById('categories');
    categories.forEach((item) => {
    // console.log(item)
 //create a button
 const buttonContainer = document.createElement("div");
 buttonContainer.innerHTML = `<button id ="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>`;
 //add button
 categoryContainer.append(buttonContainer);
});
};

const displayVideos = (videos) =>{
    const videoContainer =document.getElementById('videos');
    videoContainer.innerHTML = "";
    videos.forEach((video) => {
 const card =document.createElement("div")
 card.classList = 'card card-compact';
 card.innerHTML=
                `
                  <figure class="h-[200px] relative">
                    <img src=${video.thumbnail} class="w-full h-full object-cover"/>
                    ${video.others.posted_date?.length == 0 ? " " :
                    `<span class="absolute right-2 bottom-2 p-1 bg-black text-xs text-white rounded">${getTimeString(video.others.posted_date)}</span>`}
                    
                  </figure>
                    <div class="px-0 py-3 flex gap-2">
                       <div> <img class=" h-10 w-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" />
                       </div>
                       <div> 
                          <h2 class="font-bold">${video.title}</h2>
                          <div class="flex items-center gap-2">
                              <p class="text-gray-400">${video.authors[0].profile_name}</p>
                              ${video.authors[0].verified === true ? '<img class="w-5" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/verify-8190120-6564475.png?f=webp&w=256"/>'
                                : ""}
                          </div>

                        </div>
                    </div>

                `;
videoContainer.append(card);
});
};

loadCategories();
loadVideos();