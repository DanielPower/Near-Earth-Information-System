import assert from "assert";
import axios from "axios";
import mongoose from "mongoose";

import NHATS from "../src/models/NHATS.model.js";

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

describe("NHATS", function () {
  beforeEach(async function () {
    await NHATS.collection.drop();
  });
  describe("model", function () {
    it("Should find by date range", async function () {
      await NHATS.create([
        {
          des: "2010 PS66",
          obsStart: new Date("2024-04-02"),
          obsEnd: new Date("2024-04-09"),
          obsMag: 23.83,
          minSize: 17,
          maxSize: 74,
        },
        {
          des: "429389",
          obsStart: new Date("2023-01-19"),
          obsEnd: new Date("2023-09-27"),
          obsMag: 21.56,
          minSize: 83,
          maxSize: 371,
        },
        {
          des: "2010 PH9",
          obsStart: new Date("2021-03-21"),
          obsEnd: new Date("2022-01-02"),
          obsMag: 24.81,
          minSize: 8.3,
          maxSize: "37",
        },
      ]);
      const NHATSInRange = await NHATS.findByDateRange(
        new Date("2021-01-01"),
        new Date("2023-06-06"),
      );
      assert.strictEqual(NHATSInRange.length, 2);
    });
  });
  describe("route", function () {
    it("Should find by year", async function () {
      await NHATS.create([
        {
          des: "2010 PS66",
          obsStart: new Date("2024-04-02"),
          obsEnd: new Date("2024-04-09"),
          obsMag: 23.83,
          minSize: 17,
          maxSize: 74,
        },
        {
          des: "429389",
          obsStart: new Date("2023-01-19"),
          obsEnd: new Date("2023-09-27"),
          obsMag: 21.56,
          minSize: 83,
          maxSize: 371,
        },
        {
          des: "2010 PH9",
          obsStart: new Date("2021-03-21"),
          obsEnd: new Date("2022-01-02"),
          obsMag: 24.81,
          minSize: 8.3,
          maxSize: "37",
        },
      ]);
      const { data: NHATSData } = await get("/nhats", {
        params: { minDate: "2021-01-01", maxDate: "2023-06-06" },
      });
      console.log(NHATSData);
      assert.strictEqual(NHATSData.length, 2);
    });
  });
});
