import { render } from '@testing-library/react'
import Pet from './pet'

describe('Pet', () => {
  test('displays a default thumbnail', async () => {
    const pet = render(<Pet />)

    const petThumbnail = (await pet.findByTestId(
      'thumbnail',
    )) as HTMLImageElement

    expect(petThumbnail.src).toContain('0.jpg')

    pet.unmount()
  })
})
