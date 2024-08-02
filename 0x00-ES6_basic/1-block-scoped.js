export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const localTask = true;
    const localTask2 = false;
    // Use the local variables inside this block if needed
  }

  return [task, task2];
}
