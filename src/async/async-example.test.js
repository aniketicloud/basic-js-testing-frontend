import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  const testUserEmail = "test@test.com";

  const token = generateToken(testUserEmail, (error, token) => {
    // expect(token).toBe(2); // this test is also passed even though th test should fail
    try {
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (error) {
      done(error);
    }
  });
});

it("should generate a token value - with promises", () => {
  const testUserEmail = "test@test.com";
  // return expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);  // check for a failing test
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it("should generate a token value - with async/await", async () => {
  const testUserEmail = "test@test.com";
  const result = await generateTokenPromise(testUserEmail);
  // expect(result).toBe(2); // check for a failing test
  expect(result).toBeDefined();
});
