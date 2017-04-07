"use strict"

module.exports = {
    tableName: 'demoTable',

    globalId: 'Demo',

    schema: true,

    attributes: {

        email: {
            required: true,
            type: 'email'
        },
        password: {
            required: true,
            type: 'string'
        }
    }
}