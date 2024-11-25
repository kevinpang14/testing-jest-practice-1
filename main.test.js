// import test from "node:test";
import {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  shoppingList,
  user,
  promiseTest,
  asyncTest,
  asyncTestObject,
  errorTest,
  getUser,
  mockFunction,
  snapshotTest,
  delayFunction,
  compileAndroidCode,
} from "./main";

// test("add function 1 + 2 equal: 3", () => {
//   expect(add(1, 2)).toBe(3);
// });

// test("subtract function 1 - 2 equal: -1", () => {
//   expect(subtract(1, 2)).toBe(-1);
// });

// test("multiply function 1 * 2 equal: 2", () => {
//   expect(multiply(1, 2)).toBe(2);
// });

// test("divide function 1 / 2 equal: 0.5", () => {
//   expect(divide(1, 2)).toBe(0.5);
// });

// test("modulus function 5 % 2 equal: 1", () => {
//   expect(modulus(5, 2)).toBe(1);
// });

// test("shoppingList is an array", () => {
//   expect(shoppingList).toContain("eggs");
// });

// test("check shoppingList is an array", () => {
//   const datas = ["eggs", "milk", "bread", "chicken"];
//   for (const data of datas) {
//     expect(shoppingList).toContain(data);
//   }
// });

test("check user", () => {
  expect(user).toMatchObject({
    name: "Frank",
    age: 30,
  });
});

test("testing promise test", () => {
  expect(promiseTest()).resolves.toBe("promise resolve");
});

test("testing promise test 2", () => {
  return promiseTest().then((res) => expect(res).toBe("promise resolve"));
});

test("testing async test", async () => {
  expect(await asyncTest()).toBe("async function test");
});

test("testing async test 2", async () => {
  const res = await asyncTest();
  expect(res).toBe("async function test");
});

test("testing async test object", async () => {
  const res = await asyncTestObject();
  expect(res).toMatchObject({
    name: "Frank",
    age: 30,
  });
});

test("testing error test", () => {
  expect(() => errorTest()).toThrow("error test");
});

// mocking
jest.mock("axios"); // mocking axios
import axios from "axios";
// we simulate the response from the server
axios.get.mockResolvedValue({
  data: {
    name: "Frank",
    age: 30,
  },
});

test("test mocking user data", async () => {
  const user = await getUser(1);
  expect(user).toMatchObject({
    name: "Frank",
    age: 30,
  });
});

test("fetch mock data", async () => {
  const res = await mockFunction();
  expect(res).toBe("mocked value");
});

// snapshot testing

test("snapshot test", () => {
  expect(snapshotTest("Frank")).toMatchSnapshot();
});

jest.useFakeTimers();
test("delay function", () => {
  const mockCallback = jest.fn();
  delayFunction(mockCallback);
  jest.advanceTimersByTime(1000);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

//async/await error handling

test("async/await error handling", async () => {
  try {
    await getUser(1);
  } catch (error) {
    expect(error).toMatch("error test");
  }
});

// test matchers
test("add function 1 + 2 equal: 3", () => {
  const value = add(1, 2);
  expect(value).toBeGreaterThan(2);
  expect(value).toBeLessThan(4);
  expect(value).toBeGreaterThanOrEqual(3);
  expect(value).toBeLessThanOrEqual(3);
});

//array
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

//exceptions
test("compiling android goes as expected", () => {
  //   expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  //   expect(() => compileAndroidCode()).toThrow(/JDK/);

  //   // Or you can match an exact error message using a regexp like below
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
