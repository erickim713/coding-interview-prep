const solution_to_skill_tree = (skill: string, skill_trees: string[]) => {
  let counter = 0;
  const skillTreeLength = skill.length;
  const skillDictionary = new Map<string, number>();

  for(let i = 0; i < skill.length; i++) {
    skillDictionary.set(skill[i], i);
  }

  skill_trees.forEach( (registeredSkill) => {
    let currentPointer = 0;
    let allowed = true;
    for(let i = 0; i < registeredSkill.length; i++) {
      if(skillDictionary.get(registeredSkill[i]) !== undefined){
        if (registeredSkill[i] === skill[currentPointer] ){
          currentPointer++;
        } else {
          allowed = false;
          break;
        }
      }
    }
    if(allowed) {
      counter++;
    }
  });

  return counter;
}

console.log(solution_to_skill_tree('cbd', ['bacde', 'cbadf', 'aecb', 'bda']));
console.log(solution_to_skill_tree('cbd', ['bcde', 'cbadf', 'aecb', 'cbda']));