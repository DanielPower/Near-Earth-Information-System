import dayjs from "dayjs";

import NHATS from "../models/NHATS.model.js";

export const getNHATSs = async (req, res) => {
  const { minDate, maxDate } = {
    minDate: dayjs(),
    maxDate: dayjs().add(100, "year"),
    ...req.query,
  };
  const NHATSs = await NHATS.findByDateRange(
    new Date(minDate),
    new Date(maxDate),
  );
  res.send(
    NHATSs.map(({ des, minSize, maxSize, obsStart, obsEnd, obsMag }) => ({
      des,
      minSize,
      maxSize,
      obsStart: dayjs(obsStart).format("YYYY-MM-DD"),
      obsEnd: dayjs(obsEnd).format("YYYY-MM-DD"),
      obsMag,
    })),
  );
};
