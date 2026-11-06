import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }

const brickColors = ['#ff4fa3', '#ffd23f', '#3ec6e0', '#7bd389', '#ff7a30']

// Visuel de partage 1200×630 : nom en jaune sur bleu pétrole + bandeau de briques (cf. hero)
export const renderOgImage = async () => {
  const font = await readFile(join(process.cwd(), 'src/app/fonts/LilitaOne-Regular.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px 40px',
          background: '#23506a',
          fontFamily: 'Lilita One',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 118,
            lineHeight: 1,
            color: '#ffd23f',
            textTransform: 'uppercase',
            textShadow: '6px 6px 0 #15112b',
            whiteSpace: 'nowrap',
          }}
        >
          Antoine Bottin
        </div>
        <div style={{ display: 'flex', marginTop: 28, fontSize: 38, color: '#ffffff' }}>
          Product Builder No-code & Développeur React / Next.js
        </div>
        <div
          style={{
            display: 'flex',
            alignSelf: 'flex-start',
            marginTop: 28,
            padding: '4px 20px',
            fontSize: 34,
            color: '#15112b',
            background: '#ff4fa3',
            border: '5px solid #15112b',
            borderRadius: 16,
            textTransform: 'uppercase',
          }}
        >
          Voyons comment la réaliser.
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex' }}>
          {Array.from({ length: 15 }, (_, index) => (
            <div
              key={index}
              style={{
                width: 80,
                height: index % 3 === 0 ? 64 : 32,
                background: brickColors[index % brickColors.length],
                border: '4px solid #15112b',
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Lilita One', data: font, style: 'normal', weight: 400 }] },
  )
}
