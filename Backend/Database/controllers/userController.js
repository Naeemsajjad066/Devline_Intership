import prisma from "../db/prismaClient.js";


// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, age } = req.body;

    // validation (IMPORTANT)
    if (!name || !age) {
      return res.status(400).json({
        error: "name and age are required",
      });
    }

    const user = await prisma.user.create({
      data: {
        name,
        age,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};