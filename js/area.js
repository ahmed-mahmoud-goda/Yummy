import Food from "./food.js";

let food = new Food;

class Area {
    async getAreas() {
        document.getElementById("inputs").classList.add("d-none");
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const result = await response.json();
        this.showAreas(result);
    }
    async showAreas(result) {
        let show = document.getElementById("meals");
        let foods = "";
        for (let i = 0; i < result["meals"].length; i++) {
            foods += `
            <div class="col-md-3 col-12 mb-4 text-center text-white countries" id="${result["meals"][i]["strArea"]}">
            <div class="country">    
            <i class="fa-solid fa-4x fa-house-laptop"></i>
                <h3>${result["meals"][i]["strArea"]}</h3>
                </div>
            </div>
            `
        }

        show.innerHTML = foods;
        const cards = document.querySelectorAll('.countries');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', async function () {
                $(".loading").show();
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.id}`);
                const result = await response.json();
                food.showFood(result,20);
                $(".loading").fadeOut(500);
            }
            )
        }
    }
}
export default Area;