const PG_BASE_URL = "http://kenny:8000";

async function makeRequest(path) {
  const url = `${PG_BASE_URL}${path}`;
  const response = await fetch(url);
  return await response.json();
}

export async function getIsolationSourceDistribution(size = 20) {
  const data = await makeRequest("/count/samples/by/isolation_source");
  
  const formattedData = Array.isArray(data) 
    ? data.map(item => ({ key: item[0], value: item[1] }))
    : Object.entries(data).map(([key, value]) => ({ key, value }));
  
  return formattedData
    .sort((a, b) => b.value - a.value)
    .slice(0, size);
}

export async function getHostDistribution(size = 20) {
  const data = await makeRequest("/count/samples/by/host");
  
  const formattedData = Array.isArray(data) 
    ? data.map(item => ({ key: item[0], value: item[1] }))
    : Object.entries(data).map(([key, value]) => ({ key, value }));
  
  return formattedData
    .sort((a, b) => b.value - a.value)
    .slice(0, size);
}

export { makeRequest };