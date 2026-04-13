# 📘 Product Feedback API Documentation

Base URL: `https://product-feedback-app-7kxc.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          | This endpoint gets all suggestions from the database and returns them as a list.    |
| `suggestions`    | GET    | /get-suggestions-by-category  | This endpoint gets suggestions based on a specific category like Features, Bug, or UI.             |
| `suggestions`    | POST   | /add-one-suggestion           | This endpoint adds a new suggestion to the database.             |

---

### 🔹 GET `/get-all-suggestions`

**Description:** This endpoint gets all suggestions from the database and returns them as a list.

**Example Response:**
```
[
    {
        "id": 1,
        "title": "Add dark mode",
        "description": "Users want a dark theme",
        "category": "Feature"
    },
    {
        "id": 2,
        "title": "Fix image bug",
        "description": "Images are not loading",
        "category": "Bug"
    }
]
```
---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** This endpoint gets suggestions based on a specific category like Features, Bug, or UI.

**Example Response:**
```
[
    {
        "id": 1,
        "title": "Add dark mode",
        "description": "Users want a dark theme",
        "category": "Feature" 
    }
]
```
---

### 🔹 POST `/add-one-suggestion`

**Description:** This endpoint adds a new suggestion to the database.
```
**Example Request Body:**
{
    "title": "New idea",
    "description": "Some description",
    "category": "feature"
}

**Example Response:**

{
    "message": "Suggestion added successfully"
}
```
---

