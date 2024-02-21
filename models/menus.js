import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  components: [String],
});

const menuSchema = new mongoose.Schema({
  fastFoodName: String,
  menus: [menuItemSchema],
});

const FastFoodMenu = mongoose.model("FastFoodMenu", menuSchema);

export default FastFoodMenu;
