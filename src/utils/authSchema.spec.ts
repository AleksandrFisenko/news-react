import { describe, expect, it } from "vitest";
import { loginSchema } from "./authSchema";

describe('LoginSchema', () => {
  it('should validate correct email and password', async () => {
    const testUserData = {
      email: 'user@mrazota.com',
      password: 'super-secret-password',
    };
  
    expect(loginSchema.validate(testUserData)).resolves.toEqual(testUserData);
  });

  it('should throw error for empty email', async () => {
    const testUserData = {
      email: '',
      password: 'super-secret-password',
    };
  
    expect(loginSchema.validate(testUserData)).rejects.toThrow('Email is required!');;
  });

  it('should throw error for empty password', async () => {
    const testUserData = {
      email: 'user@mrazota.com',
      password: '',
    };
  
    expect(loginSchema.validate(testUserData)).rejects.toThrow('Password is required!');;
  });

  it('should throw error for invalid email', async () => {
    const testUserData = {
      email: 'pum-pum-pum.com',
      password: 'super-secret-password',
    };
  
    expect(loginSchema.validate(testUserData)).rejects.toThrow('Entered value does not match email format.');;
  });

  it('should throw error for password shorter than 6', async () => {
    const testUserData = {
      email: 'pum-pum-pum.com',
      password: 'pupu',
    };
  
    expect(loginSchema.validate(testUserData)).rejects.toThrow('Min length is 6.');;
  });
});
