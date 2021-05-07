import jwt from "jsonwebtoken";

// SECRETE KEY
const SECRETE_KEY = "sdjkfbdsjfbdsjkfbslkbfoaslfbsbfasbfhsabdhj";

export const generateToken = (data) => jwt.sign(data, SECRETE_KEY);

export const verifyToken = (token) =>
  jwt.verify(token, SECRETE_KEY, (error, decodedToken) => {
    return error ? { error: "invalid token" } : { token: decodedToken };
  });
