export const swaggerDocument = {
    "openapi": "3.0.3",
    "info": {
        "title": "Work Shop",
        "version": "1.0.11"
    },
    "servers": [{
        "url": "https://localhost:3001"
    }],
    "tags": [{
            "name": "/",
            "description": "Host info",
            "externalDocs": {
                "description": "Find out more",
                "url": "http://swagger.io"
            }
        },
        {
            "name": "login",
            "description": "Access adm zone",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://swagger.io"
            }
        },
        {
            "name": "email",
            "description": "Access email controls",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://swagger.io"
            }
        },
        {
            "name": "adm",
            "description": "Access to Petstore orders",
            "externalDocs": {
                "description": "Find out more about our store",
                "url": "http://swagger.io"
            }
        },
        {
            "name": "lastId",
            "description": "Operations about user"
        },
        {
            "name": "logout",
            "description": "Operations about user"
        }
    ],
    "paths": {
        "/product": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Finds All products",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Product"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            }
        },
        "/product/:id": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Find product by ID",
                "description": "Returns a single product",
                "operationId": "getPetById",
                "parameters": [{
                    "name": "product_id",
                    "in": "path",
                    "description": "ID of product to return",
                    "required": true,
                    "schema": {
                        "type": "integer",
                        "format": "int64"
                    }
                }],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid ID supplied"
                    },
                    "404": {
                        "description": "Product not found"
                    }
                }
            }
        },
        "/about": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Finds About Text",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/About"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/contact": {
            "get": {
                "tags": [
                    "/"
                ],
                "summary": "Finds contact text",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Contact"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                }
            }
        },
        "/login": {
            "post": {
                "tags": [
                    "login"
                ],
                "summary": "Logs user into the system",
                "description": "",
                "operationId": "loginUser",
                "parameters": [{
                        "name": "username",
                        "in": "query",
                        "description": "The user name for login",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "password",
                        "in": "query",
                        "description": "The password for login in clear text",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "headers": {
                            "X-Rate-Limit": {
                                "description": "calls per hour allowed by the user",
                                "schema": {
                                    "type": "integer",
                                    "format": "int32"
                                }
                            },
                            "X-Expires-After": {
                                "description": "date in UTC when token expires",
                                "schema": {
                                    "type": "string",
                                    "format": "date-time"
                                }
                            }
                        },
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid username/password supplied"
                    }
                }
            }
        },
        "/login/email": {
            "post": {
                "tags": [
                    "login"
                ],
                "summary": "Create email",
                "parameters": [{
                        "name": "username",
                        "in": "query",
                        "description": "The user name for register",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    },
                    {
                        "name": "email",
                        "in": "query",
                        "description": "The email for register",
                        "required": false,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid username/password supplied"
                    }
                }
            }
        },
        "/email": {
            "get": {
                "tags": [
                    "email"
                ],
                "summary": "Finds All emails",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Email"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/email/:id": {
            "delete": {
                "tags": [
                    "email"
                ],
                "summary": "Delete email by id",
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/email/": {
            "patch": {
                "tags": [
                    "email"
                ],
                "summary": "Tolge email active",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "description": "Tolge email active",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Id"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Email"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/email//": {
            "put": {
                "tags": [
                    "email"
                ],
                "summary": "Update email",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "description": "Update email",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Email"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Email"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/product": {
            "patch": {
                "tags": [
                    "adm"
                ],
                "summary": "Togle Active Product",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "description": "Togle Active Product",
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ProductId"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/product/:id": {
            "delete": {
                "tags": [
                    "adm"
                ],
                "summary": "Delete Product",
                "description": "This can only be done by the logged in user.",
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/product/": {
            "post": {
                "tags": [
                    "adm"
                ],
                "summary": "Create Product",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ProductC"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/product//": {
            "put": {
                "tags": [
                    "adm"
                ],
                "summary": "Updade Product",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Product"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/about": {
            "put": {
                "tags": [
                    "adm"
                ],
                "summary": "Updade About",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/About"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/adm/contact": {
            "put": {
                "tags": [
                    "adm"
                ],
                "summary": "Updade Contact",
                "description": "This can only be done by the logged in user.",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Contact"
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/lastId": {
            "get": {
                "tags": [
                    "lastId"
                ],
                "summary": "Find number of last email id",
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "items": {
                                        "$ref": "#/components/schemas/LastId"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        },
        "/logout": {
            "post": {
                "tags": [
                    "logout"
                ],
                "summary": "Logout",
                "responses": {
                    "200": {
                        "description": "successful operation"
                    },
                    "400": {
                        "description": "Invalid tag value"
                    }
                },
                "security": [{
                    "petstore_auth": [
                        "write:pets",
                        "read:pets"
                    ]
                }]
            }
        }
    },
    "components": {
        "schemas": {
            "Email": {
                "type": "object",
                "properties": {
                    "email_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 10
                    },
                    "email": {
                        "type": "string",
                        "example": "email@email.com"
                    },
                    "name": {
                        "type": "string",
                        "example": "name user"
                    }
                }
            },
            "EmailId": {
                "type": "object",
                "properties": {
                    "email_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    }
                }
            },
            "About": {
                "type": "object",
                "properties": {
                    "about_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    },
                    "about": {
                        "type": "string",
                        "example": "about us"
                    }
                }
            },
            "Contact": {
                "type": "object",
                "properties": {
                    "contact_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    },
                    "name": {
                        "type": "string",
                        "example": "name adm"
                    },
                    "email": {
                        "type": "string",
                        "example": "email@emailcontato.com"
                    },
                    "telephone": {
                        "type": "string",
                        "example": "(32)-95555-3333"
                    }
                }
            },
            "Product": {
                "type": "object",
                "properties": {
                    "product_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 10
                    },
                    "name": {
                        "type": "string",
                        "example": "some art"
                    },
                    "image": {
                        "type": "string",
                        "example": "http:url"
                    },
                    "description": {
                        "type": "string",
                        "example": "some art is ..."
                    },
                    "url": {
                        "type": "string",
                        "example": "redirect url"
                    },
                    "active": {
                        "type": "booleam",
                        "example": true
                    },
                    "autoexplan": {
                        "type": "booleam",
                        "example": false
                    }
                }
            },
            "ProductC": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "example": "some art"
                    },
                    "image": {
                        "type": "string",
                        "example": "http:url"
                    },
                    "description": {
                        "type": "string",
                        "example": "some art is ..."
                    },
                    "url": {
                        "type": "string",
                        "example": "redirect url"
                    },
                    "active": {
                        "type": "booleam",
                        "example": true
                    },
                    "autoexplan": {
                        "type": "booleam",
                        "example": false
                    }
                }
            },
            "ProductId": {
                "type": "object",
                "properties": {
                    "product_id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    }
                }
            },
            "LastId": {
                "type": "object",
                "properties": {
                    "last_Id": {
                        "type": "integer",
                        "format": "int64",
                        "example": 1
                    }
                }
            }
        },
        "requestBodies": {
            "Product": {
                "description": "Product",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Product"
                        }
                    }
                }
            },
            "ProductC": {
                "description": "Product",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/ProductC"
                        }
                    }
                }
            },
            "ProductId": {
                "description": "Id",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/ProductId"
                        }
                    }
                }
            },
            "About": {
                "description": "About",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/About"
                        }
                    }
                }
            },
            "Contact": {
                "description": "Contact",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Contact"
                        }
                    }
                }
            },
            "Email": {
                "description": "Email",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/Email"
                        }
                    }
                }
            },
            "EmailId": {
                "description": "Id",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/EmailId"
                        }
                    }
                }
            },
            "LastId": {
                "description": "Id",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/LastId"
                        }
                    }
                }
            }
        },
        "securitySchemes": {
            "petstore_auth": {
                "type": "http",
                "flows": {
                    "implicit": {
                        "authorizationUrl": "https://localhost:3001/login",
                        "scopes": {
                            "write:pets": "modify pets in your account",
                            "read:pets": "read your pets"
                        }
                    }
                }
            },
            "api_key": {
                "type": "apiKey",
                "name": "bearer",
                "in": "header"
            }
        }
    }
};