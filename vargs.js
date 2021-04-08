let args = new URLSearchParams(location.search);

console.groupCollapsed('Config:');

export const DEBUG = numarg('dbg', 0);
export const SIZE = numarg('n', 2048); // Android
export const SHADER = strarg('s', 'acf');
export const SHADER_FPS = numarg('fps', 60);
export const SAMPLE_RATE = numarg('sr', 44.1);
export const PLAYBACK_RATE = numarg('pbr', 1.0);
export const IMAGE_SIZE = numarg('img', 1024);
export const USE_MOUSE = numarg('mouse', 1);
export const PRELOAD = numarg('preload', 0);

export const ACF_COLOR_SCHEME = numarg('acf.cs', 1);
export const ACF_SMODE = strarg('acf.smode');
export const ACF_AGRAD = numarg('acf.agrad', 0);
export const ACF_TGRAD = numarg('acf.tgrad', 0);
export const ACF_R0 = numarg('acf.r0', 0.0);
export const ACF_POLAR = numarg('acf.polar', 1);
export const ACF_EXP = numarg('acf.exp', 1.5);
export const ACF_ABS_MAX = numarg('acf.absmax', 1.0);
export const ACF_STATS = numarg('acf.stats', 0);
export const ACF_ZOOM = numarg('acf.zoom', 5.0);
export const ACF_MAX_SIZE = numarg('acf.max', 2048);
export const ACF_COORDS = numarg('acf.coords', 0);
export const ACF_SIGMA = numarg('acf.sig', 3.0);
export const ACF_DECAY = numarg('acf.decay', 3.0);
export const ACF_A_WEIGHT = numarg('acf.aweight', 0.0);
export const ACF_RGB_1 = strarg('acf.c1', '4,2,1');
export const ACF_RGB_2 = strarg('acf.c2', '1,2,4');

export const REC_FRAMERATE = numarg('rec.fps', 0);
export const CWT_BRIGHTNESS = numarg('cwt.b', 1);
export const CWT_LEN = numarg('cwt.len', 17);
export const CWT_N = numarg('cwt.3s', 30);
export const CWT_GL = numarg('cwt.gl', 1);
export const FFT_GL = numarg('fft.gl', 0);
export const FFT_TIME = numarg('fft.time', 0);
export const FFT_LOG_SCALE = numarg('fft.log', 1);
export const USE_ALPHA_CHANNEL = numarg('alpha', 0);
export const FBO_MAX_SIZE = numarg('fbo.max', 27);
export const SHOW_LOGS = numarg('log', 1);
export const FLOAT_PRECISION = strarg('fp', 'highp');
export const INT_PRECISION = strarg('ip', 'highp');
export const DEMO_ID = numarg('demo', 330891);

console.groupEnd();

function strarg(name, defval = '', regex = null) {
  let value = args.get(name);
  if (value === null)
    value = defval;
  let info = 'URL arg ' + name + '=' + value;
  console.log(info);
  if (regex && !regex.test(value))
    throw new Error(info + ' doesnt match ' + regex);
  return value;
}

function numarg(name, defval = 0) {
  return +strarg(name, defval + '', /^\d+(\.\d+)?$/);
}
