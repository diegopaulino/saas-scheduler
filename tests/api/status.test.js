test("GET /api/status returns status ok", async () => {
  const response = await fetch("http://localhost:3000/api/status");
  expect(response.status).toBe(200);
  console.log(response);
});
