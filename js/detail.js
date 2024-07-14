
class Details {

    async getData(foodName) {
        $(".loading").show()
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
        const result = await response.json();
        await this.showData(result);
        $(".loading").fadeOut(500)
    }

    async showData(result) {
        let container = document.getElementById("meals");
        let recipe = "";
        let tags = "";
        let alltags = [];
        for (let i = 1; i <= 20; i++) {
            if (result["meals"]["0"][`strIngredient${i}`] == "") {
                break;
            }
            else {
                recipe += `
                <div class="alert alert-info m-2 p-1">${result["meals"]["0"][`strMeasure${i}`]} ${result["meals"]["0"][`strIngredient${i}`]}</div>
                `
            }
        }
        if(result["meals"]["0"]["strTags"]!=null){
        alltags = result["meals"]["0"]["strTags"].split(',');
        }
        for(let i = 0;i<alltags.length;i++){
            tags +=`
            <div class="alert alert-danger mx-2 mt-2 mb-2 p-1">${alltags[i]}</div>
            `
        }

        container.innerHTML = `
            <div class="col-md-4 mb-4">
                <img src="${result["meals"]["0"]["strMealThumb"]}" class="w-100  rounded-2" alt="game">
                <h2 class="text-white">${result["meals"]["0"]["strMeal"]}</h2>
            </div>
            <div class="col-md-8">
                <h2 class="text-white">Instructions</h2>
                <p class="text-white mb-3">${result["meals"]["0"]["strInstructions"]}</p>
                <h3 class="text-white "><span class="fw-bold">Area :</span> ${result["meals"]["0"]["strArea"]}</h3>
                <h3 class="text-white "><span class="fw-bold">Category :</span> ${result["meals"]["0"]["strCategory"]}</h3>
                <h3 class="text-white ">Recipes :</h3>
                <div class="mt-2 d-flex flex-wrap">
                    ${recipe}
                </div>
                <h3 class="text-white mt-3 mb-2">Tags :</h3>
                <div class="mt-2 d-flex flex-wrap">
                    ${tags}
                </div>
                <button type="button" class="btn btn-success mt-3" id="source">Source</button>
                <button type="button" class="btn btn-danger mt-3" id="youtube">Youtube</button>
            </div>

        `
        let sourceButton = document.getElementById("source");
        let youtube = document.getElementById("youtube");
        sourceButton.addEventListener("click", function () {
            window.open(result["meals"]["0"]["strSource"]);
        })
        youtube.addEventListener("click", function () {
            window.open(result["meals"]["0"]["strYoutube"]);
        })


    }
}
export default Details;