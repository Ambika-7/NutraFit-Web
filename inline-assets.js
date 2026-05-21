const fs = require('fs');
const path = require('path');

console.log('📦 Starting Asset Inliner...');

// 1. Inline index.html
try {
  let indexHtml = fs.readFileSync('index.html', 'utf8');
  let styleCss = fs.readFileSync(path.join('assets', 'css', 'style.css'), 'utf8');
  let scriptJs = fs.readFileSync(path.join('assets', 'js', 'script.js'), 'utf8');

  // Fix relative image paths in style.css for root level index.html
  styleCss = styleCss.replace(/\.\.\/images\//g, './assets/images/');

  // Replace stylesheet link
  const linkRegex = /<link rel="stylesheet" href="\.\/assets\/css\/style\.css">/;
  indexHtml = indexHtml.replace(linkRegex, `<style>\n${styleCss}\n</style>`);

  // Replace script link
  const scriptRegex = /<script src="\.\/assets\/js\/script\.js" defer><\/script>/;
  indexHtml = indexHtml.replace(scriptRegex, `<script>\n${scriptJs}\n</script>`);

  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('✅ Successfully inlined index.html!');
} catch (err) {
  console.error('❌ Failed to inline index.html:', err.message);
}

// 2. Inline plan.html
try {
  let planHtml = fs.readFileSync('plan.html', 'utf8');
  let planCss = fs.readFileSync('plan.css', 'utf8');
  let planJs = fs.readFileSync('plan.js', 'utf8');

  // Replace stylesheet link
  const linkRegex = /<link rel="stylesheet" href="plan\.css">/;
  planHtml = planHtml.replace(linkRegex, `<style>\n${planCss}\n</style>`);

  // Replace script link
  const scriptRegex = /<script src="plan\.js"><\/script>/;
  planHtml = planHtml.replace(scriptRegex, `<script>\n${planJs}\n</script>`);

  fs.writeFileSync('plan.html', planHtml, 'utf8');
  console.log('✅ Successfully inlined plan.html!');
} catch (err) {
  console.error('❌ Failed to inline plan.html:', err.message);
}

// 3. Inline blog.html
try {
  let blogHtml = fs.readFileSync('blog.html', 'utf8');
  let blogCss = fs.readFileSync('blog.css', 'utf8');

  // Replace stylesheet link
  const linkRegex = /<link rel="stylesheet" href="blog\.css">/;
  blogHtml = blogHtml.replace(linkRegex, `<style>\n${blogCss}\n</style>`);

  fs.writeFileSync('blog.html', blogHtml, 'utf8');
  console.log('✅ Successfully inlined blog.html!');
} catch (err) {
  console.error('❌ Failed to inline blog.html:', err.message);
}

// 4. Inline contact.html
try {
  let contactHtml = fs.readFileSync('contact.html', 'utf8');
  let contactCss = fs.readFileSync('contact.css', 'utf8');

  // Replace stylesheet link
  const linkRegex = /<link rel="stylesheet" href="contact\.css">/;
  contactHtml = contactHtml.replace(linkRegex, `<style>\n${contactCss}\n</style>`);

  fs.writeFileSync('contact.html', contactHtml, 'utf8');
  console.log('✅ Successfully inlined contact.html!');
} catch (err) {
  console.error('❌ Failed to inline contact.html:', err.message);
}

// 5. Inline signup.html
try {
  let signupHtml = fs.readFileSync('signup.html', 'utf8');
  let signupCss = fs.readFileSync('signup.css', 'utf8');

  // Replace stylesheet link
  const linkRegex = /<link rel="stylesheet" href="signup\.css">/;
  signupHtml = signupHtml.replace(linkRegex, `<style>\n${signupCss}\n</style>`);

  fs.writeFileSync('signup.html', signupHtml, 'utf8');
  console.log('✅ Successfully inlined signup.html!');
} catch (err) {
  console.error('❌ Failed to inline signup.html:', err.message);
}

console.log('🎉 All files inlined successfully!');
