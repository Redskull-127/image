const api = "https://api.pexels.com/v1/search?query=";
const textarea = document.getElementById("exampleFormControlTextarea1");
const gobtn = document.getElementById("gobtn");
gobtn.addEventListener('click', function() {
    console.log(textarea.value)
    const final_api = api+textarea.value+"&per_page=1";
    console.log(final_api);
    function sned(){
        fetch(final_api).then(function(res){
            return res.json();
        }).then(function(json){
            console.log(json.photos[0].src.original)
            const img_ut = json.photos[0].src.original;
            const imgs = document.getElementById("imgs");
            let data = "<img src="+img_ut+">";
            imgs.innerHTML = data
        })
    }
    sned();
})