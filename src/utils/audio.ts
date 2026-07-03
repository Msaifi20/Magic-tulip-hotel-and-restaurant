let lastPlayTime = 0;

/**
 * Generates and plays a high-quality, lightweight synthetic click sound
 * using the browser's Web Audio API. This is fast, works offline, and has zero latency.
 */
export function playClickSound() {
  try {
    const now = Date.now();
    // Debounce rapid successive playbacks (e.g. double taps) to keep it clean
    if (now - lastPlayTime < 60) return;
    lastPlayTime = now;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    
    // Handle browser auto-play/suspended state
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    // Sine wave produces a clean, organic, bubble-like click sound
    osc.type = 'sine';
    
    const startTime = ctx.currentTime;
    // Fast pitch bend from high to low gives a crisp mechanical tap feel
    osc.frequency.setValueAtTime(1200, startTime);
    osc.frequency.exponentialRampToValueAtTime(150, startTime + 0.04);
    
    // Tight volume envelope for a snappy click with no tail
    gain.gain.setValueAtTime(0.06, startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.04);
    
    osc.start(startTime);
    osc.stop(startTime + 0.04);

    // Close the audio context shortly after completion to release hardware resources
    setTimeout(() => {
      try {
        ctx.close();
      } catch (err) {
        // Ignore
      }
    }, 100);
  } catch (e) {
    // Fail silently to prevent interrupting user actions if audio is blocked or restricted
  }
}
