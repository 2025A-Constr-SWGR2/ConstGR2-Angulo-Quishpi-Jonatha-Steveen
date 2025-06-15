import { clientes } from "../mockData";

describe("Clientes Mock Data", () => {
  it("should have at least one cliente", () => {
    expect(clientes.length).toBeGreaterThan(0);
  });
});