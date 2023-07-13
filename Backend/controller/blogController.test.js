const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../db/models/blog");

const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Blog APIs", () => {
  beforeEach(async () => {
    await Blog.deleteMany({});
  });

  it("Should get all blogs", async () => {
    await Blog.create({
      title: "Test Blog 1",
      summary: "Summary 1",
      blog: "Blog Content 1",
      addedBy: new mongoose.Types.ObjectId(
        "64ae4bee6a9b7e97daccb25a"
      ).toString(),
    });
    await Blog.create({
      title: "Test Blog 2",
      summary: "Summary 2",
      blog: "Blog Content 2",
      addedBy: new mongoose.Types.ObjectId(
        "64ae4bee6a9b7e97daccb25a"
      ).toString(),
    });

    const response = await supertest(app).get("/blog/getAllBlogs");

    expect(response.status).toBe(200);
    expect(response.body.blog.length).toBe(2);
  });

  it("should get top blogs", async () => {
    await Blog.create({
      title: "Test Blog 1",
      summary: "Summary 1",
      blog: "Blog Content 1",
      addedBy: new mongoose.Types.ObjectId(
        "64ae4bee6a9b7e97daccb25a"
      ).toString(),
    });
    await Blog.create({
      title: "Test Blog 2",
      summary: "Summary 2",
      blog: "Blog Content 2",
      addedBy: new mongoose.Types.ObjectId(
        "64ae4bee6a9b7e97daccb25a"
      ).toString(),
    });

    const response = await supertest(app).get("/blog/getTopBlogs");

    expect(response.status).toBe(200);
    expect(response.body.blog.length).toBe(2);
  });

  it("Should get a single blog", async () => {
    const createdBlog = await Blog.create({
      title: "Test Blog",
      summary: "Summary",
      blog: "Blog Content",
      addedBy: new mongoose.Types.ObjectId(
        "64ae4bee6a9b7e97daccb25a"
      ).toString(),
    });

    const response = await supertest(app).get(`/blog/getBlog/${createdBlog._id}`);

    expect(response.status).toBe(200);
    expect(response.body.blogData.title).toBe("Test Blog");
  });
});
