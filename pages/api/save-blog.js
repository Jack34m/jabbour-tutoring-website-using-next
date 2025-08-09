import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { title, content, password } = req.body;

  if (!title || !content || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  if (password !== process.env.BLOG_ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const postsDir = path.join(process.cwd(), "data");
  const filePath = path.join(postsDir, "blog-posts.json");

  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir);
  }

  let posts = [];
  if (fs.existsSync(filePath)) {
    posts = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  posts.push({
    id: Date.now(),
    title,
    content,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

  return res.status(200).json({ message: "Post saved successfully" });
}
