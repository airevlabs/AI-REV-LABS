const { test } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.use({
  deviceScaleFactor: 2, // Capture at 2x resolution (1080x1350)
});

test('screenshot software comparison slides as jpg', async ({ page }) => {
  const filePath = path.join(__dirname, 'comparison-carousels.html');
  await page.goto(`file://${filePath}`);
  
  // Wait for Google Fonts to load
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2000);
  
  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} comparison slides.`);
  
  const carouselConfig = [
    { name: 'comparison_1_price_reality_check', count: 5 },
    { name: 'comparison_2_core_platform_os', count: 5 },
    { name: 'comparison_3_lead_capture_automations', count: 5 },
    { name: 'comparison_4_why_switch', count: 5 }
  ];
  
  let slideIndex = 0;
  
  for (let c = 0; c < carouselConfig.length; c++) {
    const carousel = carouselConfig[c];
    const dirPath = path.join(__dirname, 'output', carousel.name);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    for (let s = 0; s < carousel.count; s++) {
      if (slideIndex >= slides.length) break;
      const slideElement = slides[slideIndex];
      const slidePath = path.join(dirPath, `slide_${s + 1}.jpg`);
      
      await slideElement.screenshot({
        path: slidePath,
        type: 'jpeg',
        quality: 95
      });
      
      console.log(`Saved: ${carousel.name}/slide_${s + 1}.jpg`);
      slideIndex++;
    }
  }
});
