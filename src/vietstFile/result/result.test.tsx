import { render } from '@testing-library/react'
import { Result } from './result.tsx'

describe('Results', () => {
  test('should renders correctly with no stus', () => {
    const { asFragment } = render(<Result students={[]} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should renders correctly with some stus', () => {
    const stus = [
      {
        id: 1,
        name: 'Luna',
      },
    ]
    const { asFragment } = render(<Result students={stus} />)
    // 渲染快照结果是否与存档快照一致
    expect(asFragment()).toMatchSnapshot()
  })
})
