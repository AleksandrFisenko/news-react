import { describe, it, expect } from 'vitest';
import { RegisterRequest } from "../types/auth";
import isRegisterRequest from "./payloadGuard";

describe("isRegisterRequest", () => {
  it("should return true for valid RegisterRequest object", () => {
    const mockPayload: RegisterRequest = {
      email: "user@mrazota.com",
      login: "Xddd",
      password: "super-secret-password",
    };

    const result = isRegisterRequest(mockPayload);

    expect(result).toBe(true);
  });

  it("should return false for LoginRequest object (missing login field)", () => {
    const mockPayload = {
      email: "user@mrazota.com",
      password: "super-secret-password",
    };

    const result = isRegisterRequest(mockPayload);

    expect(result).toBe(false);
  });
});
