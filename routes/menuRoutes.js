import express from "express";
import Menu from "../models/menus.js";
import admin from "firebase-admin";

import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import { dirname } from "path";

const createCustomToken = (uid) => {
  const customToken = jwt.sign({ uid }, "your-secret-key", { expiresIn: "1h" });
  return customToken;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

admin.initializeApp({
  databaseURL: "https://menu-z-default-rtdb.firebaseio.com",
});

const router = express.Router();
router.post("/custom-token", async (req, res) => {
  const uid = req.body.uid; // Get the UID from the request

  // Create a custom JWT using Firebase UID
  const customToken = createCustomToken(uid);

  res.json({ customToken });
});
router.get("/menus", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint pour créer un nouveau menu
router.post("/menus", async (req, res) => {
  const menu = new Menu({
    name: req.body.name,
    items: req.body.items,
  });

  try {
    const newMenu = await menu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/menus/:id", async (req, res) => {
  try {
    const menus = await Menu.findById(req.params.id);
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ajoutez d'autres endpoints pour la mise à jour et la suppression des menus

export default router;
