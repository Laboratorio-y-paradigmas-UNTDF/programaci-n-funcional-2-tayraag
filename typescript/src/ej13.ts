// Ejercicio 13 — Recursión de cola TS (5 pts)
// Trazabilidad: F-27

export type TreeNode = { value: number; children: TreeNode[] };

// Suma con acumulador (default 0). Recursiva, sin loops.
export function sumList(nums: number[], acc: number = 0): number {
  return nums.length === 0 ? acc : sumList(nums.slice(1), acc + nums[0]);
}

// Factorial con acumulador (default 1). Recursiva, sin loops.
export function factorial(n: number, acc: number = 1): number {
  if (n <= 1) return acc;
  return factorial(n -1, n * acc);
}

// Busca value en árbol N-ario pre-order. Retorna valor o null.
export function findInTree(nodes: TreeNode[], target: number): number | null {
  if (nodes.length === 0) return null;
  const [head, ...tail] = nodes;
  if (head.value === target) return head.value;
  return findInTree([...head.children, ...tail], target);
};