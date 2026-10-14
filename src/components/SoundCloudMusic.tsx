import type { RefObject } from 'react'
import { usePreferences } from '../preferences'

// Thay mốc thời gian điệp khúc vào sau #t= (ví dụ 0:45)
export const SOUNDCLOUD_TRACK = 'https://soundcloud.com/bich-hongg-69192218/a-little-dream-of-me-th-o-t-m#t=0:40'

const PLAYER_URL = `https://w.soundcloud.com/player/?url=${encodeURIComponent(SOUNDCLOUD_TRACK)}&color=%23c89b3c&auto_play=false&show_artwork=false&show_comments=false&show_playcount=false&sharing=false&buying=false&download=false`

export function SoundCloudMusic({ iframeRef, error }: { iframeRef: RefObject<HTMLIFrameElement | null>; error: boolean }) {
  const { t } = usePreferences()
  return (
    <div className="soundcloud-background" aria-hidden="true">
      <iframe 
        ref={iframeRef} 
        src={PLAYER_URL} 
        title="SoundCloud — A Little Dream of Me" 
        width="1" 
        height="1" 
        allow="autoplay" 
        tabIndex={-1} 
      />
      {error && <span>{t('Chưa kết nối được trình phát. Bạn có thể nghe trực tiếp trên SoundCloud.')}</span>}
    </div>
  )
}