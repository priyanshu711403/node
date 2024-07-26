function dijkstra(graph, source) {
   const shortestDistances = {};
   const pq = [];
   for (let vertex in graph) {
      shortestDistances[vertex] = Infinity;
   }
   shortestDistances[source] = 0;
   pq.push([0, source]);
   while (pq.length > 0) {
      pq.sort((a, b) => a[0] - b[0]);
      const [currentDistance, currentVertex] = pq.shift();
      if (currentDistance > shortestDistances[currentVertex]) {
         continue;
      }
      for (let neighbour in graph[currentVertex]) {
         const weight = graph[currentVertex][neighbour];
         const distance = currentDistance + weight;
         if (distance < shortestDistances[neighbour]) {
            shortestDistances[neighbour] = distance;
            pq.push([distance, neighbour]);
         }
      }
   }
   return shortestDistances;
}

const graph = { 0: { 1: 4, 2: 1 }, 1: { 3: 1 }, 2: { 1: 2, 3: 5 }, 3: {} };
const source = 0;
console.log(dijkstra(graph, source));
// Output: {0: 0, 1: 3, 2: 1, 3: 4}
