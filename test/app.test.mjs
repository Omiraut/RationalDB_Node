import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../server.js"; // Ensure this points to your express app
// import { sequelize } from "../models/index.js"; // Import sequelize instance;
const { expect } = chai;
chai.use(chaiHttp);
describe("User Endpoints", () => {
  it("should create new user", (done) => {
    chai
      .request(app)
      .post("/user")
      .send({
        firstName: "Omi",
        lastName: "Raut",
        email: "omiraut@gmail.com",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("firstName", "Omi");
        expect(res.body).to.have.property("lastName", "Raut");
        expect(res.body).to.have.property("email", "omiraut@gmail.com");
        done();
      })
      .catch((err) => done(err));
  });
  it("sould get all users", (done) => {
    chai
      .request(app)
      .get("/user")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      })
      .catch((err) => done(err));
  });
  // can add new endpoints as they increase currently there are only 2 hence 2 tests
});
describe("Product Endpoints", () => {
  it("shoud create new Product", (done) => {
    chai
      .request("app")
      .post("/product")
      .send({ name: "product1", price: 100 })
      .then((res) => {
        expect(res).to.have.status(201);

        done();
      })
      .catch((err) => done(err));
  });
});
