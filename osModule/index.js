const os = require("os");

// Function to get and display hostname
function getHostname() {
  const hostname = os.hostname();
  console.log(`Hostname: ${hostname}`);
}

// Function to get and display user information
function getUserInfo() {
  const userInfo = os.userInfo();
  console.log(`User Info:`, userInfo);
}

// Function to get and display directories
function getDirectories() {
  const homeDir = os.homedir();
  const tmpDir = os.tmpdir();
  console.log(`Home Directory: ${homeDir}`);
  console.log(`Temporary Directory: ${tmpDir}`);
}

// Function to get and display network interfaces
function getNetworkInterfaces() {
  const networkInterfaces = os.networkInterfaces();
  console.log("Network Interfaces:");
  for (const interfaceName of Object.keys(networkInterfaces)) {
    console.log(`  ${interfaceName}:`);
    for (const iface of networkInterfaces[interfaceName]) {
      const addressType = iface.family === "IPv4" ? "IPv4" : "IPv6";
      console.log(`    ${addressType} Address: ${iface.address}`);
    }
  }
}

// Function to get and display platform and architecture
function getPlatformAndArchitecture() {
  const platform = os.platform();
  const arch = os.arch();
  console.log(`Platform: ${platform}`);
  console.log(`Architecture: ${arch}`);
}

// Function to get and display memory information
function getMemoryInformation() {
  const totalMemoryBytes = os.totalmem();
  const freeMemoryBytes = os.freemem();

  // Convert bytes to gigabytes (GB)
  const totalMemoryGB = (totalMemoryBytes / Math.pow(1024, 3)).toFixed(2); // 1 GB = 1024^3 bytes
  const freeMemoryGB = (freeMemoryBytes / Math.pow(1024, 3)).toFixed(2);

  console.log(`Total Memory: ${totalMemoryGB} GB`);
  console.log(`Free Memory: ${freeMemoryGB} GB`);
}

// Function to get and display CPU information
function getCpuInformation() {
  const cpus = os.cpus();
  console.log("CPU info:");
  cpus.forEach((cpu, index) => {
    console.log(`  CPU ${index + 1}:`);
    console.log(`    Model: ${cpu.model}`);
    console.log(`    Speed: ${cpu.speed} MHz`);
    console.log(
      `    Times: User=${cpu.times.user}, Nice=${cpu.times.nice}, Sys=${cpu.times.sys}, Idle=${cpu.times.idle}, IRQ=${cpu.times.irq}`
    );
  });
}

// Implementing the missing functions:
function getConstants() {
  // Constants - Example: process signals, error codes, etc.
  const constants = os.constants;
  console.log("Constants:", constants);
}

function getEndianness() {
  // Endianness of the CPU
  const endianness = os.endianness();
  console.log("Endianness:", endianness);
}

function getEOL() {
  // End-of-line marker for the current operating system
  const eol = os.EOL;
  console.log("End-of-Line Marker:", JSON.stringify(eol));
}

function getLoadAvg() {
  // Load averages (1, 5, and 15 minutes)
  const loadAvg = os.loadavg();
  console.log("Load Averages (1m, 5m, 15m):", loadAvg);
}

function getRelease() {
  // Operating system's release information
  const release = os.release();
  console.log("Release:", release);
}

function getType() {
  // Name of the operating system
  const type = os.type();
  console.log("Operating System Type:", type);
}

function getUptime() {
  // Uptime of the operating system in seconds
  const uptime = os.uptime();
  console.log("Uptime:", uptime, "seconds");
}

// Calling all functions
// getHostname();
// getUserInfo();
// getDirectories();
// getNetworkInterfaces();
// getPlatformAndArchitecture();
// getMemoryInformation();
// getCpuInformation();
getConstants();
// getEndianness();
// getEOL();
// getLoadAvg();
// getRelease();
// getType();
// getUptime();
