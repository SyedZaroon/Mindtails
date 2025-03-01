import { assets } from "../utils/assets";

export let Blog = [
  
    { 
        id: 1, image: assets.post3, 
        title: "Reflecting on the Blessings in My Life with", 
        categories: ["Lifestyle", "Photography"], 
        description: "A deep reflection on gratitude and appreciating the little things in life.", 
        date: "2025-02-20", 
        author: "John Doe", 
        comments: 12 
    },
    { 
        id: 2, image: assets.post8, 
        title: "Change: Coping with Life’s Transitions", 
        categories: ["Lifestyle"], 
        description: "How to embrace change and navigate life's unexpected turns with confidence.", 
        date: "2025-02-18", 
        author: "Emily Smith", 
        comments: 8 
    },
    { 
        id: 3, image: assets.post14, 
        title: "My Experience with Anxiety and Depression", 
        categories: ["Lifestyle", "Beauty"], 
        description: "A personal journey of overcoming mental health struggles and finding peace.", 
        date: "2025-02-15", 
        author: "Michael Johnson", 
        comments: 15 
    },
    { 
        id: 4, image: assets.insta1, 
        title: "Change: Coping with Life’s Transitions", 
        categories: ["Lifestyle"], 
        description: "Dealing with major life changes and learning to adapt with resilience.", 
        date: "2025-02-10", 
        author: "Sarah Wilson", 
        comments: 10 
    },
    { 
        id: 5, image: assets.insta2, 
        title: "Traveled: Lessons from Taking Risks", 
        categories: ["Travel", "Photography"], 
        description: "Exploring the world and the valuable life lessons learned along the way.", 
        date: "2025-02-05", 
        author: "James Carter", 
        comments: 20 
    },
    { 
        id: 6, image: assets.insta3, 
        title: "Learning to Embrace My Imperfections", 
        categories: ["Beauty", "Lifestyle"], 
        description: "Self-love and acceptance: how to embrace who you truly are.", 
        date: "2025-01-30", 
        author: "Jessica Brown", 
        comments: 18 
    },
    { 
        id: 7, image: assets.insta4, 
        title: "Travel: Exploring the World on My Own", 
        categories: ["Travel"], 
        description: "Solo travel experiences that changed my perspective on life.", 
        date: "2025-01-28", 
        author: "David Martinez", 
        comments: 25 
    },
    { 
        id: 8, image: assets.insta5, 
        title: "Moments that Matter in Life and Love", 
        categories: ["Lifestyle", "Photography"], 
        description: "Cherishing meaningful moments and building strong relationships.", 
        date: "2025-01-25", 
        author: "Sophia Lee", 
        comments: 14 
    },
    { 
        id: 9, image: assets.insta6, 
        title: "Breaking Free from Conventional Wisdom", 
        categories: ["Lifestyle"], 
        description: "Challenging societal norms and living life on your own terms.", 
        date: "2025-01-20", 
        author: "Robert Adams", 
        comments: 17 
    },
    { 
        id: 10, image: assets.hot2, 
        title: "Perspective: Seeing Life Through New Eyes", 
        categories: ["Photography", "Travel"], 
        description: "A visual journey that shifts the way we see the world.", 
        date: "2025-01-18", 
        author: "Anna White", 
        comments: 30 
    }
];


let slugMap = {}; // Store counts of slugs

Blog.forEach(post => {
  let baseSlug = post.title.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");

  // If the slug already exists, append a unique identifier
  if (slugMap[baseSlug]) {
    post.slug = `${baseSlug}-${post.id}`; // Append ID to make it unique
  } else {
    post.slug = baseSlug;
  }

  slugMap[post.slug] = true; // Store the generated slug
});
