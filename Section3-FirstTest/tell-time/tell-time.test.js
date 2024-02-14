import {convertTimeToWord} from './tell-time'

describe('convert time', () => {
    it('returns back time to word', () => {
        expect(convertTimeToWord('06:45')).toBe('six forty five')
    })
})