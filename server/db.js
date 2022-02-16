db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["googleAccount", "firstName", "lastName", "avatar", "description"],
            properties: {
                googleAccount: {
                    bsonType: "string",
                },
                firstName: {
                    bsonType: "string",
                },
                lastName: {
                    bsonType: "string",
                },
                avatar: {
                    bsonType: "string"
                },
                pseudo: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                }
            }
        }
    }
})

db.createCollection('events', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["recordId", "idOrganizer", "dateEvent", "visibility"],
            properties: {
                recordId: {
                    bsonType: "string"
                },
                idOrganizer: {
                    bsonType: "objectId"
                },
                dateEvent: {
                    bsonType: "date"
                },
                visibility: {
                    bsonType: "bool"
                },
                participants: {
                    bsonType: "object",
                    required: [],
                    properties: {
                        memberId: {
                            bsonType: "objectId"
                        },
                        status: {
                            bsonType: "string" //  pending, accepted, refused
                        }
                    }
                },
                isActive: {
                    bsonType: "bool"
                }
            }
        }
    }
})