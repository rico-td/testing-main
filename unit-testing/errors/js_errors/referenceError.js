// Folgender Code wirft einen ReferenceError

try {
    meineLieblingsFunktion();
} catch(error){
    console.log("ReferenceError catched!")
} finally {
    console.log("always here")
}