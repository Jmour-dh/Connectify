const API_CONTACTS = "/api/contacts";

export async function createContact(newContact) {
  const response = await fetch(API_CONTACTS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Error api createContact");
    }
  }
}
