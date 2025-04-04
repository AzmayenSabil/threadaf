import * as z from 'zod'

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, { message: "Minimum 3 characters"}).max(50).nonempty(),
    username: z.string().min(3, { message: "Minimum 3 characters"}).max(50).nonempty(),
    bio: z.string().max(1000),
})