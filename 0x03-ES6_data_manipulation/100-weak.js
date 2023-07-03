// create a new WeakMap instance
export const weakMap = new WeakMap();

// define the queryAPI function
export function queryAPI(endpoint) {
  // check if endpoint is already in the map
  if (!weakMap.has(endpoint)) {
    // if not, initialize it with a count of 1
    weakMap.set(endpoint, 1);
  } else {
    // if yes, increment the count by 1
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  // check if the count is >= 5
  const count = weakMap.get(endpoint);
  if (count >= 5) {
    // throw an error if yes
    throw new Error('Endpoint load is high');
  }

  // return the API response if no error is thrown
  return `Response from ${endpoint.protocol} API for ${endpoint.name}`;
}
