function safeCall(func) {
  try {
    func();
    return true;
  } catch {
    return false;
  }
}
safeCall(() => console.log("Hello!")); // true
safeCall(() => JSON.parse("abc")); // false
safeCall(() => false); // true
safeCall(() => abc);
