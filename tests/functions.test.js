

import { describe, it } from 'vitest'

// All tests within this suite will be run in parallel
describe.concurrent('suite', () => {
    it('concurrent test 1', async () => { /* ... */ })
    it('concurrent test 2', async () => { /* ... */ })
    it.concurrent('concurrent test 3', async () => { /* ... */ })
})