import { z } from "zod";
import { string } from "zod";

const showingQueryModel = z.object({
  dateTime: z.optional(
    string().refine((val) => {
      try {
        Date.parse(val);
      } catch (err) {
        return false;
      }
      return true;
    })
  ),
});

const showingParamModel = z.object({
  movieId: z.string(),
});

const noReturnData = z.undefined();

const patchShowingParamsModel = z.object({
  movieId: z.string(),
  datetime: z.string(),
});

const patchUserBodyModel = z.object({ movieId: z.string() });

const asyncPostUserBodyModel = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  saltAndHash: z.string(),
});

const postTokenBodyModel = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const updateShowingModel = z.array;

export default {
  showingParamModel,
  noReturnData,
  asyncPostUserBodyModel,
  patchShowingParamsModel,
  patchUserBodyModel,
  updateShowingModel,
};
