function randomChoice<T>(possibilities: T[], weights: number[]): T {
    if (possibilities.length !== weights.length) {
      throw new Error('The lengths of possibilities and weights must be the same');
    }
  
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    let randomValue = Math.random() * totalWeight;
    
    for (let i = 0; i < possibilities.length; i++) {
      randomValue -= weights[i];
      if (randomValue <= 0) {
        return possibilities[i];
      }
    }
    
    // This line is only reached if the weights are not properly normalized
    return possibilities[possibilities.length - 1];
}

function randomChoices<T>(possibilities: T[], weights: number[], k: number): T[] {
    if (possibilities.length !== weights.length) {
      throw new Error('The lengths of possibilities and weights must be the same');
    }
  
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const results: T[] = [];
  
    for (let i = 0; i < k; i++) {
      let randomValue = Math.random() * totalWeight;
    
      for (let j = 0; j < possibilities.length; j++) {
        randomValue -= weights[j];
        if (randomValue <= 0) {
          results.push(possibilities[j]);
          break;
        }
      }
    
      // This line is only reached if the weights are not properly normalized
      if (randomValue > 0) {
        results.push(possibilities[possibilities.length - 1]);
      }
    }
  
    return results;
  }
  


export { randomChoice, randomChoices };