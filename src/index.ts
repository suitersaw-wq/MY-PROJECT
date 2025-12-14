export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function main(): void {
  console.log(greet('my-project'));
}

main();
