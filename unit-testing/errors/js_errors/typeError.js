// Folgender Code wirft einen TypeError

const zahl = 1024;

try {
zahl.map((item) => {
  console.log(item);
})
} catch (error) {
    console.log("TypeError catched!")
} finally {
    console.log("always here")
}