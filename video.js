console.log('video added')
//fetch load and show data
//create load categories
const loadCategories = () => {
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatergories(data.categories))
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

loadCategories();