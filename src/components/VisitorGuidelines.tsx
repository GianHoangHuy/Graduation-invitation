import { usePreferences } from '../preferences'
import { 
  ShieldCheck, 
  Car, 
  Info, 
  IdCard, 
  GraduationCap, 
  Shirt, 
  PhoneCall, 
  LockKeyhole,
  Phone,
  Facebook
} from 'lucide-react'
import * as Tabs from '@radix-ui/react-tabs'

export function VisitorGuidelines() {
  const { t } = usePreferences()

  const securityItems = [
    {
      title: 'Giấy tờ tuỳ thân',
      icon: <IdCard size={18} className="text-[#3A7CA5] shrink-0" />,
      content: 'Vui lòng mang theo căn cước công dân để xuất trình khi vào trường.',
    },
    {
      title: 'Mã số sinh viên',
      icon: <GraduationCap size={18} className="text-[#C89B3C] shrink-0" />,
      content: 'Nếu bảo vệ hỏi, vui lòng đọc mã số sinh viên: 52200147 (Giản Hoàng Huy).',
    },
    {
      title: 'Trang phục',
      icon: <Shirt size={18} className="text-[#3A7CA5] shrink-0" />,
      content: 'Vui lòng mặc trang phục lịch sự khi tham dự buổi lễ.',
    },
    {
      title: 'Cần hỗ trợ liên hệ',
      icon: <PhoneCall size={18} className="text-[#A67C24] shrink-0" />,
      content: (
        <div className="flex flex-wrap gap-2.5 mt-2">
          <a
            href="tel:0385430453"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#163E66] text-white hover:opacity-90 transition-opacity"
          >
            <Phone size={13} />
            0385430453
          </a>
          <a
            href="https://www.facebook.com/gianhoanghuy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
          >
            <Facebook size={13} />
            Facebook Huy Giản
          </a>
        </div>
      ),
    },
    {
      title: 'Bảo quản tư trang',
      icon: <LockKeyhole size={18} className="text-[#3A7CA5] shrink-0" />,
      content: 'Hạn chế mang theo đồ có giá trị và bảo quản tư trang, tài sản cẩn thận.',
    },
  ]

  const parkingItems = [
    { 
      title: 'Xe máy',
      gates: 'Cổng 7 hoặc Cổng 9',
      content: 'Vào qua Cổng 7 hoặc Cổng 9 để đến khu vực giữ xe máy của trường. Bãi xe rộng, có nhân viên trông coi.',
    },
    { 
      title: 'Ô tô',
      gates: 'Cổng 9',
      content: 'Vào qua Cổng 9 – có làn đường và bãi đậu xe ô tô riêng. Vui lòng đi theo hướng dẫn của nhân viên phân luồng.',
    },
    { 
      title: 'Xe ôm công nghệ / taxi',
      gates: 'Cổng 1, 2, 3, 4 hoặc 5',
      content: 'Đi bộ vào qua Cổng 1 hoặc Cổng 2 là gần nhất. Từ điểm xuống xe, bạn chỉ cần đi bộ vài phút để đến nơi gặp nhau.',
    },
  ]

  return (
    <section id="notices" className="section-ivory relative py-24 overflow-hidden">
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,60,0.35), transparent)' }} 
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,155,60,0.35), transparent)' }} 
      />

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading text-2xl md:text-3xl">{t("Lưu ý dành cho khách mời")}</h2>
          <p className="font-body text-sm mt-2 max-w-md mx-auto leading-relaxed" style={{ color: 'var(--color-sub)' }}>
            {t("Vui lòng đọc các lưu ý dưới đây trước khi đến.")}
          </p>
        </div>

        <Tabs.Root defaultValue="security">
          <Tabs.List className="flex gap-1 mb-8 max-w-md mx-auto" aria-label={t("Thông tin quan trọng")}>
            <Tabs.Trigger
              value="security"
              className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-lg font-body font-medium transition-all duration-200 cursor-pointer"
              style={{ outline: 'none' }}
            >
              <ShieldCheck size={16} />
              {t("An ninh & quy định")}
            </Tabs.Trigger>
            <Tabs.Trigger
              value="parking"
              className="flex-1 flex items-center justify-center gap-2 text-sm py-3 px-4 rounded-lg font-body font-medium transition-all duration-200 cursor-pointer"
              style={{ outline: 'none' }}
            >
              <Car size={16} />
              {t("Di chuyển & gửi xe")}
            </Tabs.Trigger>
          </Tabs.List>

          {/* Security Tab */}
          <Tabs.Content value="security">
            <dl className="guest-notes">
              {securityItems.map((item, idx) => (
                <div key={idx} className="guest-note flex items-start gap-3.5">
                  <div className="mt-1">{item.icon}</div>
                  <div className="flex-1">
                    <dt className="font-serif font-semibold">{t(item.title)}</dt>
                    <dd className="font-body text-sm leading-relaxed text-[var(--color-body)]">
                      {typeof item.content === 'string' ? t(item.content) : item.content}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Tabs.Content>

          {/* Parking Tab */}
          <Tabs.Content value="parking">
            <div className="space-y-4">
              {parkingItems.map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-base font-semibold" style={{ color: 'var(--color-heading)' }}>
                          {t(item.title)}
                        </h3>
                        <span className="gate-label text-xs font-body px-2.5 py-0.5 rounded-full">
                          {t(item.gates)}
                        </span>
                      </div>
                      <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-body)' }}>
                        {t(item.content)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="mt-4 rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: 'rgba(200,155,60,0.06)',
                  border: '1px solid rgba(200,155,60,0.25)',
                }}
              >
                <Info size={16} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: 2 }} />
                <p className="font-body text-sm" style={{ color: 'var(--color-body)' }}>
                  <strong style={{ color: 'var(--color-gold-dark)' }}>{t("Mẹo:")}</strong>{' '}
                  {t("Tham khảo phần")} <strong>{t("Địa điểm")}</strong> {t("ở trên và nhấn nút Google Maps để xem đường đi đến trường.")}
                </p>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  )
}