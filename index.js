function RD_image(){
url="https://dog.ceo/api/breeds/image/random";
fetch(url)
.then(function(response){
    return response.json();
    })
    .then(function(data){
      let image_url=data.message
      document.getElementById("image").src =image_url;
    })
    .catch(function(error){
     console.log("Error:"+error)
    })

}