export const createUserPayload = (name: string, job:string): Record<string, any> => {
    return {
        name: name,
        job: job
    };
};

// Payload for updating a user
export const updateUserPayload = (): Record<string, any> => {
    return {
        name: "neo",
        job: "The One",
        skills: [
            { name: "Martial Arts", level: "Expert" },
            { name: "Hacking", level: "Advanced" },
            { name: "Bullet Dodging", level: "Master" }
        ]
    };
};

// Payload for deleting a user (if needed)
export const deleteUserPayload = (): Record<string, any> => {
    return {
        "userId": "12345"
    };
};