export async function getSession(): Promise<boolean> {
  // Simulate API call with 1.5 second delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Add a 30% chance to return false
  const shouldReturnFalse = Math.random() < 0.3;
  if (shouldReturnFalse) {
    return false;
  }

  return true;
}
