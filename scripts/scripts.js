function getTimeString(time){
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}


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

// {
//     "category_id": "1003",
//     "video_id": "aaae",
//     "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
//     "title": "Inside Amy Schumer",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
//             "profile_name": "Amy Schumer",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "3.6K",
//         "posted_date": "15147"
//     },
//     "description": "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy."
// }

// display Videos
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos')

    videos.forEach((video) => {
        console.log(video);
        const card = document.createElement("div")
        card.classList = 'card card-compact'
        card.innerHTML = `
        <figure class="h-[200px] relative">
            <img
            src=${video.thumbnail}
            alt="Shoes" 
            class='h-full w-full object-cover' />
            ${
                video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black rounded text-white px-2">${getTimeString(video.others.posted_date)}</span>`
            }

        </figure>
        <div class="px-0 py-2 flex gap-3">
            <div>
                <img 
                    src = ${video.authors[0].profile_picture}
                    class = "h-10 w-10 object-cover rounded-full"
                />
            </div>
            
            <div class="">
                <div>
                    <h2 class="font-bold">${video.title}</h2>
                    <div class='flex gap-2 items-center'>
                        <p>${video.authors[0].profile_name}</p>
                        ${video.authors[0].verified === true ? `<img 
                        src='https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png' 
                        class ='w-5'` : ""}
                    </div>
                </div>
                <p>If a dog chews shoe choose?</p>
            </div>
            
        </div>
        `;
        videosContainer.append(card)
    })

   
}


loadCategories();
loadVideos();