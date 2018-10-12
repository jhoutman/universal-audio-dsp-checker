export const dspUsageAt441KHz =
  "All measurements are taken at a sample rate of 44.1 kHz. Some UAD plug-ins use more DSP at higher sample rates.";

export const dspLoadLockMessage = "DSP % indicates the amount of resources required by one UAD plug-in instance on a single SHARC processor on a UAD-2 PCIe card. This measurement is from the System panel in the UAD Meter & Control Panel application (not the blue UAD Meter gauge, which shows averaged DSP loads of all available SHARC processors).";

export const sharcCoresAmountMeasurement =
  "DSP % indicates the amount of resources required by one UAD plug-in instance on a single SHARC processor on a UAD-2 PCIe card. This measurement is from the System panel in the UAD Meter & Control Panel application (not the blue UAD Meter gauge, which shows averaged DSP loads of all available SHARC processors).";

export const apolloConsoleDspUse =
  "Apollo interfaces use DSP and memory resources for its internal mixer. Therefore, the UAD Meters will show some DSP and memory usage when Apollo is connected even if UAD plug-ins are not loaded, and instance counts will be higher than available on Apollo-only systems.";

export const apolloConsoleLatency =
  "To maintain the lowest possible latency with Realtime UAD Processing, UAD plug-ins used within Apollo's Console application require more DSP versus when UAD plug-ins are used within a DAW.";

export const uadMaxPluginCount =
  "The UAD system can process a maximum of 512 simultaneous UAD plug-in instances. High UAD plug-in counts (in the hundreds) may be constrained by overall system performance which is affected by host CPU loads, hardware I/O buffer settings, available bandwidth, the particular DAW in use, and related performance factors.";

export const pgmUsage =
  "UAD plug-in PGM usage is not listed in the chart because unlike DSP usage, the “per plug-in” PGM value doesn’t simply sum when multiple UAD plug-ins are used, and the interdependencies of this resource are not linear.";
