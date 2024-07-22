export type User = {
    id: string,
    username: string,
    email: string,
    role: "admin" | "user",
    persona: string
    features: string[]
}