var count = 0;
function changeCount(num){
    count += num;
    document.getElementById("count").innerHTML = count;}

const music = document.getElementById("music")

function playmusic() {
    if (music.paused) {

        music.play()
    }
    else {
        music.pause()

    }


}