const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}


const displayCategories = (categories) => {
    categories.forEach(item => {
        console.log(item);
        const categoryContainer = document.getElementById('category')

        // create a  button
        const button = document.createElement("button")
        button.classList = "btn"
        button.innerText = item.category;

        // add button to category container
        categoryContainer.append(button)
    })
}

// videos
// load videos
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

// display Videos
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos')

    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div")
        card.classList = 'card card-compact'
        card.innerHTML = `
        <figure class="h-[200px]">
            <img
            src=${video.thumbnail}
            alt="Shoes" 
            class='h-full w-full object-cover' />
        </figure>
        <div class="">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        videosContainer.append(card)
    })

   
}


loadCategories();
loadVideos();