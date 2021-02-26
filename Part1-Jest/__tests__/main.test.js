const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icons', () => {
  test('level 3', () => {
    expect(formatVolumeIconPath(90)).toBe('./assets/media/icons/volume-level-3.svg')
  })

  test('level 2', () => {
    expect(formatVolumeIconPath(60)).toBe('./assets/media/icons/volume-level-2.svg')
  })

  test('level 1', () => {
    expect(formatVolumeIconPath(30)).toBe('./assets/media/icons/volume-level-1.svg')
  })

  test('level 0', () => {
    expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg')
  })
})