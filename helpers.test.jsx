import {
  handleBallTest,
  handleStrikeTest,
  handleFoulTest,
  handleHitTest
} from "./src/components/helpers";

describe("at bat functions", () => {
  it("checks the ball count and resets appropriately", () => {
    handleBallTest(3, 1, 4, 2);
  });

  it("checks the strike count and resets appropriately", () => {
    handleStrikeTest(3, 1, 15, 4);
  });

  it("checks the foul count and resets accourdingly", () => {
    handleFoulTest(3, 0, 0, 1);
  });

  it("checks the hit count and resets accordingly", () => {
    handleHitTest(3, 0, 0, 0);
  });
});
