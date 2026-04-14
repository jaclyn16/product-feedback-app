# 📝 Project's Title — Product Feedback App!

## 📌 Project Description & Purpose

This project is a full stack product feedback app where users can view feedback suggestions, filter suggestions by category, and add new feedback.

## 🚀 Live Site

Here's the link to view the live app: https://product-feedback-app16.netlify.app/

## 🖼️ Screenshots
<img width="1216" height="698" alt="Screenshot 2026-04-14 at 1 35 47 PM" src="https://github.com/user-attachments/assets/e23e8ad9-8d92-4cfd-818e-d1f9edf8f3ba" />

<img width="711" height="468" alt="Screenshot 2026-04-14 at 1 38 23 PM" src="https://github.com/user-attachments/assets/a10337f9-bb6d-4b9e-aae9-cffaf53a732d" />




## ✨ Features

This is what you can do on the app: 
- View all feedback suggestions
- Filter suggestions by category
- Add new feedback
- See an empty state when there are no suggestions
- Use the app on desktop, tablet, and mobile screen sizes

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, JavaScript
- **Framework:** React
- **Deployment:** Netlify

**Server/API**

- **Languages:** JavaScript
- **Framework:** Node.js, Express
- **Deployment:** Render

**Database**

- **Languages:** SQL
- **Deployment:** PostgreSQL / Neon

## 🔹 API Documentation

These are the API endpoints I built: 
1. GET all suggestions
2. POST add one suggestion
3. GET suggestion by category

Here's the link to the full API documentation: https://github.com/jaclyn16/product-feedback-app/blob/main/api-documentation.md

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category VARCHAR NOT NULL
  );

  INSERT INTO suggestions (title, description, category)
  VALUES 
  ('Add dark mode', 'Users want a dark theme', 'Feature'),
  ('Fix image bug', 'Images are not loading', 'Bug'),
  ('Improve UI spacing', 'Spacing looks off', 'UI');
  
  
  INSERT INTO suggestions (title, description, category)
  VALUES ('New idea', 'Some description', 'Feature');
```

## 💭 Reflections

**What I learned:** I learned how to build a full stack app that connects the frontend, backend, and database together. I also learned more about React state, useEffect, API calls, and resposive CSS for desktop, tablet, and mobile layouts.

**What I'm proud of:** I am proud that I got the app working across different screen sizes and was able to match the design much closer to the figma example. I am also proud that I was able to connect the feedbacl form to the backend and database.

**What challenged me:** The most challenging part wa getting the responsive layout to look correct on desktop, tablet, and mobile without breaking the other versions. Another challenge was working with icons, images, and making sure the right assets showed in the correct places.

**Future ideas for how I'd continue building this project:** 
1. Add voting for feedback suggestions
2. Add comments on each suggestion
3. Add editing and deleting feedback

## 🙌 Credits & Shoutouts 

I used class materials, guidance from both of my instructors, and documentation to help build this project. I also used React and Express documentation while working through different parts of the app.

