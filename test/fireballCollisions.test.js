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
  describe("route", function () {
    it("should return collisions in the list within the distance specified from the users lat lon coordinates", async function () {
      await FireballCollisions.create([
        {
          date: "2021-02-28 03:47:37",
          impactEnergy: "0.098",
          lat: "9.2",
          lon: "-64.1",
        },
        {
          date: "2021-01-31 02:59:39",
          impactEnergy: "0.72",
          lat: "5.2",
          lon: "115.2",
        },
        {
          date: "1988-04-15 03:03:10",
          impactEnergy: "14",
          lat: "-34.5",
          lon: "-175.8",
        },
        {
          date: "2010-07-06 23:54:43",
          impactEnergy: "14",
          lat: "-34.1",
          lon: "-174.5",
        },
      ]);
      const { data: fireballCollisions } = await get("/collisions", {
        params: { lat: "-34.0", lon: "-175.0", distance: 100 },
      });
      console.log(fireballCollisions);
      assert.strictEqual(fireballCollisions.length, 2);
      assert(
        ["1988-04-15 03:03:10", "2010-07-06 23:54:43"].every((date1) =>
          fireballCollisions.some(({ date: date2 }) => date1 === date2),
        ),
      );
    });
  });
});
