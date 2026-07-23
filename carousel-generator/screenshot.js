const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  // Launch browser with 2x scale factor for high-resolution (540x675 at 2x = 1080x1350)
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    viewport: { width: 1200, height: 1600 }
  });
  
  const page = await context.newPage();
  
  // Load the local HTML file
  const filePath = path.join(__dirname, 'index.html');
  await page.goto(`file://${filePath}`);
  
  // Wait for Google Fonts to load
  await page.evaluate(() => document.fonts.ready);
  // Add a small delay just to be safe
  await page.waitForTimeout(2000);
  
  // Query all slides
  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides.`);
  
  // Define mapping of slide index to carousel folders
  // Carousel 1 has 5 slides (index 0 to 4)
  // Carousel 2 has 5 slides (index 5 to 9)
  // Carousel 3 has 6 slides (index 10 to 15)
  // Carousel 4 has 5 slides (index 16 to 20)
  // Carousel 5 has 6 slides (index 21 to 26)
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
    
    // Create folder if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    console.log(`Processing ${carousel.name}...`);
    
    for (let s = 0; s < carousel.count; s++) {
      if (slideIndex >= slides.length) break;
      
      const slideElement = slides[slideIndex];
      const slidePath = path.join(dirPath, `slide_${s + 1}.png`);
      
      // Take element screenshot
      await slideElement.screenshot({
        path: slidePath,
        type: 'png'
      });
      
      console.log(`Saved: ${carousel.name}/slide_${s + 1}.png`);
      slideIndex++;
    }
  }
  
  await browser.close();
  console.log('All screenshots captured successfully!');
})();
