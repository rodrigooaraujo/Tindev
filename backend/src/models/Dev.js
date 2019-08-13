const { Schema, model } = require('mongoose');
const DevSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
        bio: String,
        avatar: {
            type: String,
            require: true
        },
        likes: [
            {
                //It gonna referenciate  the Dev's ID
                type: Schema.Types.ObjectId,
                ref: 'Dev'
            }
        ],
        dislikes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Dev'
            }
        ]
    }, {
        //It will gonna to add createdAd, InsertedAt columns automatically
        timestamps: true
    }
);

module.exports = model('Dev', DevSchema);