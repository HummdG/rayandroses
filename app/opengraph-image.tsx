import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDFAF7',
          fontFamily: 'Georgia, "Times New Roman", serif',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Decorative gold border */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid #D4AF72',
            borderRadius: '8px',
            opacity: 0.5,
          }}
        />
        {/* Corner florals — minimal gold dots */}
        <div style={{ position: 'absolute', top: 48, left: 48, width: 8, height: 8, borderRadius: '50%', background: '#D4AF72', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: 48, right: 48, width: 8, height: 8, borderRadius: '50%', background: '#D4AF72', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: 48, left: 48, width: 8, height: 8, borderRadius: '50%', background: '#D4AF72', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: 48, right: 48, width: 8, height: 8, borderRadius: '50%', background: '#D4AF72', opacity: 0.6 }} />

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 16,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#D4AF72',
              marginBottom: '28px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 300,
            }}
          >
            London Event Styling
          </p>
          <h1
            style={{
              fontSize: 96,
              color: '#1A1A1A',
              fontWeight: 300,
              letterSpacing: '0.04em',
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            Ray & Roses
          </h1>
          <div
            style={{
              width: '140px',
              height: '1px',
              backgroundColor: '#D4AF72',
              margin: '28px 0',
            }}
          />
          <p
            style={{
              fontSize: 24,
              color: '#2C2C2C',
              fontWeight: 300,
              opacity: 0.65,
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.06em',
            }}
          >
            Bespoke Wedding & Event Styling
          </p>
        </div>
      </div>
    ),
    { ...size }
  )
}
