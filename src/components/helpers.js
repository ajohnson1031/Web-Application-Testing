export const handleBallTest = (balls, strikes, fouls, hits) => {
  if (balls >= 3) {
    balls = 0;
    strikes = 0;
    fouls = 0;
    hits += 1;
  } else balls += 1;
};

export const handleStrikeTest = (balls, strikes, fouls, hits) => {
  if (strikes >= 2) {
    strikes = 0;
    fouls = 0;
    balls = 0;
    hits = 0;
  } else strikes += 1;
};

export const handleFoulTest = (balls, strikes, fouls, hits) => {
  if (strikes >= 2) {
  } else {
    strikes += 1;
  }
  fouls += 1;
};

export const handleHitTest = (balls, strikes, fouls, hits) => {
  balls = 0;
  strikes = 0;
  fouls = 0;
  hits += 1;
};
