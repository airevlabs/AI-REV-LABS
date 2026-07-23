const { test } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.use({
  deviceScaleFactor: 2, // Capture at 2x resolution (1080x1350)
});

test('screenshot slides', async ({ page }) => {
  const filePath = path.join(__dirname, 'index.html');
  await page.goto(`file://${filePath}`);
  
  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2000);
  
  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides.`);
  
  const carouselConfig = [
    { name: 'carousel_1_pov_comedy', count: 5 },
    { name: 'carousel_2_secret_tools', count: 5 },
    { name: 'carousel_3_leaky_bucket', count: 6 },
    { name: 'carousel_4_case_study', count: 5 },
    { name: 'carousel_5_myth_busting', count: 6 }
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
      const slidePath = path.join(dirPath, `slide_${s + 1}.png`);
      
      await slideElement.screenshot({
        path: slidePath,
        type: 'png'
      });
      
      console.log(`Saved: ${carousel.name}/slide_${s + 1}.png`);
      slideIndex++;
    }
  }
});
