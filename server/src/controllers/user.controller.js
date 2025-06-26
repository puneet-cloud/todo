import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/Apierror.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      //todo
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Error while generating access and refresh token", error);
    throw new ApiError(500, "Error while generating access and refresh token");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
  const { fullName, email, userName, password } = req.body;
  console.log(
    "fullName, email, userName, password",
    fullName,
    email,
    userName,
    password
  )

  //validation
  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "") 
    //some is used to check if any of the field is empty and trim is used to remove spaces
  ) {
    throw new ApiError(400, "All fileds are required");
  }

  //check wheter is user exists in database already or not
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) {
    console.log("See here : ", existedUser)
    throw new ApiError(403, "User already exists");
  }
  

  //handle the images (images comes in file gives by the multer)
  
  try {
    const user = await User.create({
      fullName,
      email,
      password,
      userName: userName.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering a user");
    }

    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User Registered Scuccessfully"));
  } catch (error) {
    console.log("User creation failed", error);

    if (avatar) {
      await deleteFromCloudinary(avatar.public_id);
    }

    throw new ApiError(
      500,
      "Something went wrong while registering a user and images were deleted"
    );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  //get data from body
  console.log("req.body", req.body);
  const { userName, password } = req.body;

  //validation
  if (!userName) {
    throw new ApiError(400, "Username is required");
  }
  if (!password) {
    throw new ApiError(400, "Password is required");
  }

  //It searches for a user where either the userName or email matches the provided values.
  const user = await User.findOne({ $or: [{ userName }, { email: userName }] });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  //validate password
  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if (!loggedInUser) {
    throw new ApiError(500, "Something went wrong while login");
  }

  const cookieOptions = {
    httpOnly: true, // Prevents access via JavaScript
    secure: process.env.NODE_ENV === "production", // Secure only in production
    sameSite: "Strict", // Required for cross-origin cookies (Vercel → Render)
  };

  console.log("User logged in successfully");
  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken},
        "User logged in successfully"
      )
    );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "User fetched successfully"));
});


export {
    registerUser,
    loginUser,
    generateAccessAndRefreshToken, getCurrentUser
}