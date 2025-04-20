const nextButton =  document.querySelector('.next-btn')
const video = document.querySelector('.herovideo')

const movieList=['videos/minecraft clip 1.mp4', 'videos/minecraft clip 3.mp4', 'videos/minecraft clip 4.mp4','videos/minecraft clip 5.mp4','videos/Minecraft clip 6.mp4']

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src =movieList[index]

    if (index === 3){
        index = -1;
    }
})