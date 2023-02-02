const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createPost = async (req, res) => {
  const { title, body, email } = req.body;

  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        body: body,
        author: { connect: { email: email } },
      },
    });

    res.status(200).send({
      status: "success",
      message: "success get data",
      data: {
        post: post,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const post = await prisma.post.findMany();

    res.status(200).send({
      status: "success",
      message: "success get data",
      data: {
        post: post,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const postById = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "success get data",
      data: {
        post: postById,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};

exports.updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const postById = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        body: body,
      },
    });

    res.status(200).send({
      status: "success",
      message: "success update data",
      data: {
        post: postById,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "success delete post",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "server error",
    });
  }
};
