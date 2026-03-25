import { test, expect } from '@playwright/test'
import { HomePage } from '../Pages/HomePage'

test('Open and click Playwright link', async ({ page }) => {

  const home = new HomePage(page)

  await home.openPage()

})
