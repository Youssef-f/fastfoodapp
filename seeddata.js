import mongoose from "mongoose";
import FastFoodMenu from "./models/menus.js";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGO_URL;
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const testData = [
  {
    fastFoodName: "McDonald's",
    menus: [
      {
        title: "Menu Triple Cheese",
        image:
          "https://www.mcdonalds.ma/sites/default/files/triple-cheese-big.png",
        price: 65,
        components: ["Oignons", "3cheeses", "Beef", "Pickles", "Ketchup"],
      },
      {
        title: "Menu Chicken Mythic",
        image:
          "https://www.mcdonalds.ma/sites/default/files/chicken_mythic_421x316_2_0_0.png",
        price: 70,
        components: ["Tomate", "Salade", "Chicken", "Sauce Special", "Cheese"],
      },
      {
        title: "Menu Filet O Fish",
        image:
          "https://www.mcdonalds.ma/sites/default/files/icone_filetaufiche_0.png",
        price: 55,
        components: ["Fish", "Mayo", "Cheese"],
      },
      {
        title: "Menu McChicken",
        image:
          "https://www.mcdonalds.ma/sites/default/files/icone_mc-chicken_0.png",
        price: 62,
        components: ["Mayo", "Salade", "Chicken"],
      },
      {
        title: "Menu Royal Cheese",
        image:
          "https://www.mcdonalds.ma/sites/default/files/royal_cheese_icone_0.png",
        price: 69,
        components: ["Oignons", "Pickles", "Beef", "Cheese", "Ketchup"],
      },
    ],
  },
  {
    fastFoodName: "Burger King",
    menus: [
      {
        title: "Menu Double Whopper",
        image:
          "https://cdn.getsolo.io/164968035962541fe7e4b76_500x500%20Double%20Whopper%20Cheese%20%20menu.png",
        price: 67,
        components: [
          "Oignons",
          "cheese",
          "Beef",
          "Pickles",
          "Ketchup",
          "Tomate",
        ],
      },
      {
        title: "Menu Chicken Crispy Deluxe",
        image:
          "https://cdn.getsolo.io/16988209126541f330dfd4d_Menu-Chicken-Crispy-Deluxe-500x500%20(1)%20Medium.jpeg",
        price: 68,
        components: ["Tomate", "Salade", "Chicken", "Sauce Special", "Cheese"],
      },
      {
        title: "Menu King Fish Spicy",
        image:
          "https://cdn.getsolo.io/167645175163ec9fa7d1c46_Burger%20Spicy%20500x500px.png",
        price: 70,
        components: ["Fish", "Mayo", "Cheese", "pickles", "Salade", "Oignons"],
      },
      {
        title: "Menu Big King Meal",
        image:
          "https://cdn.getsolo.io/1649258395624daf9bcc098_15%20)%20Menu%20Big%20King%20XXL.png",
        price: 75,
        components: ["Cheese", "Salade", "Pickles", "Oignons", "Beef"],
      },
      {
        title: "Menu Bacon Steackhouse",
        image: "https://cdn.getsolo.io/162668493560f53e0799ad9_phpujRolg",
        price: 73,
        components: [
          "Crispy Oignons",
          "Bacon",
          "Beef",
          "Cheese",
          "Sauce BBQ",
          "Salade",
        ],
      },
    ],
  },
  {
    fastFoodName: "Quick",
    menus: [
      {
        title: "Menu Mega Giant",
        image: "https://www.quick.ma/api/uploads/img-Mega_Giant_190_x_150.png",
        price: 55,
        components: ["Oignons", "2cheeses", "2Beef", "Pickles", "Mayo"],
      },
      {
        title: "Menu Giant",
        image: "https://www.quick.ma/api/uploads/img-Giant_190_x_150.png",
        price: 45,
        components: ["Salade", "Beef", "Sauce Special", "Cheese"],
      },
      {
        title: "Menu Junior Giant",
        image:
          "https://www.quick.ma/api/uploads/img-Junior_Giant_190_x_150.png",
        price: 55,
        components: ["Beef", "Mayo", "Cheese", "Salade"],
      },
    ],
  },
  {
    fastFoodName: "Kfc",
    menus: [
      {
        title: "Menu Crunchy Burger",
        image:
          "https://kfcrestaurants.be/wp-content/uploads/2023/09/Crunchy-Cheese-burger-980x980.jpg",
        price: 53,
        components: ["Chicken", "Cheese", "Ketchup"],
      },
      {
        title: "Menu Zinger Burger",
        image:
          "https://kfcrestaurants.be/wp-content/uploads/2023/09/Zinger-burger-980x980.jpg",
        price: 58,
        components: ["Salade", "Tomate", "Crispy Chicken", "Sauce Special"],
      },
      {
        title: "Menu Colonel Stacker",
        image:
          "https://kfcrestaurants.be/wp-content/uploads/2023/09/Colonel-Stacker2-980x980.jpg",
        price: 75,
        components: ["Crispy Chicken", "Mayo", "Cheese", "Salade", "Tomate"],
      },
    ],
  },
];

const insertTestData = async () => {
  try {
    await FastFoodMenu.insertMany(testData);
    console.log("Data importée avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'importation des données");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

insertTestData();
