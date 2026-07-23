const fs = require('fs');
const path = require('path');

// Helper to escape CSV fields
function escapeCSV(val) {
  if (val === undefined || val === null) return '""';
  let str = String(val);
  str = str.replace(/"/g, '""');
  return `"${str}"`;
}

const hashtags = "#servicebusiness #localbusinessowner #smallbusinessowner #hvaclife #plumbinglife #roofingcontractor #electriciansofinstagram #contractorlife #bluecollar #fieldservice #jobber #housecallpro #businessautomation #fieldservicesoftware #dispatching #invoicingapp #leadgeneration #missedcalltextback #reviewsmanagement #businessgrowth #operationsmanagement #salessystems #smallbusinesstips #homerenovations #tradesman #hvacservice #plumbing #roofing #electrician #airevlabs";

const baseOutputDir = path.join(__dirname, 'output');

function getAbsImages(folderName, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(path.join(baseOutputDir, folderName, `slide_${i}.jpg`));
  }
  return images.join(', ');
}

const posts = [
  {
    date: "2026-07-22 18:00",
    text: `Get premium service-business software for less — with zero setup fees during our Limited-Time Summer Offer. ☀️

Why pay $300 to $600+ every single month for Jobber "Plus" or Housecall Pro "MAX" just to unlock basic scheduling, missed call text-back, and mobile apps? 

With AI REV LABS Service OS, get everything included for a flat $150 USD/month:
- Up to 15 Included Users
- Unlimited CRM Contacts
- Online Booking & Dispatch
- Automated SMS/Email Reminders
- Missed Call Text-Back
- Automated 5-Star Review Requests
- Mobile App & White-Glove Onboarding ($0 setup fee)

Save up to $5,388/year and keep more profit in your pocket. 💰

👉 DM us "OS" or visit airevlabs.com to claim your spot today!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('comparison_1_price_reality_check', 5)
  },
  {
    date: "2026-07-23 18:00",
    text: `Stop switching between 5 different apps and paying separate subscriptions for scheduling, invoicing, website hosting, and CRM.

AI REV LABS Service OS gives you a complete, all-in-one platform for $150 USD/month:
1️⃣ Online Booking Calendar & Team Dispatching
2️⃣ Custom Mobile-Optimized Service Website Included
3️⃣ Visual Pipelines & Custom Job Intake Forms
4️⃣ Estimates, Invoices & On-Site Payments
5️⃣ Mobile App to manage your team on the go
6️⃣ Up to 15 Users & Unlimited CRM Contacts

Full white-glove onboarding included ($0 setup fee). We migrate your data and build your forms for you!

👉 DM us "PLATFORM" or visit airevlabs.com to get started.

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('comparison_2_core_platform_os', 5)
  },
  {
    date: "2026-07-24 18:00",
    text: `When you're busy on a job site and miss a call, what happens? 85% of leads won't call back — they just call your competitor. 

With AI REV LABS Service OS, your client communication is put on autopilot:
⚡ Missed Call Text-Back: Instantly sends a branded text to capture the lead before they go cold.
⚡ Automated SMS & Email Reminders: Reduce no-shows and speed up invoice collection.
⚡ Automated Review Requests: Text simple review links after completed jobs to build 5-star Google ratings.
⚡ Email & SMS Marketing Campaigns: Promote seasonal offers to repeat clients.

All included for a flat $150 USD/month during our Limited-Time Summer Offer.

👉 DM us "AUTOMATE" or visit airevlabs.com to claim your spot!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('comparison_3_lead_capture_automations', 5)
  },
  {
    date: "2026-07-25 18:00",
    text: `Tired of feature gating, contact caps, and paying $300 to $600+ per month?

Competitors lock essential tools like missed call text-back, advanced reminders, and mobile features behind their highest-priced tiers. 

At AI REV LABS, we do things differently:
✅ Everything Included for $150 USD/month flat
✅ Up to 15 Users & Unlimited CRM Contacts
✅ $0 Setup Fee — White-Glove Onboarding Included
✅ We import your contacts and build your custom forms for you!

Make the switch in 48 hours without any DIY setup hassle.

👉 DM us "SWITCH" or visit airevlabs.com to claim your spot!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('comparison_4_why_switch', 5)
  },
  {
    date: "2026-07-26 18:00",
    text: `Did you know 85% of missed calls won't call back? They just dial your competitor instead.

Stop doing everything yourself. Enter your new Employee of the Month: An AI Receptionist who never sleeps, never complains, and books appointments at 2 AM.

👉 DM us "AI" to see a live demo!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('carousel_1_pov_comedy', 5)
  },
  {
    date: "2026-07-27 18:00",
    text: `1️⃣ Missed Call Text-Back: Captures missed calls instantly before leads go cold.
2️⃣ 24/7 AI Chat Agent: Answers FAQs and books meetings on your website while you sleep.
3️⃣ Automated Google Reviews: Automatically requests 5-star ratings after completed jobs.

Want to install these in under 48 hours?

👉 DM us "GROWTH" to chat with our team!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('carousel_2_secret_tools', 5)
  },
  {
    date: "2026-07-28 18:00",
    text: `You spend money on ads, SEO, and socials... but it takes 4 hours to reply, calls go to voicemail, and there's no follow-up system.

You don't need more traffic — you need an automated net to catch the leads you already have!

👉 DM us "SYSTEM" for a free business automation audit!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('carousel_3_leaky_bucket', 6)
  },
  {
    date: "2026-07-29 18:00",
    text: `The Problem: Losing 5-10 hot leads a week because you're busy on job sites.
The Fix: AI Voice Agent + Missed Call Text-Back loop.
The Result: 100% lead response under 5s and 15 new bookings in month 1.

👉 DM us "RESULTS" to audit your workflow today!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('carousel_4_case_study', 5)
  },
  {
    date: "2026-07-30 18:00",
    text: `Humans need sleep, take sick days, and lose leads on weekends. An AI Receptionist operates 24/7/365, speaks 50+ languages, and costs a fraction of the price.

Upgrade your business operations today!

👉 DM us "UPGRADE" to see our AI agents in action!

${hashtags}`,
    link: "https://airevlabs.com",
    image: getAbsImages('carousel_5_myth_busting', 6)
  }
];

let csvContent = 'Date,Text,Link,Image\n';

posts.forEach(post => {
  const row = [
    escapeCSV(post.date),
    escapeCSV(post.text),
    escapeCSV(post.link),
    escapeCSV(post.image)
  ].join(',');
  csvContent += row + '\n';
});

const outputPath = path.join(__dirname, 'ghl_social_planner_carousels.csv');
fs.writeFileSync(outputPath, csvContent, 'utf8');

console.log('Successfully updated ghl_social_planner_carousels.csv');
