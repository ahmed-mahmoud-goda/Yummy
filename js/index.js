/// <reference types="../@types/jquery"/>
import Food from "./food.js";
import Search from "./search.js";
import Area from "./area.js";
import Ingredient from "./ingredient.js";
import Categories from "./categories.js";
import Contact from "./contact.js";

function openNav() {
    $(".navigation").animate({ left: "0%" }, 500);
    $("#show").addClass("fa-x");
    $(".navigation").addClass("opened");
    $(".navigation").removeClass("closed");
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }

}
function closeNav() {
    let width = $("div.links").innerWidth()
    $(".navigation").animate({ left: -width }, 500)
    $("#show").removeClass("fa-x");
    $(".navigation").removeClass("opened");
    $(".navigation").addClass("closed");
    $("div.links li").animate({
        top: 300
    }, 500)


}


let food = new Food;
let search = new Search;
let area = new Area;
let ingredient = new Ingredient;
let category = new Categories;
let contact = new Contact;


closeNav();
await food.getFood(25);
$(".loading").fadeOut(500);
$(".loading").removeClass("z-3");
$(".loading").addClass("z-1");


$(".fa-bars").on("click", function () {
    if ($(".navigation").hasClass("opened") == true) {
        closeNav();
    }
    else {
        openNav();
    }
})
$("#search").on("click", function () {
    closeNav();
    search.showInput();
})
$("#categories").on("click", async function () {
    closeNav();
    $(".loading").show()
    await category.getCategory();
    $(".loading").fadeOut(500);
})
$("#area").on("click",async function () {
    closeNav();
    $(".loading").show()
    await area.getAreas();
    $(".loading").fadeOut(500);
})
$("#ingredients").on("click",async function () {
    closeNav();
    $(".loading").show()
    await ingredient.getIngredient();
    $(".loading").fadeOut(500);
})
$("#contact").on("click", function () {
    closeNav();
    contact.showContact();
})



