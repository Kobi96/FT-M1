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

function checkSeatStatus(row, number) {
  if (typeof row !== "string" && row.length !== 1)
    throw new TypeError("First parameter is not a letter");
  if (typeof number !== "number")
    throw new TypeError("Second parameter is not a number");
  if (number > 4) throw new TypeError("Second parameter is higher than 4");

  const seat = getSeat(row, number);
  return seat.booked;
}

function getRowNumber(letter) {
  if (letter.charCodeAt(0) - 65 >= 5) throw new TypeError("Letter exceeds E");

  return letter.charCodeAt(0) - 65;
}

function book(row, number) {
  if (checkSeatStatus(row, number))
    return `Seat in ${row}${number} is already booked`;
  const seat = getSeat(row, number);
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`;
}

function getSeat(letter, number) {
  const numberRow = getRowNumber(letter);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  return seat;
}

function seatSummary(layout) {
  if (typeof layout !== "object")
    throw new TypeError("First parameter is not an array");

  let summary = {
    totalSeats: 0,
    seatsBooked: 0,
    seatsFree: 0,
    collection: 0,
  };

  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      const seat = layout[i][j];
      summary.totalSeats++;
      if (seat.booked) {
        summary.seatsBooked++;
        if (seat.type === "VIP") {
          summary.collection += 600;
        } else if (seat.type === "NORMAL") {
          summary.collection += 450;
        } else if (seat.type === "ECONOMIC") {
          summary.collection += 300;
        }
      } else {
        summary.seatsFree++;
      }
    }
  }

  return summary;
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeat,
  seatSummary,
};
