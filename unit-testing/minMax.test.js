const minMax = require("./minMax");

test("a ist kleiner als b", () => {
    const result = minMax.min(1, 5);
  
    expect(result).toEqual(1);
  });

test("b ist kleiner als a", () => {
    const result = minMax.min(10, 5);
  
    expect(result).toEqual(5);
  });

test("a und b sind gleich", () => {
    const result = minMax.min(5, 5);
  
    expect(result).toEqual(5);
  });

test("a ist kleiner als b", () => {
    const result = minMax.max(1, 5);
  
    expect(result).toEqual(5);
  });

test("b ist kleiner als a", () => {
    const result = minMax.max(10, 5);
  
    expect(result).toEqual(10);
  });

test("a und b sind gleich", () => {
    const result = minMax.max(5, 5);
  
    expect(result).toEqual(5);
  });