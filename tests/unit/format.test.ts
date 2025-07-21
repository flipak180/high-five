import {expect, test} from 'vitest'
import format from "../../src/misc/format";

test('Открыта первая буква', () => {
    expect(format.cluedAnswer('Апельсин')).toBe('А_______')
    expect(format.cluedAnswer('Из магазина')).toBe('Из м_______')
    expect(format.cluedAnswer('Под тем самым деревом')).toBe('Под т__ _____ _______')
})
