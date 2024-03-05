const minMax = require("./minMax");


test("a ist kleiner als b", () => {

  //Arrange
  const [a, b] = [1, 5];

  //Act
  const result = minMax.min(a, b);

  //Expect
  expect(result).toEqual(1);
});


test("b ist kleiner als a", () => {
    
  //Arrange
  const [a, b] = [10, 5];

  //Act
  const result = minMax.min(a, b);

  //Expect
  expect(result).toEqual(5);
});


test("a und b sind gleich", () => {
    
  //Arrange
  const [a, b] = [5, 5];
    
  //Act
  const result = minMax.min(a, b);
  
  //Expect
  expect(result).toEqual(5);
});


test("a ist kleiner als b", () => {
    
  //Arrange
  const [a, b] = [1, 5];

  //Act
  const result = minMax.max(a, b);

  //Expect
  expect(result).toEqual(5);
});


test("b ist kleiner als a", () => {
    
  //Arrange
  const [a, b] = [10, 5];

  //Act
  const result = minMax.max(a, b);

  //Expect
  expect(result).toEqual(10);
});

test("a und b sind gleich", () => {

  //Arrange
  const [a, b] = [5, 5];

  //Act
  const result = minMax.max(a, b);

  //Expect
  expect(result).toEqual(5);
});