import Details from "./detail.js";

let data = new Details;

class Food {
    async getFood() {
        $(".loading").show()
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

        const result = await response.json();
        this.showFood(result,25);
        $(".loading").fadeOut(500)
    }

    showFood(result,maxmeals) {

        let show = document.getElementById("meals");
        
        if(result["meals"]!=null){
            let foods = "";
        let i = 0;
        while((i<result["meals"].length) &&(i<maxmeals)){
            foods += `
            <div class="col-md-3 col-12 pb-4 food" id="${result["meals"][i]["strMeal"]}">
                <div class="position-relative overflow-hidden">
                    <img class="w-100 rounded-2 food" src="${result["meals"][i]["strMealThumb"]}" alt="food">
                    <div class="cover rounded-2 position-absolute d-flex p-1 align-items-center start-0 end-0">
                        <h2>${result["meals"][i]["strMeal"]}</h2>
                    </div>
                </div>
            </div>
            `
            i++;
        }
        
        show.innerHTML = foods;

        const cards = document.querySelectorAll('.food');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function () {
                document.getElementById("inputs").classList.add("d-none")
                data.getData(this.id);
            }
            )
        }
    }
    else{
        show.innerHTML = "";
    }
}
}
export default Food