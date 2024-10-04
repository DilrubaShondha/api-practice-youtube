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
//create display categories
const displayCatergories = (categories) =>{
    const categoryContainer =document.getElementById('categories');
    categories.forEach((item) => {
    // console.log(item)
 //create a button
 const button = document.createElement("button");
 button.classList = "btn"
 button.innerText = item.category;
 //add button
 categoryContainer.append(button);
});
};
//create display videos
const cardDemo = {
        "category_id": "1003",
        "video_id": "aaaf",
        "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
        "title": "Sticks & Stones",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
                "profile_name": "Dave Chappelle",
                "verified": true
            }
        ],
        "others": {
            "views": "113K",
            "posted_date": ""
        },
        "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
}
const displayVideos = (videos) =>{
    const videoContainer =document.getElementById('videos');
    videos.forEach((video) => {
 console.log(video)
 const card =document.createElement("div")
 card.classList = 'card card-compact';
 card.innerHTML=
                `
                  <figure class="h-[200px] relative">
                    <img src=${video.thumbnail} class="w-full h-full object-cover"/>
                    <span class="absolute right-2 bottom-2 p-1 bg-black text-white rounded">${video.others.posted_date}</span>
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