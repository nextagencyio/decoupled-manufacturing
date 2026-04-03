import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1, h2').filter({ hasText: /Precision Engineered/i })).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Years in Business')).toBeVisible()
  })

  test('has working navigation', async ({ page }) => {
    // Use a wide viewport so desktop nav is visible
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Product Lines', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Facilities', exact: true }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'Certifications', exact: true }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'News', exact: true }).first()).toBeVisible()
  })
})

test.describe('Products listing', () => {
  test('renders product line cards', async ({ page }) => {
    await page.goto('/products')
    await expect(page.getByText('Precision Machined Components')).toBeVisible()
    await expect(page.getByText('Sheet Metal Fabrication')).toBeVisible()
  })
})

test.describe('Product detail', () => {
  test('renders product detail page', async ({ page }) => {
    await page.goto('/products/precision-machined-components')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Precision Machined/i)
    await expect(page.getByText('Lead Time')).toBeVisible()
  })
})

test.describe('Facilities listing', () => {
  test('renders facility cards', async ({ page }) => {
    await page.goto('/facilities')
    await expect(page.getByText('Dayton Headquarters')).toBeVisible()
    await expect(page.getByText('Phoenix Fabrication')).toBeVisible()
  })
})

test.describe('Facility detail', () => {
  test('renders facility detail page', async ({ page }) => {
    await page.goto('/facilities/headquarters-dayton')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Dayton/i)
    await expect(page.getByText('Location')).toBeVisible()
  })
})

test.describe('Certifications listing', () => {
  test('renders certification cards', async ({ page }) => {
    await page.goto('/certifications')
    await expect(page.getByText('ISO 9001:2015', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('AS9100 Rev D', { exact: true }).first()).toBeVisible()
  })
})

test.describe('Certification detail', () => {
  test('renders certification detail page', async ({ page }) => {
    await page.goto('/certifications/iso-9001')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/ISO 9001/i)
    await expect(page.getByText('Issuing Body')).toBeVisible()
  })
})

test.describe('News listing', () => {
  test('renders news cards', async ({ page }) => {
    await page.goto('/news')
    await expect(page.getByText('Phoenix Facility Expansion')).toBeVisible()
  })
})

test.describe('News detail', () => {
  test('renders news detail page', async ({ page }) => {
    await page.goto('/news/phoenix-expansion-complete')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Phoenix Facility/i)
    await expect(page.getByText('Author')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByText('Founded in 1974')).toBeVisible()
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/i)
  })
})
