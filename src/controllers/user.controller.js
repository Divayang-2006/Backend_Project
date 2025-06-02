// Controllers are Methods

import { asyncHandler } from "../utils/asuncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
   res.status(200).json({
      message: "ok"
   })
})

export { registerUser }