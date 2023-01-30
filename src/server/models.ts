import { z } from "zod";

const showingQueryModel = z.object({
  dateTime: z.string().refine((val) => {
    try {
      new Date.parse(val);
    } catch (err) {
      return false;
    }
    return true;
  }),
});

const showingParamModel = z.object({
  movieId: z.string(),
});

export default {};
