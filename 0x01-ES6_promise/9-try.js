export default function guardrail(mathFunction) {
  const queue = [];
  const response = 'Guardrail was processed';
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push(response);
  }
  return queue;
}
