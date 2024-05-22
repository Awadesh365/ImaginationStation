# Blog Post Website

This is a blog post website built using MongoDB as the database. The following calculations are based on the MongoDB free tier and the assumption that the website will have a maximum of 1,000 registered users and each blog post will consist of images and text.

## Storage Calculations

### User Data

- Assumed average user document size: 1 KB
- Total storage required for 1,000 users: 1 MB

### Blog Post Data

- Assumed average blog post document size: 50 KB
- Storage allocation: 90% for blog posts, 10% for user data

The MongoDB free tier provides 512 MB of storage space.

#### User Data Storage

- Space allocated for user data (10%): 51.2 MB
- Space required for 1,000 users: 1 MB
- Remaining space for user data: 50.2 MB
- Approximate additional users that can be stored: 50,000 users

#### Blog Post Storage

- Space allocated for blog posts (90%): 460.8 MB
- Number of blog posts that can be stored: 9,216 blog posts

## Summary

- With the MongoDB free tier, you can store approximately 9,216 blog posts.
- You can store data for 1,000 registered users initially, and there is enough space to accommodate approximately 50,000 additional users.
