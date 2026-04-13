/** URL de visualização no YouTube a partir do ID do vídeo. */
export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
}

/** Miniatura oficial (hq) servida pelo YouTube. */
export function youtubeThumbnailUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}
