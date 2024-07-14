import Food from "./food.js";

let food = new Food;

class Categories {
    async getCategory() {
        document.getElementById("inputs").classList.add("d-none");
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const result = await response.json();
        this.showCategory(result);
    }
    async showCategory(result) {
        let show = document.getElementById("meals");
        let foods = "";
        console.log(result)
        for (let i = 0; i < result["categories"].length; i++) {
            foods += `
            <div class="col-md-3 col-12 mb-4 text-center category food text-black" id="${result["categories"][i]["strCategory"]}">
                <div class="position-relative overflow-hidden">
                    <img class="w-100 rounded-2 food" src="${result["categories"][i]["strCategoryThumb"]}" alt="food">
                    <div class="cover rounded-2 position-absolute p-1 start-0 end-0">
                        <h2>${result["categories"][i]["strCategory"]}</h2>
                        <p>${result["categories"][i]["strCategoryDescription"].split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
            </div>
            `
        }

        show.innerHTML = foods;
        const cards = document.querySelectorAll('.category');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', async function () {
                $(".loading").show()
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.id}`);
                const result = await response.json();
                food.showFood(result,20);
                $(".loading").fadeOut(500)
            }
            )
        }
    }
}
export default Categories;