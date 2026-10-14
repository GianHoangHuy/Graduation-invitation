import { Phone, Facebook } from 'lucide-react'

export function FloatingContactWidget() {
  return (
    <aside
      aria-label="Liên hệ trực tiếp"
      className="contact-widget fixed right-4 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Nút Facebook */}
      <a
        href="https://www.facebook.com/gianhoanghuy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Giản Hoàng Huy"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg text-xs font-medium text-white transition-transform duration-200 hover:scale-105 active:scale-95 bg-[#1877F2]"
      >
        <Facebook size={16} />
        <span className="hidden sm:inline">Facebook</span>
      </a>

      {/* Nút Gọi điện */}
      <a
        href="tel:0385430453"
        aria-label="Gọi cho Giản Hoàng Huy"
        className="flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg text-xs font-medium text-white transition-transform duration-200 hover:scale-105 active:scale-95 bg-[#163E66]"
      >
        <Phone size={16} />
        <span>0385430453</span>
      </a>
    </aside>
  )
}