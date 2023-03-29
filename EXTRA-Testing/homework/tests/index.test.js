const { checkSeatStatus, getRowNumber, seatSummary } = require("../homework");

describe("checkSeatStatus", () => {
  it("checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("should throw a TypeError if first parameter is not a letter", () => {
    expect(() => checkSeatStatus(4)).toThrow(
      new TypeError("First parameter is not a letter")
    );
  });

  it("should throw a TypeError if second parameter is not a number", () => {
    expect(() => checkSeatStatus("A", true)).toThrow(
      new TypeError("Second parameter is not a number")
    );
  });

  it("should throw a TypeError if second parameter is higher than 4", () => {
    expect(() => checkSeatStatus("A", 80)).toThrow(
      new TypeError("Second parameter is higher than 4")
    );
  });

  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });

  it("should return false if the given seat defined by row and column is not booked", () => {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });
});

describe("getRowNumber", () => {
  it("should return 1 if the letter given is an A", () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it("should return 3 if the letter given is a C", () => {
    expect(getRowNumber("C")).toBe(2);
  });

  it("should throw a TypeError if the letter exceeds E", () => {
    expect(() => getRowNumber("Y")).toThrow(new TypeError("Letter exceeds E"));
  });
});

describe("seatSummary", () => {
  it("seatSummary is a function", () => {
    expect(typeof seatSummary).toBe("function");
  });

  it("should throw a TypeError if first parameter is not an array", () => {
    expect(() => seatSummary(4)).toThrow(
      new TypeError("First parameter is not an array")
    );
  });

  it("should return seat summary", () => {
    const layout = [
      [
        { type: "VIP", booked: false },
        { type: "VIP", booked: true },
        { type: "VIP", booked: true },
        { type: "VIP", booked: false },
      ],
      [
        { type: "NORMAL", booked: false },
        { type: "VIP", booked: true },
        { type: "VIP", booked: false },
        { type: "NORMAL", booked: false },
      ],
      [
        { type: "NORMAL", booked: false },
        { type: "NORMAL", booked: true },
        { type: "NORMAL", booked: true },
        { type: "NORMAL", booked: false },
      ],
      [
        { type: "ECONOMIC", booked: true },
        { type: "NORMAL", booked: true },
        { type: "NORMAL", booked: true },
        { type: "ECONOMIC", booked: false },
      ],
      [
        { type: "ECONOMIC", booked: false },
        { type: "ECONOMIC", booked: true },
        { type: "ECONOMIC", booked: false },
        { type: "ECONOMIC", booked: false },
      ],
    ];

    expect(seatSummary(layout)).toEqual({
      totalSeats: 20,
      seatsBooked: 9,
      seatsFree: 11,
      collection: 4200,
    });
  });
});
