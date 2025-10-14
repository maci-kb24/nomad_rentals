import { beforeAll, afterAll } from 'vitest'

beforeAll(async () => {
  // Setup before all tests (connect to test database, etc.)
  console.log('🧪 Test setup starting...')
})

afterAll(async () => {
  // Cleanup after all tests (disconnect from database, etc.)
  console.log('🧹 Test cleanup complete')
})