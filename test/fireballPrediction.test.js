import assert from "assert";
import axios from "axios";
import mongoose from "mongoose";

import FireballPrediction from "../src/models/fireballPrediction.model.js";

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

describe("FireballPrediction", function () {
  beforeEach(async function () {
    await FireballPrediction.collection.drop();
  });
  describe("model", function () {
    it("Should find by minimum year, maximum year, minimum probability, and maximum probability", async function () {
      await FireballPrediction.create([
        {
          des: "1994 GV",
          energy: "3.959e-02",
          ip: "100", //uhoh
          date: new Date("2101-04-12"),
          year: 2101,
          dist: "0.841",
        },
        {
          des: "2019 GR3",
          energy: "0.137",
          ip: "0.001",
          date: new Date("2080-08-31"),
          year: 2080,
          dist: "0.629",
        },
        {
          des: "2020 GD",
          energy: "2.8373-03",
          ip: "0.138",
          date: new Date("2100-01-01"),
          year: 2100,
          dist: "0.345",
        },
        {
          des: "1982 HD",
          energy: "6.9283-02",
          ip: "0.0238",
          date: new Date("2100-03-28"),
          year: 2100,
          dist: "0.287",
        },
      ]);
      const fireballPredictionsForYear2101 = await FireballPrediction.findByFilter(
        2101,
        2101,
        0.001,
        100,
      );
      const fireballPredictionsForYear2102 = await FireballPrediction.findByFilter(
        2102,
        2102,
        0.001,
        100,
      );

      const fireballPredictionsYearMin2100YearMax2101 = await FireballPrediction.FindByFilter(
        2100,
        2101,
        0.001,
        100,
      );

      const fireballPredictionsYearsWithProbability = await FireballPrediction.findByFilter(
        2100,
        2100,
        0.1,
        0.2,
      );
      const fireballPredictionsProbability = await FireballPrediction.findByFilter(
        0,
        9999,
        0.1,
        100,
      );
      assert.strictEqual(fireballPredictionsForYear2101.length, 1);
      assert.strictEqual(fireballPredictionsForYear2101[0].des, "1994 GV");
      assert.strictEqual(fireballPredictionsForYear2102.length, 0);
      assert.strictEqual(fireballPredictionsYearMin2100YearMax2101.length, 3);
      assert.strictEqual(
        fireballPredictionsYearMin2100YearMax2101[0].des,
        "1994 GV",
      );
      assert.strictEqual(
        fireballPredictionsYearMin2100YearMax2101[1].des,
        "2020 GD",
      );
      assert.strictEqual(
        fireballPredictionsYearMin2100YearMax2101[2].des,
        "1982 HD",
      );
      assert.strictEqual(fireballPredictionsYearsWithProbability.length, 1);
      assert.strictEqual(
        fireballPredictionsYearsWithProbability.des[0],
        "2020 GD",
      );
      assert.strictEqual(fireballPredictionsProbability.length, 3);
      assert.strictEqual(fireballPredictionsProbability.des[0], "1994 GV");
      assert.strictEqual(fireballPredictionsProbability.des[1], "2019 GR3");
      assert.strictEqual(fireballPredictionsProbability[2], "2020 GD");
    });
  });
  describe("route", function () {
    it("Should find by year", async function () {
      await FireballPrediction.create([
        {
          des: "1994 GV",
          energy: "3.959e-02",
          ip: "100", //uhoh
          date: new Date("2101-04-12"),
          year: 2101,
          dist: "0.841",
        },
        {
          des: "2019 GR3",
          energy: "0.137",
          ip: "0.001",
          date: new Date("2080-08-31"),
          year: 2080,
          dist: "0.629",
        },
        {
          des: "2020 GD",
          energy: "2.8373-03",
          ip: "0.138",
          date: new Date("2100-01-01"),
          year: 2100,
          dist: "0.345",
        },
        {
          des: "1982 HD",
          energy: "6.9283-02",
          ip: "0.0238",
          date: new Date("2100-03-28"),
          year: 2100,
          dist: "0.287",
        },
      ]);
      const { data: fireballPredictions } = await get("/predictions", {
        params: { yearMin: 2080, yearMax: 2080, probMin: 0, probMax: 100 },
      });
      assert.strictEqual(fireballPredictions.length, 1);
      assert.strictEqual(fireballPredictions[0].des, "2019 GR3");
    });
  });
});
