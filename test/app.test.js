const request = require("supertest");
const app = require("../src/app");

describe("GET /hello", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toEqual(200);
  });
});
