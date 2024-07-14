import Food from "./food.js";

let food = new Food;

class Ingredient{
    async getIngredient(){
        $(".loading").show();
        document.getElementById("inputs").classList.add("d-none");
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const result = await response.json();
        this.showIngredient(result);
        $(".loading").fadeOut(500);
    }
    async showIngredient(result){
        let show = document.getElementById("meals");
        let foods = "";
        for (let i = 0;i<20;i++) {
            foods += `
            <div class="col-md-3 col-12 mb-4 text-center ingredient text-white" id="${result["meals"][i]["strIngredient"]}">
                <i class="fa-solid fa-4x fa-drumstick-bite"></i>
                <h3>${result["meals"][i]["strIngredient"]}</h3>
                <p>${result["meals"][i]["strDescription"].split(" ").slice(0,20).join(" ")}</p>
            </div>
            `
        }
        
        show.innerHTML = foods;
        const cards = document.querySelectorAll('.ingredient');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', async function() {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.id}`);
                const result = await response.json();
                food.showFood(result,20);
            }
            )
        }
    }
}
export default Ingredient;