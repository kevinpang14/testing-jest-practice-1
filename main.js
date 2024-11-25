export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function modulus(a, b) {
  return a % b;
}

export const shoppingList = ["eggs", "milk", "bread", "chicken"];

export const user = {
  name: "Frank",
  age: 30,
};

export function promiseTest() {
  return new Promise((resolve, reject) => {
    resolve("promise resolve");
  });
}

export async function asyncTest() {
  return "async function test";
}

export async function asyncTestObject() {
  return {
    name: "Frank",
    age: 30,
  };
}

export function errorTest() {
  throw new Error("error test");
}

// mocking

import axios from "axios";

export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

export const mockFunction = jest.fn().mockResolvedValue("mocked value");

// snapshot testing

export const snapshotTest = (name) => {
  return `Hello ${name}`;
};

export const delayFunction = (callback) => {
  setTimeout(callback, 1000);
};

//exceptions

export function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}
