const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const filePath = '/Users/varunchodha/Portfolio-nexjs/src/app/work/projects/knowledge-base-ai.mdx';
if (!fs.existsSync(filePath)) {
  console.error("File does not exist!");
  process.exit(1);
}
const rawContent = fs.readFileSync(filePath, "utf-8");
const { data, content } = matter(rawContent);
console.log("Parsed Data:", JSON.stringify(data, null, 2));
