import { it, expect } from "vitest";
import { generateToken } from "./async-example";

it("shoud generate a token value", (done) => {
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
