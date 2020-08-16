module.exports = {
    User: ["/products/", "/products/patch/id/", "/products/get/id/",
        "/orders/", "/orders/tables", "/orders/get/id/", "/orders/get/calendar",
    ],

    Admin: [
        "/products/", "/products/post", "/products/patch/id/", "/products/put/id/", "/products/delete/id/", "/products/get/id/", "/products/tables",
        "/orders/", "/orders/tables", "/orders/post/", "/orders/get/id/", "/orders/put/id/", "/orders/delete/id/", "/orders/patch/id/", "/orders/get/calendar", "/orders/get/all/ids/",
        "/user/signup", "/user/delete/id/", "/user/get/users",
        "/items/flowers", "/items/flowers/post", "/items/delete/id/", "/items/put/id/", "/items/get/id/", "/items/patch/id/",
        "/rullakot/get", "/rullakot/post", "/rullakot/get/id/", "/rullakot/put/id/", "/rullakot/patch/id/", "/rullakot/delete/id/",
        "/hyllyt/get", "/hyllyt/post", "/hyllyt/get/id/", "/hyllyt/put/id/", "/hyllyt/patch/id/", "/hyllyt/delete/id/",
        "/palautetut/get", "/palautetut/post", "/palautetut/get/id/", "/palautetut/put/id/", "/palautetut/patch/id/", "/palautetut/delete/id/",
        "/calendar/", "/calendar/get/id/", "/calendar/post", "/calendar/delete/id/", "/calendar/put/id/", "/calendar/patch/id/"
    ],

    Kuski: [
        "/palautetut/get", "/palautetut/post", "/palautetut/put/id/", "/palautetut/patch/id/",
        "/rullakot/get", "/rullakot/post",
        "/hyllyt/get", "/hyllyt/post",
        "/orders/get/calendar",
    ]
}