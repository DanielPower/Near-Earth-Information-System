import assert from "assert";
import axios from "axios";
import mongoose from "mongoose";

import FireballCollisions from "../src/models/fireballCollisions.model.js";

const { get } = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

before(async function () {
  await mongoose.connect("mongodb://localhost:27017/nasa-test");
});

after(function () {
  mongoose.disconnect();
});

describe("FireballCollisions", function () {
  beforeEach(async function () {
    await FireballCollisions.collection.drop();
  });
  describe("model", function () {
    it("Should find by year", async function () {
      await FireballCollisions.create([
        {
          date: "",
          impactEnergy: "",
          lat: "",
          lon: "",
        },
        {
          date: "",
          impactEnergy: "",
          lat: "",
          lon: "",
        },
      ]);
      const fireballPredictionsFor2101 = await FireballCollisions.findByDate(
        2101,
      );
      const fireballPredictionsFor2102 = await FireballCollisions.findByDate(
        2102,
      );
      assert.strictEqual(fireballPredictionsFor2101.length, 1);
      assert.strictEqual(fireballPredictionsFor2101[0].des, "1994 GV");
      assert.strictEqual(fireballPredictionsFor2102.length, 0);
    });
  });
  describe("route", function () {
    it("Should find by year", async function () {
      await FireballPrediction.create([
        {
          des: "1994 GV",
          energy: "3.959e-02",
          ip: "3.833e-05",
          date: new Date("2101-04-12"),
          year: 2101,
          dist: "0.841",
        },
        {
          des: "2019 GR3",
          energy: "8.126e-02",
          ip: "1.119e-04",
          date: new Date("2080-08-31"),
          year: 2080,
          dist: "0.629",
        },
      ]);
      const { data: fireballPredictions } = await get("/predictions", {
        params: { year: 2080 },
      });
      assert.strictEqual(fireballPredictions.length, 1);
      assert.strictEqual(fireballPredictions[0].des, "2019 GR3");
    });
  });
});
