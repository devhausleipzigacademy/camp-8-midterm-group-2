import { z } from "zod";
import { string } from "zod";

const showingQueryModel = z.object({
  dateTime: z.optional(
    string().refine((val) => {
      if (Number.isNaN(Date.parse(val))) {
        return false;
      }
      return true;
    })
  ),
});

const showingParamModel = z.object({
  dateTime: z.string(),
  movieId: z.string(),
});

const noReturnData = z.undefined();

const patchShowingParamsModel = z.object({
  movieId: z.string(),
  dateTime: z.string(),
});

const patchUserBodyModel = z.object({ movieId: z.string() });

const asyncPostUserBodyModel = z.object({
  avatarUrl: z.optional(z.string()),
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
  postTokenBodyModel,
};
