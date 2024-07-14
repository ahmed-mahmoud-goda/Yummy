import Food from "./food.js";

let food = new Food;

class Search{
    async showInput(){
        document.getElementById("inputs").classList.remove("d-none");
        document.getElementById("meals").innerHTML="";
        $("#inputName").on("keyup",(event)=>{
            this.showByName(event.target.value)
        })
        $("#inputFirst").on("keyup",(event)=>{
            this.showByLetter(event.target.value)
        })
    }
    async showByName(name){
        $(".loading").show()
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const result = await response.json();
        food.showFood(result,999);
        $(".loading").fadeOut(500)
    }
    async showByLetter(letter){
        $(".loading").show()
    if(document.getElementById("inputFirst").value!=""){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const result = await response.json();
        console.log(result);
        food.showFood(result,999);
    }
        $(".loading").fadeOut(500)
    }
    
}
export default Search;