export function validateImageUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function validateDescription(description: string): boolean {
  return description.trim().length > 0 && description.length <= 500;
}

export function validateCategory(category: string): boolean {
  const validCategories = ["logos", "branding", "web", "mobile", "print"];
  return validCategories.includes(category.toLowerCase());
}
